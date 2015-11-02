<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var boss\models\operation\OperationServiceCardSellRecordSearch $searchModel
 */

$this->title = Yii::t('app', '服务卡销售记录');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="operation-service-card-sell-record-index">
    <?php  echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?php /* echo Html::a(Yii::t('app', 'Create {modelClass}', [
    'modelClass' => 'Operation Service Card Sell Record',
]), ['create'], ['class' => 'btn btn-success'])*/  ?>
    </p>

    <?php Pjax::begin(); echo GridView::widget([
        'dataProvider' => $dataProvider,
        //'filterModel' => $searchModel,
		'toolbar' =>[
            
        ],
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            'service_card_sell_record_code',
//            'customer_id',
            'customer_phone',
//            'service_card_info_id',
//            'service_card_info_name', 
//            'service_card_sell_record_money', 
//            'service_card_sell_record_channel_id', 
//            'service_card_sell_record_channel_name', 
//            'service_card_sell_record_status', 
            'customer_trans_record_pay_mode', 
//            'pay_channel_id', 
            'customer_trans_record_pay_channel', 
//            'customer_trans_record_transaction_id', 
            'customer_trans_record_pay_money', 
//            'customer_trans_record_pay_account', 
//            'customer_trans_record_paid_at', 
			[
                'attribute'=>'customer_trans_record_paid_at',
                'value'=>function($model){
                    return date('Y-m-d', $model->customer_trans_record_paid_at);
                },
                'filter'=>false,
            ],
//            'created_at', 
//            'updated_at', 
//            'is_del', 

            [
                'class' => 'yii\grid\ActionColumn',
				'template'=>'{view}',
                'buttons' => [
					'view' => function ($url, $model) {
						return Html::a(Yii::t('yii', '查看'), ['view', 'id' => $model->id], [
							'title' => Yii::t('yii', '查看'),
							'class' => 'btn btn-success btn-sm'
						]);
					},		
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
//            'before'=>Html::a('<i class="glyphicon glyphicon-plus"></i> Add', ['create'], ['class' => 'btn btn-success']),                                                                                                                                                          'after'=>Html::a('<i class="glyphicon glyphicon-repeat"></i> Reset List', ['index'], ['class' => 'btn btn-info']),
            'showFooter'=>false
        ],
    ]); Pjax::end(); ?>

</div>
