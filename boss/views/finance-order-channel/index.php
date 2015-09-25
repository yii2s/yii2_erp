<?php
use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;
use kartik\tabs\TabsX;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var boss\models\FinanceOrderChannelSearch $searchModel
 */


?>
<div class="finance-order-channel-index">
    <div class="page-header">
    </div>
    <p>
     <?php 
     $this->title = Yii::t('boss', '订单渠道管理');
     $this->params['breadcrumbs'][] = $this->title;
     Pjax::begin();
    $ertyy= GridView::widget([
     		'dataProvider' => $dataProvider,
     		'filterModel' => $searchModel,
     		'columns' => [
     		['class' => 'yii\grid\SerialColumn'],
     
     		'id',
     		'finance_order_channel_name',
     		'finance_order_channel_sort',
     		'finance_order_channel_is_lock',
     		'create_time:datetime',
     		[
     		'class' => 'yii\grid\ActionColumn',
     		'buttons' => [
     		'update' => function ($url, $model) {
     	return Html::a('<span class="glyphicon glyphicon-pencil"></span>', Yii::$app->urlManager->createUrl(['finance-order-channel/view','id' => $model->id,'edit'=>'t']), [
     			'title' => Yii::t('yii', 'Edit'),
     			]);}
     
     	],
     	],
     	],
     	'responsive'=>true,
     	'hover'=>true,
     	'condensed'=>true,
     	'floatHeader'=>true,
     	'panel' => [
     	'heading'=>'<h3 class="panel-title"><i class="glyphicon glyphicon-th-list"></i> '.Html::encode($this->title).' </h3>',
     	'type'=>'info',
     	'before'=>Html::a('<i class="glyphicon glyphicon-plus"></i> 增加', ['create'], ['class' => 'btn btn-success']),                                                                                                                                                          
     	'showFooter'=>false
     	],
     	]);
$items = [
[
'label'=>'<i class="glyphicon glyphicon-list-alt"></i> 订单渠道管理',
'content'=>$ertyy,
'active'=>true,
],
[
'label'=>'<i class="glyphicon glyphicon-king"></i> 支付渠道管理',
'content'=>'',
'active'=>false,
'url' => ['finance-pay-channel/index']
]
];
    echo TabsX::widget([
    		'items'=>$items,
    		'position'=>TabsX::POS_ABOVE,
    		'bordered'=>true,
    		'encodeLabels'=>false
    		]);
    Pjax::end(); ?> 
      
      
      
    </p>


</div>
