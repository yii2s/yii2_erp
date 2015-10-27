<?php

use yii\helpers\Html;
use kartik\detail\DetailView;
use kartik\datecontrol\DateControl;

/**
 * @var yii\web\View $this
 * @var boss\models\Operation\OperationGoods $model
 */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Operation Goods'), 'url' => ['operation/operation-category']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="operation-goods-view">
    <?= DetailView::widget([
            'model' => $model,
            'condensed'=>false,
            'hover'=>true,
            'mode'=>Yii::$app->request->get('edit')=='t' ? DetailView::MODE_EDIT : DetailView::MODE_VIEW,
            'panel'=>[
            'heading'=>$this->title,
            'type'=>DetailView::TYPE_INFO,
        ],
        'attributes' => [
            'id',
            'selected_service_scene',
            'selected_service_area',
            'selected_service_sub_area',
            'selected_service_standard',
            ['attribute' => 'selected_service_area_standard', 'value' => ($model->selected_service_area_standard == 1) ? '面积小于100平米' : '面积小于100平米'],
            'created_at:datetime',
            'updated_at:datetime',
        ],
        'deleteOptions'=>[
        'url'=>['delete', 'id' => $model->id],
        'data'=>[
        'confirm'=>Yii::t('app', 'Are you sure you want to delete this item?'),
        'method'=>'post',
        ],
        ],
        'enableEditMode'=>true,
    ]) ?>

</div>
