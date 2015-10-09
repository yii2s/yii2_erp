<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var common\models\GeneralPay $model
 */

$this->title = Yii::t('app', 'Update {modelClass}: ', [
    'modelClass' => 'General Pay',
]) . ' ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'General Pays'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="general-pay-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
