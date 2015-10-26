<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var common\models\ServerCard $model
 */

$this->title = Yii::t('app', 'Update {modelClass}: ', [
    'modelClass' => '修改服务卡信息',
]) . ' ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', '修改服务卡信息'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<style>
	.btn-success,
	.btn.btn-primary,
	.btn.btn-default{
		background-color: #f6a202 !important;
		color: #fff !important;
		border: none !important;
	}
</style>
<div class="server-card-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>
	
</div>

