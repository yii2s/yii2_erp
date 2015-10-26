<?php
/**
 * Created by PhpStorm.
 * User: LinHongYou
 * Date: 2015/9/23
 * Time: 18:30
 */

namespace boss\models\order;

use boss\models\operation\OperationCity;
use common\models\finance\FinanceOrderChannel;
use core\models\operation\CoreOperationArea;
use core\models\order\OrderPay;
use Yii;
use core\models\order\Order as OrderModel;
use core\models\worker\Worker;
use yii\helpers\ArrayHelper;
use boss\models\operation\OperationShopDistrict;
use core\models\operation\CoreOperationCity;
use common\models\order\OrderStatusDict;


class Order extends OrderModel
{

    public $orderBookedDate;
    public $orderBookedTimeRange;

    public function rules()
    {
        return array_merge([
            [['order_customer_phone','orderBookedDate','orderBookedTimeRange'],'required']
        ],parent::rules());
    }

    public static function getWorkerInfoByPhone($phone)
    {
        return Worker::getWorkerInfoByPhone($phone);
    }


    public function getOrderBookedCountList()
    {
        return ["120" => "两小时", "150" => "两个半小时", "180" => "三小时", "210" => "三个半小时", "240" => "四小时", "270" => "四个半小时", "300" => "五小时", "330" => "五个半小时", "360" => "六小时"];
    }

    public function getCustomerNeeds()
    {
        return [
            '重点打扫厨房'=>'重点打扫厨房',
            '重点打扫卫生间'=>'重点打扫卫生间',
            '家有爱宠'=>'家有爱宠',
            '上门前打个电话'=>'上门前打个电话',
            '很久没打扫了'=>'很久没打扫了',
            '阿姨不要很多话'=>'阿姨不要很多话'
        ];
    }

    /**
     * TODO 获取开通省份列表
     * @return array
     */
    public function getOnlineProvinceList(){
        $province_list = OperationCity::find()->select(['province_id','province_name'])->where(['operation_city_is_online'=>1])->groupBy(['province_id'])->all();
        return ArrayHelper::map($province_list,'province_id','province_name');
    }
    /**
     * 获取已开通城市列表
     * @return array
     */
    public static function getOnlineCityList(){
//         $city_list = OperationCity::find()->select(['city_id','city_name'])->where(['province_id'=>$province_id,'operation_city_is_online'=>1])->all();
//         return ArrayHelper::map($city_list,'city_id','city_name');
        
        $onlineCityList = CoreOperationCity::getCityOnlineInfoList();
        return $onlineCityList?ArrayHelper::map($onlineCityList,'city_id','city_name'):[];
    }

    public static function getCountyList($city_id)
    {
        $county_list = CoreOperationArea::getAreaList($city_id);
        $countys = [];
        if(is_array($county_list)) {
            foreach ($county_list as $k => $v) {
                $county = explode('_', $k);
                $countys[$county[0]] = $v;
            }
        }
        return $countys;
    }

    public function getOrderBookedTimeRangeList($range = 2)
    {
        $order_booked_time_range = [];
        for ($i = 8; $i <= 18; $i++) {
            $hour = str_pad($i, 2, '0', STR_PAD_LEFT);
            $hour2 = str_pad($i + intval($range), 2, '0', STR_PAD_LEFT);
            $minute = ($range - intval($range) == 0) ? '00' : '30';
            $order_booked_time_range["{$hour}:00-{$hour2}:{$minute}"] = "{$hour}:00-{$hour2}:{$minute}";
        }
        return $order_booked_time_range;
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return parent::attributeLabels()+[
            'orderBookedDate' => '预约服务日期',
            'orderBookedTimeRange' => '预约服务时间',
        ];
    }

    /**
     * 获取订单渠道
     * @param int $channel_id
     * @return array|bool
     */
    public function getOrderChannelList($channel_id = 0)
    {
        $list = FinanceOrderChannel::get_order_channel_list_info();
        $channel = ArrayHelper::map($list, 'id', 'finance_order_channel_name');
        return $channel_id == 0 ? $channel : (isset($channel[$channel_id]) ? $channel[$channel_id] : false);
    }


    public function createNew($post)
    {
        $post['Order']['admin_id'] = Yii::$app->user->id;
        $post['Order']['order_ip'] = Yii::$app->request->userIP;
        $post['Order']['order_src_id'] = 1; //订单来源BOSS
        $post['Order']['channel_id'] = empty($post['Order']['channel_id'])?20:$post['Order']['channel_id']; //订单渠道
        $post['Order']['order_customer_need'] = (isset($post['Order']['order_customer_need']) && is_array($post['Order']['order_customer_need']))?implode(',',$post['Order']['order_customer_need']):''; //客户需求
        //预约时间处理
        $time = explode('-',$post['Order']['orderBookedTimeRange']);
        $post['Order']['order_booked_begin_time'] = strtotime($post['Order']['orderBookedDate'].' '.$time[0].':00');
        $post['Order']['order_booked_end_time'] = strtotime(($time[1]=='24:00')?date('Y-m-d H:i:s',strtotime($post['Order']['orderBookedDate'].'00:00:00 +1 days')):$post['Order']['orderBookedDate'].' '.$time[1].':00');
        return parent::createNew($post['Order']);
    }
    
    /*
     * 获取已上线商圈列表
     * @return array [id=>operation_shop_district_name,...]
     */
    public static function getDistrictList()
    {
        $districtList = OperationShopDistrict::getCityShopDistrictList();
        return $districtList?ArrayHelper::map($districtList,'id','operation_shop_district_name'):[];
    }
    
    /**
     * 获取订单状态列表
     */
    public static function getStatusList()
    {
        $statusList = OrderStatusDict::find()->asArray()->all();
        return $statusList ? ArrayHelper::map($statusList, 'id', 'order_status_name') : [];
    }
}