<?php
use yii\widgets\ActiveForm;
?>
<div class="row">
    <div class="col-md-5">
    <?php $form = ActiveForm::begin(); ?>
    <?php echo $html?>
    <?php ActiveForm::end(); ?>
    </div>
</div>