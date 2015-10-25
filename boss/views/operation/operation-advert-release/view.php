<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model boss\models\Operation\OperationAdvertRelease */

$this->title = Yii::t('app', 'Look').Yii::t('app', 'Advert Release');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Advert Release'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="operation-advert-release-view">

    <p>
        <?php //= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    
<div class="panel panel-body panel-default">
    <div class="panel-body">
        <?= DetailView::widget([
            'model' => $model,
            'attributes' => [
                'id',
                'city_name',
    //            'operation_platform_name',
    //            'operation_platform_version_name',
    ////            'operation_advert_position_id',
    //            'operation_advert_position_name',
    ////            'operation_advert_content_id',
    //            'operation_advert_contents',
    //            'operation_release_contents',
                'created_at:datetime',
                'updated_at:datetime',
            ],
        ]) ?>
        <h1 class="panel-title">广告列表：<br /></h1>
        <ul class="list-group">
            <table class="table">
                <thead>
                    <tr>
                        <th>位置名称</th>
                        <th>内容名称</th>
                        <th>上线时间</th>
                        <th>下线时间</th>
                    </tr>
                </thead>
                <tbody>
                <?php foreach($adverts as $k => $v){?>
                    <tr>
                        <td><?php echo $v['position_name'];?></td>
                        <td><?php echo $v['operation_advert_content_name'];?></td>
                        <td><?php echo $v['starttime'];?></td>
                        <td><?php echo $v['endtime'];?></td>
                    </tr>
                <?php }?>
                </tbody>
            </table>
        </ul>
    </div>
</div>
    

</div>