<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/**
 * @var yii\web\View $this
 * @var boss\models\operation\OperationServiceCardWithCustomerSearch $model
 * @var yii\widgets\ActiveForm $form
 */
?>

<div class="operation-service-card-with-customer-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>
	<div class="col-md-2">
	 <?= $form->field($model, 'service_card_sell_record_id') ?>
	</div>
	<div class="col-md-2">
	 <?= $form->field($model, 'service_card_sell_record_code') ?>
	</div>
	<div class="col-md-2">
	 <?= $form->field($model, 'service_card_with_customer_code') ?>
	</div>
	<div class="col-md-2">
	 <?= $form->field($model, 'server_card_info_id') ?>
	</div>
	<div class="col-md-2">
	 <?= $form->field($model, 'customer_id') ?>
	</div>
	<div class="col-md-2">
	 <?= $form->field($model, 'customer_phone') ?>
	</div>

    <?php // echo $form->field($model, 'id') ?>

    <?php // echo $form->field($model, 'service_card_sell_record_id') ?>

    <?php // echo $form->field($model, 'service_card_sell_record_code') ?>

    <?php // echo $form->field($model, 'server_card_info_id') ?>

    <?php // echo $form->field($model, 'service_card_with_customer_code') ?>

    <?php // echo $form->field($model, 'server_card_info_name') ?>

    <?php // echo $form->field($model, 'customer_trans_record_pay_money') ?>

    <?php // echo $form->field($model, 'server_card_info_value') ?>

    <?php // echo $form->field($model, 'service_card_info_rebate_value') ?>

    <?php // echo $form->field($model, 'service_card_with_customer_balance') ?>

    <?php // echo $form->field($model, 'customer_id') ?>

    <?php // echo $form->field($model, 'customer_phone') ?>

    <?php // echo $form->field($model, 'server_card_info_scope') ?>

    <?php // echo $form->field($model, 'service_card_with_customer_buy_at') ?>

    <?php // echo $form->field($model, 'service_card_with_customer_valid_at') ?>

    <?php // echo $form->field($model, 'service_card_with_customer_activated_at') ?>

    <?php // echo $form->field($model, 'service_card_with_customer_status') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <?php // echo $form->field($model, 'is_del') ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Search'), ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton(Yii::t('app', 'Reset'), ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>