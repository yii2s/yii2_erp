<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model boss\models\ShopManager */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Shop Managers'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="shop-manager-view">

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
    <div class="col-md-6" style="padding:0">
    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            [
                'label'=>'地址',
                'format'=>'raw',
                'value'=>$model->getAllAddress(),
            ],
            'principal',
            'tel',
            'other_contact',
//             'bankcard_number',
//             'account_person',
//             'opening_bank',
//             'sub_branch',
//             'opening_address',
            'create_at',
            'update_at',
            'is_blacklist',
            'blacklist_time:datetime',
            'blacklist_cause',
            'audit_status',
            'shop_count',
            'worker_count',
            'complain_coutn',
            'level',
        ],
    ]) ?>
    </div>
    <div class="col-md-6">
    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'bl_name',
            'bl_type',
            'bl_number',
            'bl_person',
            'bl_address',
            'bl_create_time:datetime',
            'bl_photo_url:url',
            'bl_audit',
            'bl_expiry_start',
            'bl_expiry_end',
            'bl_business:ntext',
        ],
    ]) ?>
    </div>
</div>