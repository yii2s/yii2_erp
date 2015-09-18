<?php

use yii\db\Schema;
use yii\db\Migration;

class m150918_132713_ejj_coupon_log extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB COMMENT=\'优惠券日志表\'';
        }
        $this->createTable('{{%ejj_coupo_log}}', [
            'id'=>  Schema::TYPE_PK.'(8) NOT NULL AUTO_INCREMENT COMMENT \'主键\'' ,
            'user_id'=>  Schema::TYPE_INTEGER.'(8) NOT NULL COMMENT \'关联用户\'' ,
            'coupon_id'=>  Schema::TYPE_INTEGER.'(8) NOT NULL' ,
            'order_id'=>  Schema::TYPE_INTEGER.'(8) NOT NULL' ,
            'coupon_log_type'=>  Schema::TYPE_SMALLINT.'(4) NOT NULL COMMENT \'1为获取优惠码，2为兑换，3为使用，4为退还\'' ,
            'coupon_log_price'=>  Schema::TYPE_MONEY. 'NOT NULL COMMENT \'实际优惠或者退还金额\'' ,
            'created_at'=> Schema::TYPE_INTEGER.'(11) NOT NULL' ,
            ]);
    }

    public function down()
    {
        $this->dropTable('{{%ejj_coupon_log}}');
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
