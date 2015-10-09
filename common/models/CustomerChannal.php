<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%customer_channal}}".
 *
 * @property integer $id
 * @property string $channal_name
 * @property integer $pid
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $is_del
 */
class CustomerChannal extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%customer_channal}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['channal_name', 'created_at', 'updated_at'], 'required'],
            [['pid', 'created_at', 'updated_at', 'is_del'], 'integer'],
            [['channal_name'], 'string', 'max' => 16]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('boss', '主键'),
            'channal_name' => Yii::t('boss', '聚道名称'),
            'pid' => Yii::t('boss', '父级id'),
            'created_at' => Yii::t('boss', '创建时间'),
            'updated_at' => Yii::t('boss', '更新时间'),
            'is_del' => Yii::t('boss', '是否逻辑删除'),
        ];
    }
}
