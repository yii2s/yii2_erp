<?php

use kartik\widgets\ActiveForm;
use kartik\builder\Form;
use kartik\datecontrol\DateControl;
use core\models\worker\WorkerTask;
use kartik\helpers\Html;

/**
 * @var yii\web\View $this
 * @var core\models\worker\WorkerTask $model
 * @var yii\widgets\ActiveForm $form
 */
 
$conditions = $model->getFullConditions();
var_dump($model->getErrors());
?>

<div class="worker-task-form">

    <?php $form = ActiveForm::begin(['type'=>ActiveForm::TYPE_HORIZONTAL]); ?>
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">基础信息</h3>
        </div>
        <div class="panel-body">
    <?php echo Form::widget([
    'model' => $model,
    'form' => $form,
    'columns' => 1,
    'attributes' => [
        
        'worker_task_name'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'Enter 任务名称...', 'maxlength'=>255]],
    ]
    ]);?>
    <div class="form-group">
        <label class="control-label col-md-2">任务条件</label>
        <?php foreach ($conditions as $con){?>
        <div class="row col-md-10" style="padding-left:50px">
            <span class="col-md-1">
                <?php echo Html::dropDownList("WorkerTask[conditions][{$con['id']}][id]", $conditions[$con['id']]['id'], WorkerTask::CONDITION_NAME);?>
            </span>
            <?php echo Html::dropDownList("WorkerTask[conditions][{$con['id']}][judge]", $conditions[$con['id']]['judge'], WorkerTask::CONDITION_JUDGE);?>
            <?php echo Html::textInput("WorkerTask[conditions][{$con['id']}][value]", $conditions[$con['id']]['value']);?>
            <button class="btn" type="button">删除</button>
        </div>
        <?php }?>
    </div>
    <?php echo Form::widget([
    'model' => $model,
    'form' => $form,
    'columns' => 1,
    'attributes' => [
        'worker_task_cycle'=>[
            'type'=> Form::INPUT_DROPDOWN_LIST,
            'items'=>WorkerTask::TASK_CYCLE,
            'options'=>['placeholder'=>'Enter 任务开始时间...'],
        ],
        
        'worker_task_start'=>[
            'type'=> Form::INPUT_TEXT, 
            'options'=>['placeholder'=>'Enter 任务开始时间...'],
        ], 
        
        'worker_task_end'=>[
            'type'=> Form::INPUT_TEXT, 
            'options'=>['placeholder'=>'Enter 任务结束时间...'],
        ], 
        
        'worker_type'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'Enter 阿姨角色...']], 
        
        'worker_rule_id'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'Enter 阿姨身份...']], 
        
        'worker_task_city_id'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'Enter 适用城市...']], 

        'worker_task_description_url'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'Enter 任务描述URL...', 'maxlength'=>255]],
        
        'worker_task_description'=>['type'=> Form::INPUT_TEXT, 'options'=>['placeholder'=>'Enter 任务描述...', 'maxlength'=>255]], 
        
    ]
    ]);?>
    </div>
        <div class="panel-footer">
            <div class="form-group">
                <div class="col-sm-offset-0 col-sm-12">
                    <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success btn-lg btn-block' : 'btn btn-primary btn-lg btn-block']);?>
                </div>
            </div>
        </div>
    </div>
    <?php ActiveForm::end(); ?>

</div>
