<?php

use yii\db\Schema;
use jamband\schemadump\Migration;

class m151005_090605_create_table_operation_specifications_goods extends Migration
{
    public function Up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB COMMENT=\'规格商品表\'';
        }
        $this->createTable('{{%operation_specifications_goods}}', [
            'id' => Schema::TYPE_PK . ' AUTO_INCREMENT  COMMENT \'编号\'' ,
            'operation_goods_id' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL COMMENT \'商品编号\'',
            'operation_goods_name' => Schema::TYPE_STRING . '(60) DEFAULT NULL COMMENT \'商品名称\'',
            'operation_price_strategy_id' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL COMMENT \'商品规格编号\'',
            'operation_price_strategy_id' => Schema::TYPE_STRING . '(60) DEFAULT NULL COMMENT \'商品规格名称\'',
            'operation_price_strategy_unit' => Schema::TYPE_STRING . '(30) DEFAULT NULL COMMENT \'计量单位名称\'',
            'operation_price_strategy_lowest_consume_unit' => Schema::TYPE_STRING . '(30) DEFAULT NULL COMMENT \'最低消费计量单位\'',
            'operation_specifications_goods_lowest_consume_number' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL COMMENT \'最低消费数量\'',
            'operation_specifications_goods_price' => Schema::TYPE_MONEY . ' DEFAULT 0 COMMENT \'规格商品价格\'',
            'operation_specifications_goods_settlement_price' => Schema::TYPE_MONEY . ' DEFAULT 0 COMMENT \'规格商品结算价格\'',
            'operation_specifications_goods_commission_mode' => Schema::TYPE_INTEGER . '(1) DEFAULT 1 COMMENT \'收取佣金方式（1: 百分比 2: 金额）\'',
            'operation_specifications_goods_commission' => Schema::TYPE_MONEY . ' DEFAULT NULL COMMENT \'佣金值\'',
            
            'created_at' => Schema::TYPE_INTEGER. '(11) DEFAULT NULL COMMENT \'创建时间\'',
            'updated_at' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL COMMENT \'编辑时间\'',
        ], $tableOptions);

    }

    public function down()
    {
        $this->dropTable('{{%operation_specifications_goods}}');
    }
}