<?php

use yii\helpers\Html;
use kartik\detail\DetailView;
use kartik\datecontrol\DateControl;
use kartik\date\DatePicker;
use common\models\Shop;
use kartik\builder\TabularForm;
use kartik\widgets\SwitchInput;
use kartik\grid\GridView;
use kartik\widgets\ActiveForm;
use kartik\widgets\Select2; // or kartik\select2\Select2
use kartik\tabs\TabsX;
use kartik\daterange\DateRangePicker;
use yii\helpers\ArrayHelper;
/**
 * @var yii\web\View $this
 * @var common\models\Worker $model
 */
$this->title = $workerModel->worker_name;
$content1 = $this->render('view_worker',['model'=>$workerModel]);
$content2 = $this->render('view_schedule',['worker_id'=>$workerModel->id,'schedule'=>$schedule]);
$content3 = $this->render('view_log',['workerBlockLogData'=>$workerBlockLogData]);
if(Yii::$app->request->get('tab')==2){
    $content1View = false;
    $content2View = true;
}else{
    $content1View = true;
    $content2View = false;
}

$items = [
    [
        'label'=>'<i class="glyphicon glyphicon-user"></i> 阿姨信息',
        'content'=>$content1,
        'active'=>$content1View
    ],
    [
        'label'=>'<i class="fa fa-fw fa-th-list"></i> 排班表',
        'content'=>$content2,
        //'linkOptions'=>['data-url'=>\yii\helpers\Url::to(['/worker/view-schedule?id='.$workerModel->id])],
        'active'=>$content2View
    ],
    [
        'label'=>'<i class="fa fa-fw fa-book"></i> 操作记录',
        'content'=>$content3,
        //'linkOptions'=>['data-url'=>\yii\helpers\Url::to(['/site/tabs-data'])],
        'active'=>false
    ],
];
echo TabsX::widget([
    'items'=>$items,
    'position'=>TabsX::POS_ABOVE,
    'encodeLabels'=>false
]);
?>