<?php

namespace boss\controllers;

use common\models\Customer;
use common\models\CustomerAddress;
use common\models\CustomerWorker;
use core\models\Worker;
use Yii;
use core\models\order\OrderSearch;
use boss\components\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use core\models\order\Order;
use yii\web\Response;

/**
 * OrderController implements the CRUD actions for Order model.
 */
class OrderController extends Controller
{

    public function actionCustomer()
    {
        $phone = Yii::$app->request->get('phone');
        Yii::$app->response->format = Response::FORMAT_JSON;
        return Customer::find()->where(['customer_phone'=>$phone])->one();
    }

    public function actionCustomerAddress($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return CustomerAddress::findAll(['customer_id'=>$id]);
    }

    public function actionCustomerUsedWorkers($id)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $customerWorker = CustomerWorker::findAll(['customer_id'=>$id]);
        $worker = [];
        foreach($customerWorker as $k=>$v)
        {
            $worker[$k] = $v->attributes;
            $worker[$k]['worker'] = Worker::findOne($v->woker_id);
        }
        return $worker;
    }

    public function actionWorker()
    {
        $phone = Yii::$app->request->get('phone');
        Yii::$app->response->format = Response::FORMAT_JSON;
        return Worker::find()->where(['worker_phone'=>$phone])->one();
    }
    /**
     * Lists all Order models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new OrderSearch;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
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
            $post['Order']['admin_id'] = Yii::$app->user->id;
            $post['Order']['order_ip'] = ip2long(Yii::$app->request->userIP);
            $post['Order']['order_src_id'] = 1; //订单来源BOSS
            $post['Order']['channel_id'] = 1; //TODO 订单来源渠道BOSS
            $post['Order']['order_channel_name'] = 'BOSS'; //TODO 订单来源渠道BOSS
            $post['Order']['order_channel_order_num'] = ''; //TODO 渠道订单号
            if ($model->createNew($post)) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        }
        return $this->render('create', [
            'model' => $model,
        ]);
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
        if (($model = Order::findById($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
