<?php

namespace dbbase\models\worker;

use Yii;

/**
 * This is the model class for table "{{%worker_vacation}}".
 *
 * @property integer $id
 * @property integer $worker_id
 * @property integer $worker_vacation_start_time
 * @property integer $worker_vacation_finish_time
 * @property integer $worker_vacation_type
 * @property string $worker_vacation_extend
 * @property string $worker_vacation_status
 * @property integer $created_ad
 * @property integer $updated_ad
 * @property integer $admin_id
 */
class WorkerVacation extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%worker_vacation}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['worker_id','worker_vacation_type','admin_id'], 'integer'],
            [['daterange','worker_vacation_type','worker_vacation_status'],'required'],
            [['worker_vacation_extend'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'Id'),
            'worker_id' => Yii::t('app', '主表阿姨id'),
            'daterange' => Yii::t('app', '阿姨请假时间'),
            'worker_vacation_start_time' => Yii::t('app', '请假开始时间'),
            'worker_vacation_finish_time' => Yii::t('app', '请假结束时间'),
            'worker_vacation_type' => Yii::t('app', '阿姨请假类型'),
            'worker_vacation_extend' => Yii::t('app', '阿姨请假备注'),
            'worker_vacation_status' => Yii::t('app', '阿姨请假状态'),
            'created_ad' => Yii::t('app', '创建时间'),
            'updated_ad' => Yii::t('app', '最后更新时间'),
            'admin_id' => Yii::t('app', '操作管理员id'),
        ];
    }
}
