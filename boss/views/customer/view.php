<?php

use yii\helpers\Html;
use kartik\detail\DetailView;
use kartik\datecontrol\DateControl;
use kartik\widgets\ActiveForm;
use kartik\widgets\Select2;
use yii\web\JsExpression;
use kartik\builder\Form;
use kartik\grid\GridView;
use kartik\date\DatePicker;
use boss\components\AreaCascade;
use yii\data\ActiveDataProvider;
use yii\helpers\ArrayHelper;

use core\models\customer\Customer;
use core\models\customer\CustomerExtSrc;
use core\models\customer\CustomerAddress;
use core\models\order\OrderSearch;
use core\models\customer\CustomerComment;
use core\models\customer\CustomerExtScore;
use core\models\customer\CustomerExtBalance;
use core\models\customer\CustomerBlockLog;

/**
 * @var yii\web\View $this
 * @var common\models\Worker $model
 */
$this->title = '客户详情';
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Customers'), 'url' => ['View']];
$this->params['breadcrumbs'][] = $this->title;

?>
<div class="customer-view">
<?php 
//城市
$city_name = Customer::getCityName($model->id);
//来源
$customerExtSrc = CustomerExtSrc::getFirstSrc($model->id);
$platform_name = $customerExtSrc == false ? '-' : $customerExtSrc->platform_name; 
$channal_name = $customerExtSrc == false ? '-' : $customerExtSrc->channal_name; 
$device_name = $customerExtSrc == false ? '-' : $customerExtSrc->device_name;
$device_no = $customerExtSrc == false ? '-' : $customerExtSrc->device_no;

//全部服务地址
$customerAddress = CustomerAddress::listAddress($model->id);
if (empty($customerAddress)) {
    return '-';
}
$addressStr = '';
foreach ($customerAddress as $address) {
    if ($address != NULL) {
        $addressStr .= $address->operation_province_name
            .$address->operation_city_name
            .$address->operation_area_name
            .$address->customer_address_detail
            .' | '.$address->customer_address_nickname
            .' | '.$address->customer_address_phone;
    }
}

