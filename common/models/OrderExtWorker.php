<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%order_ext_worker}}".
 *
 * @property string $order_id
 * @property string $worker_id
 * @property string $worker_type_id
 * @property string $order_worker_type_name
 * @property integer $order_worker_assign_type
 * @property string $shop_id
 * @property string $created_at
 * @property string $updated_at
 *
 * @property Order $order
 */
class OrderExtWorker extends \common\models\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%order_ext_worker}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['worker_id', 'worker_type_id', 'order_worker_assign_type', 'shop_id', 'created_at', 'updated_at'], 'integer'],
            [['order_worker_type_name'], 'string', 'max' => 64]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'order_id' => '订单id',
            'worker_id' => '工人id',
            'worker_type_id' => '工人职位类型ID',
            'order_worker_type_name' => '工人职位类型',
            'order_worker_assign_type' => '工人接单方式 0未接单 1工人抢单 2客服指派 3门店指派',
            'shop_id' => '工人所属门店id',
            'created_at' => '创建时间',
            'updated_at' => '修改时间',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOrder()
    {
        return $this->hasOne(Order::className(), ['id' => 'order_id']);
    }
}
