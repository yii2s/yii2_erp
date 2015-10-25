<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model boss\models\Operation\OperationAdvertContent */

//$this->title = $model->id;
//$this->params['breadcrumbs'][] = ['label' => 'Operation Advert Contents', 'url' => ['index']];
//$this->params['breadcrumbs'][] = $this->title;
$this->title = Yii::t('app', 'Look').Yii::t('app', 'Advert Content');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Advert Content'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="operation-advert-content-view">

    <p>
        <?= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'operation_advert_position_name',
//            'operation_city_id',
//            'operation_city_name',
            'operation_advert_start_time:date',
            'operation_advert_end_time:date',
            'operation_advert_online_time:date',
            'operation_advert_offline_time:date',
            'operation_advert_picture',
            'operation_advert_url:url',
            'created_at:datetime',
            'updated_at:datetime',
        ],
    ]) ?>

</div>