//订单
$order_count = OrderSearch::getCustomerOrderCount($model->id);
//评价数量
$comment_count = CustomerComment::getCustomerCommentCount($model->id);
//积分
$score = CustomerExtScore::getCustomerScore($model->id);
//余额
$balance = CustomerExtBalance::getCustomerbalance($model->id);
//历史状态集
$customerBlockLog = CustomerBlockLog::listBlockLog($model->id);
//当前状态
$currentBlockStatus = CustomerBlockLog::getCurrentBlockStatus($model->id);
echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'基本信息',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        // [
        //     'attribute'=>'', 
        //     'label'=>'城市',
        //     'format'=>'raw',
        //     'value'=> $operationCity ? $operationCity->city_name : '-',
        //     'type'=>DetailView::INPUT_TEXT,
        //     'valueColOptions'=>['style'=>'width:90%']
        // ],
        
        // 'customer_name',
        [
            'attribute'=>'', 
            'label'=>'城市',
            'format'=>'raw',
            'value'=>$city_name,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        'customer_phone',
        [
            'attribute'=>'', 
            'label'=>'平台',
            'format'=>'raw',
            'value'=>$platform_name,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
       [
            'attribute'=>'', 
            'label'=>'聚道',
            'format'=>'raw',
            'value'=>$channal_name,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        [
            'attribute'=>'', 
            'label'=>'设备',
            'format'=>'raw',
            'value'=>$device_name,
            'type'=>DetailView::INPUT_SWITCH,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        [
            'attribute'=>'', 
            'label'=>'设备号',
            'format'=>'raw',
            'value'=>$device_no,
            'type'=>DetailView::INPUT_SWITCH,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        [
            'attribute' => 'customer_is_vip',
            'type' => DetailView::INPUT_WIDGET,
            'widgetOptions' => [
                'name'=>'customer_is_vip',
                'class'=>\kartik\widgets\Select2::className(),
                'data' => array('1'=>'会员', '0'=>'非会员'),
                'hideSearch' => true,
                'options'=>[
                    'placeholder' => '选择客户身份',
                ]
            ],
            'value'=>$model->customer_is_vip ? '会员' : '非会员',
        ],
        [
            'attribute'=>'', 
            'label'=>'接单地址',
            'format'=>'raw',
            'value'=> $addressStr,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>true,
]); 

// echo DetailView::widget([
//     'model' => $model,
//     'condensed'=>false,
//     'hover'=>true,
//     'mode'=>DetailView::MODE_VIEW,
//     'panel'=>[
//         'heading'=>'评价信息',
//         'type'=>DetailView::TYPE_INFO,
//     ],
//     'attributes' => [
//         [
//             'attribute'=>'', 
//             'label'=>'评价',
//             'format'=>'raw',
//             'value'=> '<a href="/order/index?OrderSearch[customer_id]='. $model->id .'">'. $comment_count .'</a>',
//             'type'=>DetailView::INPUT_TEXT,
//             'valueColOptions'=>['style'=>'width:90%']
//         ],
//     ],
//     'enableEditMode'=>false,
// ]); 

// echo DetailView::widget([
//     'model' => $model,
//     'condensed'=>false,
//     'hover'=>true,
//     'mode'=>Yii::$app->request->get('edit')=='t' ? DetailView::MODE_EDIT : DetailView::MODE_VIEW,
//     'panel'=>[
//         'heading'=>'剩余优惠券',
//         'type'=>DetailView::TYPE_INFO,
//     ],
//     'attributes' => [
//         [
//             'attribute'=>'', 
//             'label'=>'',
//             'format'=>'raw',
//             'value'=> '',
//             'type'=>DetailView::INPUT_TEXT,
//             'valueColOptions'=>['style'=>'width:90%']
//         ],
//     ],
//     'enableEditMode'=>true,
// ]); 


// $customerBlockLog = \common\models\CustomerBlockLog::findAll('customer_id'=>$model->id);
echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'其他信息',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        [
            'attribute'=>'', 
            'label'=>'账户状态',
            'format'=>'raw',
            'value'=>$currentBlockStatus['block_status_name'],
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        [
            'attribute'=>'', 
            'label'=>'订单总数',
            'format'=>'raw',
            'value'=>'<a href="/order/index?OrderSearch[customer_id]='. $model->id .'">'. $order_count .'</a>',
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        [
            'attribute'=>'', 
            'label'=>'账户余额',
            'format'=>'raw',
            'value'=>$balance,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
        [
            'attribute'=>'', 
            'label'=>'总积分数',
            'format'=>'raw',
            'value'=>$score,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>false,
]); 

$customerBlockLogProvider = new ActiveDataProvider(['query' => \core\models\customer\CustomerBlockLog::find(),]);
echo GridView::widget([
    'dataProvider' => $customerBlockLogProvider,
    // 'responsive' => false,
    // 'hover' => false,
    // 'condensed' => false,
    // 'floatHeader' => false,
    // 'panel' => [
    //     'heading' => '<h3 class="panel-title"><i class="glyphicon glyphicon-th-list"></i>历史状态信息</h3>',
    //     'type' => 'info',
    //     'before' =>'',
    //     'after' =>'',
    //     'showFooter' => false
    // ],
    'columns'=>[
        [
            'format' => 'raw',
            'label' => '历史状态',
            'value' => function ($customerBlockLogProvider) {
                return $customerBlockLogProvider == NULL ? "未知" : $customerBlockLogProvider->customer_block_log_status ? '黑名单' : '正常';
            },
            'width' => "80px",
        ],
        [
            'format' => 'raw',
            'label' => '原因',
            'value' => function ($customerBlockLogProvider) {
                return $customerBlockLogProvider == NULL ? "未知" : $customerBlockLogProvider->customer_block_log_reason;
            },
            'width' => "80px",
        ],
        [
            'format' => 'raw',
            'label' => '时间',
            'value' => function ($customerBlockLogProvider) {
                return date('Y-m-d H:i:s', $customerBlockLogProvider->created_at);
            },
            'width' => "80px",
        ],
    ],
]);
?>
</div>


