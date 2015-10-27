<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 */

$this->title = Yii::t('app', 'Operation Server Card Orders');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="operation-server-card-order-index">
    <div class="page-header">
            <h1><?= Html::encode($this->title) ?></h1>
    </div>

    <p>
        <?php /* echo Html::a(Yii::t('app', 'Create {modelClass}', [
    'modelClass' => 'Operation Server Card Order',
]), ['create'], ['class' => 'btn btn-success'])*/  ?>
    </p>

    <?php Pjax::begin(); echo GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'order_code',
            'usere_id',
            'order_customer_phone',
            'server_card_id',
//            'card_name', 
//            'card_type', 
//            'card_level', 
//            'par_value', 
//            'reb_value', 
//            'order_money', 
//            'order_src_id', 
//            'order_src_name', 
//            'order_channel_id', 
//            'order_channel_name', 
//            'order_lock_status', 
//            'order_status_id', 
//            'order_status_name', 
//            'created_at', 
//            'updated_at', 
//            'order_pay_type', 
//            'pay_channel_id', 
//            'pay_channel_name', 
//            'order_pay_flow_num', 
//            'order_pay_money', 
//            'paid_at', 

            [
                'class' => 'yii\grid\ActionColumn',
                'buttons' => [
                'update' => function ($url, $model) {
                                    return Html::a('<span class="glyphicon glyphicon-pencil"></span>', Yii::$app->urlManager->createUrl(['operation-server-card-order/view','id' => $model->id,'edit'=>'t']), [
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
            'before'=>Html::a('<i class="glyphicon glyphicon-plus"></i> Add', ['create'], ['class' => 'btn btn-success']),                                                                                                                                                          'after'=>Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['index'], ['class' => 'btn btn-info']),
            'showFooter'=>false
        ],
    ]); Pjax::end(); ?>

</div>