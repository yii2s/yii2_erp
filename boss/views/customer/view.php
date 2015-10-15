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

//来源
$customerExtSrc = CustomerExtSrc::getFirstSrc($model->id);
// var_dump($customerExtSrc);
// echo "4";
// exit();
$platform_name = $customerExtSrc == false ? '-' : $customerExtSrc->platform_name; 
$channal_name = $customerExtSrc == false ? '-' : $customerExtSrc->channal_name; 
$device_name = $customerExtSrc == false ? '-' : $customerExtSrc->device_name;
$device_no = $customerExtSrc == false ? '-' : $customerExtSrc->device_no;



//全部服务地址
// $customerAddressArr = CustomerAddress::listAddressArr($model->id);
// var_dump($customerAddressArr);
// $customerAddressStr = '';
// if (!empty($customerAddressArr)) {
//     foreach ($customerAddressArr as $value) {
//         $customerAddressStr .= $value['province-city-area-detail']
//         .' '.$value['customer_address_nickname']
//         .' '.$value['customer_address_phone'].'<br/>';
//     }
// }


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
        // [
        //     'attribute'=>'customer_live_address_detail', 
        //     'label'=>'接单地址',
        //     'format'=>'raw',
        //     'value'=> $customerAddressStr,
        //     'type'=>DetailView::INPUT_TEXT,
        //     'valueColOptions'=>['style'=>'width:90%']
        // ],
    ],
    'enableEditMode'=>false,
]); 

echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'订单信息',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        [
            'attribute'=>'', 
            'label'=>'订单',
            'format'=>'raw',
            'value'=> '<a href="/order/index?OrderSearch[customer_id]='. $model->id .'">'. $order_count .'</a>',
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>false,
]); 

echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'评价信息',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        [
            'attribute'=>'', 
            'label'=>'评价',
            'format'=>'raw',
            'value'=> '<a href="/order/index?OrderSearch[customer_id]='. $model->id .'">'. $comment_count .'</a>',
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>false,
]); 


echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'积分信息',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        [
            'attribute'=>'customer_score', 
            'label'=>'积分',
            'format'=>'raw',
            'value'=> $score,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>false,
]);

echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'账户余额',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        [
            'attribute'=>'customer_balance', 
            'label'=>'余额',
            'format'=>'raw',
            'value'=> $balance,
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>false,
]); 

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

echo DetailView::widget([
    'model' => $model,
    'condensed'=>false,
    'hover'=>true,
    'mode'=>DetailView::MODE_VIEW,
    'panel'=>[
        'heading'=>'当前状态信息',
        'type'=>DetailView::TYPE_INFO,
    ],
    'attributes' => [
        [
            'attribute'=>'is_del', 
            'label'=>'当前状态',
            'format'=>'raw',
            'value'=>$currentBlockStatus['block_status_name'],
            'type'=>DetailView::INPUT_TEXT,
            'valueColOptions'=>['style'=>'width:90%']
        ],
    ],
    'enableEditMode'=>false,
]); 
?>
</div>


