<?php

namespace boss\controllers\order;

use core\models\finance\FinanceRefundadd;
use core\models\customer\CustomerAddress;
use core\models\order\OrderTool;
use core\models\order\OrderWorkerRelation;
use core\models\worker\Worker;
use Yii;
use boss\components\BaseAuthController;
use boss\models\order\OrderSearch;
use boss\models\order\Order;
use yii\base\ErrorException;
use yii\base\Exception;
use yii\web\NotFoundHttpException;
use yii\web\Response;
use core\models\customer\Customer;
use core\models\order\OrderStatusHistory;
use core\models\shop\Shop;
use common\models\order\OrderStatusDict;

/**
 * OrderController implements the CRUD actions for Order model.
 */
class OrderController extends BaseAuthController
{
    public function actionTest()
    {
        return OrderTool::createOrderCode();
    }
    
    public function actionCancelOrder()
    {
        //TODO: Xiaobo
        $admin_id = 0;
    
        $params = yii::$app->request->post();
        $order_id = $params['order_id'];
        $cancel_type = $params['cancel_type'];
        $cancel_note = $params['cancel_note'];
    
        return Order::cancel($order_id, $admin_id, $cancel_type, $cancel_note);
    }

    public function actionCustomer()
    {
        $phone = Yii::$app->request->get('phone');
        Yii::$app->response->format = Response::FORMAT_JSON;
        $customer = Customer::getCustomerInfo($phone);
        if(empty($customer)){
            if(Customer::adminAddCustomer($phone)) {
                $customer = Customer::getCustomerInfo($phone);
            }
        }
        return $customer;

    }

    public function actionCustomerAddress($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $address_list = CustomerAddress::listAddress($id);
        $address = [];
        if(is_array($address_list)) {
            foreach ($address_list as $v) {
                $address[$v['id']] = $v;
            }
        }
        return $address;
    }

    public function actionCustomerUsedWorkers($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
       return Customer::getCustomerUsedWorkers($id);
    }

