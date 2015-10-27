<?php

use yii\helpers\Html;
use yii\grid\GridView;
use kartik\datecontrol\DateControl;
use yii\base\Widget;
use core\models\shop\Shop;
use boss\components\AreaCascade;
use kartik\widgets\Select2;
use yii\helpers\Url;
use yii\web\JsExpression;

/* @var $this yii\web\View */
/* @var $searchModel core\models\shop\ShopSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Shops');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="shop-index">
    

    <div class="row">
        <div class="col-md-10"><?php echo $this->render('_search', ['model' => $searchModel]); ?></div>
        <div class="col-md-2 text-right"><?= Html::a(Yii::t('app', 'Create Shop'), ['create'], ['class' => 'btn btn-success']) ?></div>
    </div>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            [
                'attribute'=>'id',
                'options'=>['width'=>10]
            ],
            [
                'attribute'=>'name',
                'format'=>'raw',
                'value'=>function ($model){
                    return Html::a($model->name,['view', 'id'=>$model->id]);
                }
            ],
            
//             'province_id',
            [
                'attribute'=>'city_id',
                'value'=>function ($model){
                    return $model->getCityName();
                },
                'filter'=>false,
            ],
            // 'county_id',
            // 'street',
            'principal',
            'tel',
            // 'other_contact',
            // 'bankcard_number',
            // 'account_person',
            // 'opening_bank',
            // 'sub_branch',
            // 'opening_address',
            [
                'attribute'=>'created_at',
                'value'=>function($model){
                        return date('Y-m-d', $model->created_at);
                },
                'filter'=>false,
            ],
            // 'updated_at',
            // 'is_blacklist',
            // 'blacklist_time:datetime',
            // 'blacklist_cause',
            [
                'attribute'=>'audit_status',
                'options'=>['width'=>100,],
                'value'=>function($model){
                    return Shop::$audit_statuses[$model->audit_status];
                },
                'filter'=>Shop::$audit_statuses,
            ],
            [
                'attribute'=>'shop_manager_id',
                'value'=>function ($model){
                    return $model->getManagerName();
                },
                'options'=>['width'=>200,],
                'filter'=>Select2::widget([
                        'initValueText' => '', // set the initial display text
                        'model'=>$searchModel,
                        'attribute'=>'shop_manager_id',
                        'options'=>[
                            
                        ],
                        'pluginOptions' => [
                            'allowClear' => true,
                            
                            'minimumInputLength' => 0,
                            'ajax' => [
                                'url' => Url::to(['shop-manager/search-by-name']),
                                'dataType' => 'json',
                                'data' => new JsExpression('function(params) { return {name:params.term}; }')
                            ],
                            //                     'escapeMarkup' => new JsExpression('function (markup) { return markup; }'),
                            'templateResult' => new JsExpression('function(model) { return model.name; }'),
                            'templateSelection' => new JsExpression('function (model) { return model.name; }'),
                        ],
                    ])
            ],
            // 'worker_count',
            // 'complain_coutn',
            // 'level',

            [
                'class' => 'yii\grid\ActionColumn',
                'template'=>'{update} {delete}'
            ],
        ],
    ]); ?>

</div>