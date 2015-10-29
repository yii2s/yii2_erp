<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\widgets\Pjax;
use dbbase\models\finance\FinanceHeader;
/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var boss\models\FinanceHeaderSearch $searchModel
 */

$this->title = Yii::t('boss', '添加账单配置');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="finance-header-index hideTemp">
    <div class="panel panel-info">
    <div class="panel-heading">
        <h3 class="panel-title"><i class="glyphicon glyphicon-search"></i> 账单配置查询</h3>
    </div>
    <div class="panel-body">
        <?php  echo $this->render('_search', ['model' => $searchModel,'odrinfo'=>$payatainfo,'ordedat' => $ordedatainfo]); ?>
    </div>
    </div>
    <?php Pjax::begin(); echo GridView::widget([
        'dataProvider' => $dataProvider,
        //'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            'finance_header_key',
            'finance_header_title',
            'finance_header_name',
            [
                'format' => 'raw',
                'label' => '比对字段',
                'value' => function ($dataProvider) {
                 $platform = FinanceHeader::selectname($dataProvider->finance_header_where);
                    return $platform;
                },
                'width' => "100px",
            ],
            'finance_order_channel_name',
   //       'finance_pay_channel_id',
           'finance_pay_channel_name', 
//            'create_time:datetime', 
//            'is_del', 

            [
                'class' => 'yii\grid\ActionColumn',
                'buttons' => [
                'update' => function ($url, $model) {
                                    return Html::a('<span class="btn btn-primary">编辑</span>', Yii::$app->urlManager->createUrl(['finance/finance-header/view','id' => $model->id,'edit'=>'t']), [
                                                    'title' => Yii::t('yii', 'Edit'),
                                                  ]);},
                'view' => function ($url, $model) {
                                    return Html::a('<span class="btn btn-primary">查看</span>', Yii::$app->urlManager->createUrl(['finance/finance-header/view','id' => $model->id,'edit'=>'t']), [
                                                    'title' => Yii::t('yii', 'Edit'),
                                                  ]);},
                'delete' => function ($url, $model) {
                                    return Html::a('<span class="btn btn-primary">删除</span>', Yii::$app->urlManager->createUrl(['finance/finance-header/delete','id' => $model->id,'edit'=>'t']), [
                                                    'title' => Yii::t('yii', 'Delete'), 'class' => '', 'data-pjax'=>"0", 'data-method'=>"post", 'data-confirm'=>"您确定要删除此项吗？", 'aria-label'=>Yii::t('yii', 'Delete'),
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
            'before'=>Html::a('<i class="glyphicon glyphicon-plus"></i> 添加', ['create'], ['class' => 'btn btn-success']),                                                                                                                                                          
            'showFooter'=>false
        ],
    ]); Pjax::end(); ?>

</div>