    public function actionWorker()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $phone = Yii::$app->request->get('phone');
        return Order::getWorkerInfoByPhone($phone);
    }

    public function actionGetGoods()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $longitude = Yii::$app->request->get('lng');
        $latitude = Yii::$app->request->get('lat');
       return Order::getGoods($longitude,$latitude);
    }

     public function actionGetCity()
     {
         Yii::$app->response->format = Response::FORMAT_JSON;
         $province_id = Yii::$app->request->get('province_id');
         return Order::getOnlineCityList($province_id);
     }

    public function actionGetCounty()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $city_id = Yii::$app->request->get('city_id');
        return Order::getCountyList($city_id);
    }

    public function actionCoupons()
    {
        $id = Yii::$app->request->get('id');
        $service_id = Yii::$app->request->get('service_id');
        return '[
                {
                    "id": 1,
                    "coupon_name": "优惠券30",
                    "coupon_money": 30
                },
                {
                    "id": 2,
                    "coupon_name": "40优惠券",
                    "coupon_money": 40
                },
                {
                    "id": 3,
                    "coupon_name": "50优惠券",
                    "coupon_money": 50
                }
            ]';
    }

    public function actionCards($id)
    {
        return '[
                {
                    "id": 1,
                    "card_code": "1234567890",
                    "card_money": 1000
                },
                {
                    "id": 2,
                    "card_code": "9876543245",
                    "card_money": 3000
                },
                {
                    "id": 3,
                    "card_code": "3840959205",
                    "card_money": 5000
                }
            ]';
    }


    /**
     * 获取待手工指派的订单
     * @return $this|static
     */
    public function actionGetWaitManualAssignOrder()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order = OrderSearch::getWaitManualAssignOrder(Yii::$app->user->id,true);
        if($order){
            return
                [
                    'order'=>$order,
                    'ext_pay'=>$order->orderExtPay,
                    'ext_pop'=>$order->orderExtPop,
                    'ext_customer'=>$order->orderExtCustomer,
                    'ext_flag'=>$order->orderExtFlag,
                    'operation_long_time'=>Order::MANUAL_ASSIGN_lONG_TIME,
                    'booked_time_range'=>date('Y-m-d    H:i-',$order->order_booked_begin_time).date('H:i',$order->order_booked_end_time),
                ];
        }else{
            return false;
        }
    }

    /**
     * 获取可指派阿姨的列表
     * @return array
     */
    public function actionGetCanAssignWorkerList()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id =  Yii::$app->request->get('order_id');
        $order = Order::findOne($order_id);

        $district_id = $order->district_id;
        try{
            $used_worker_list = Customer::getCustomerUsedWorkers($order->orderExtCustomer->customer_id);
            $used_worker_ids = [];
            if (is_array($used_worker_list)) {
                foreach ($used_worker_list as $v) {
                    $used_worker_ids[] = $v['worker_id'];
                }
            }
        }catch (Exception $e){

        }
        //根据商圈获取阿姨列表 第二个参数 1自有 2非自有
        try {
            $worker_list = array_merge(Worker::getDistrictFreeWorker($district_id, 1, $order->order_booked_begin_time, $order->order_booked_end_time), Worker::getDistrictFreeWorker($district_id, 2, $order->order_booked_begin_time, $order->order_booked_end_time));
        }catch (Exception $e){
            return ['code'=>500,'msg'=>'获取阿姨列表接口异常！'];
        }
        $worker_ids = [];
        $workers = [];
        if (is_array($worker_list)) {
            foreach ($worker_list as $k => $v) {
                $worker_ids[] = $v['id'];
                $workers[$v['id']] = $worker_list[$k];
                $workers[$v['id']]['tag'] = in_array($v['id'], $used_worker_ids) ? '服务过' : "";
                $workers[$v['id']]['tag'] = ($v['id'] == $order->order_booked_worker_id) ? '指定阿姨' : $workers[$v['id']]['tag'];
                $workers[$v['id']]['order_booked_time_range'] = [];
                $workers[$v['id']]['memo'] = [];
                $workers[$v['id']]['status'] = [];
            }
            $worker_orders = OrderSearch::getListByWorkerIds($worker_ids, $order->order_booked_begin_time);
            foreach ($worker_orders as $v) {
                $workers[$v->orderExtWorker->worker_id]['order_booked_time_range'][] = date('H:i', $v->order_booked_begin_time) . '-' . date('H:i', $v->order_booked_end_time);
            }
            $order_worker_relations = OrderWorkerRelation::getListByOrderIdAndWorkerIds($order_id, $worker_ids);
            foreach ($order_worker_relations as $v) {
                $workers[$v->worker_id]['memo'][] = $v->order_worker_relation_memo;
                $workers[$v->worker_id]['status'][] = $v->order_worker_relation_status;
            }
        }
        return ['code'=>200,'data'=>$workers];

    }

    public function actionSearchAssignWorker()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id =  Yii::$app->request->get('order_id');
        $phone =  Yii::$app->request->get('phone');
        $worker_name =  Yii::$app->request->get('worker_name');

        $order = Order::findOne($order_id);
        $used_worker_list = Customer::getCustomerUsedWorkers($order->orderExtCustomer->customer_id);
        $used_worker_ids = [];
        if (is_array($used_worker_list)) {
            foreach ($used_worker_list as $v) {
                $used_worker_ids[] = $v['worker_id'];
            }
        }
        //根据商圈获取阿姨列表 第二个参数 1自有 2非自有
        try {
            $worker_list = Worker::searchWorker($worker_name, $phone);
        }catch (Exception $e){
            return ['code'=>500,'msg'=>'获取阿姨列表接口异常！'];
        }
        $worker_ids = [];
        $workers = [];
        if (is_array($worker_list)) {
            foreach ($worker_list as $k => $v) {
                $worker_ids[] = $v['id'];
                $workers[$v['id']] = $worker_list[$k];
                $workers[$v['id']]['tag'] = in_array($v['id'], $used_worker_ids) ? '服务过' : "";
                $workers[$v['id']]['tag'] = ($v['id'] == $order->order_booked_worker_id) ? '指定阿姨' : $workers[$v['id']]['tag'];
                $workers[$v['id']]['order_booked_time_range'] = [];
                $workers[$v['id']]['memo'] = [];
                $workers[$v['id']]['status'] = [];
            }
            $worker_orders = OrderSearch::getListByWorkerIds($worker_ids, $order->order_booked_begin_time);
            foreach ($worker_orders as $v) {
                $workers[$v->orderExtWorker->worker_id]['order_booked_time_range'][] = date('H:i', $v->order_booked_begin_time) . '-' . date('H:i', $v->order_booked_end_time);
            }
            $order_worker_relations = OrderWorkerRelation::getListByOrderIdAndWorkerIds($order_id, $worker_ids);
            foreach ($order_worker_relations as $v) {
                $workers[$v->worker_id]['memo'][] = $v->order_worker_relation_memo;
                $workers[$v->worker_id]['status'][] = $v->order_worker_relation_status;
            }
        }
        return ['code'=>200,'data'=>$workers];


    }



    /**
     * Lists all Order models.
     * @return mixed
     */
    public function actionIndex()
    {
        //Yii::info('xiaobo: '.json_encode(Yii::$app->request->getQueryParams()));
        
        $searchModel = new OrderSearch; 
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }
    
    /**
     * 通过搜索关键字获取门店信息
     * 联想搜索通过ajax返回
     * @param q string 关键字
     * @return result array 门店信息
     */
    public function actionShowShop($q = null)
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $out = ['results' => ['id' => '', 'text' => '']];
        $condition = '';
        if($q!=null){
            $condition = 'name LIKE "%' . $q .'%"';
        }
        $shopResult = Shop::find()->where($condition)->select('id, name AS text')->asArray()->all();
        $out['results'] = array_values($shopResult);
        //$out['results'] = [['id' => '1', 'text' => '门店'], ['id' => '2', 'text' => '门店2'], ['id' => '2', 'text' => '门店3']];
        return $out;
    }

    /**
     * Displays a single Order model.
     * @param string $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);
        $post = Yii::$app->request->post();
        if($model->load($post)) {
            $post['Order']['admin_id'] = Yii::$app->user->id;
            $post['Order']['order_ip'] = ip2long(Yii::$app->request->userIP);

            if ($model->update($post)) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        }
        return $this->render('view', ['model' => $model]);

    }


    /**
     * Creates a new Order model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Order();
        $post = Yii::$app->request->post();
        if($model->load($post)){
            if ($model->createNew($post)) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        }else{//init
            $model->order_booked_count = 120; //服务时长初始值120分钟
            $model->order_booked_worker_id=0; //不指定阿姨
            $model->orderBookedTimeRange = '08:00-10:00';//预约时间段初始值
            $model->order_pay_type = 1;//支付方式 初始值
            $model->order_flag_sys_assign = 1;//是否系统指派
        }
        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * 订单指派页面
     * @return string
     */
    public function actionAssign()
    {
        return $this->render('assign');
    }

    /**
     * 不能指派
     * @return array|bool
     */
    public function actionCanNotAssign()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id =  Yii::$app->request->get('order_id');
        return Order::manualAssignUndone($order_id,Yii::$app->user->id,true);
    }
    
    /**
     * 指派
     * @return array|bool
     */
    public function actionDoAssign()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $order_id =  Yii::$app->request->post('order_id');
        $worker_id =  Yii::$app->request->post('worker_id');
        return Order::manualAssignDone($order_id,$worker_id,Yii::$app->user->id,true);
    }


    /**
     * 添加订单和阿姨的关系信息
     *
     */
    public function actionCreateOrderWorkerRelation()
    {
        $order_id = Yii::$app->request->post('order_id');
        $worker_id = Yii::$app->request->post('worker_id');
        $memo = Yii::$app->request->post('memo');
        $status = Yii::$app->request->post('status');
        return OrderWorkerRelation::addOrderWorkerRelation($order_id,$worker_id,$memo,$status,Yii::$app->user->id);
    }


    /**
     * 添加修改客户地址
     * @param $address_id
     * @return array
     */
    public function actionSaveAddress($address_id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $province_id = Yii::$app->request->post('province_id');
        $city_id = Yii::$app->request->post('city_id');
        $county_id = Yii::$app->request->post('county_id');
        $province_name = Yii::$app->request->post('province_name');
        $city_name = Yii::$app->request->post('city_name');
        $county_name = Yii::$app->request->post('county_name');
        $detail = Yii::$app->request->post('detail');
        $nickname = Yii::$app->request->post('nickname');
        $phone = Yii::$app->request->post('phone');
        $customer_id = Yii::$app->request->post('customer_id');
        if($address_id>0){
            //修改
            $address = CustomerAddress::updateAddress($address_id, $province_name, $city_name, $county_name, $detail, $nickname, $phone);
        }else{
            //添加
            $address = CustomerAddress::addAddress($customer_id,$province_name,$city_name,$county_name,$detail,$nickname,$phone);
        }
        if($address){
            return ['code'=>200,'data'=>$address];
        }else{
            return ['code'=>500,'error'=>'保存失败'];
        }
    }

    /**
     * Deletes an existing Order model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Order model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $id
     * @return Order the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Order::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
    
}