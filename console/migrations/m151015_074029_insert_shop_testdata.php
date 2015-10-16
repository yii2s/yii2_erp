<?php

use yii\db\Schema;
use jamband\schemadump\Migration;

class m151015_074029_insert_shop_testdata extends Migration
{
    public function safeUp()
    {
    	$this->execute("
    		insert  into {{%shop}}(`id`,`name`,`shop_manager_id`,`province_id`,`city_id`,`county_id`,`street`,`principal`,`tel`,`other_contact`,`bankcard_number`,`account_person`,`opening_bank`,`sub_branch`,`opening_address`,`created_at`,`updated_at`,`is_blacklist`,`audit_status`,`worker_count`,`complain_coutn`,`level`,`isdel`) values (1,'北京大悦城店',1,110000,110100,110105,'青年路华纺易城10-4-101','景春琳','5725113','（57251132、58431239、57295105、56192287、57287969、56250013）','','','','','',1444894488,1444894488,0,0,0,0,NULL,NULL),(2,'北京四季青店',1,110000,110100,110105,'远大园二区一号楼1b1e','张会霞','57251128','57251128、58431238、57251125','','','','','',1444894552,1444894552,0,0,0,0,NULL,NULL),(3,'北京双井店',1,110000,110100,110105,'北京市朝阳区广渠路29号九龙花园2号楼B座0112','高远 ','13001910851','56202681 56250112 56250097 56267715 56205132','','','','','',1444894603,1444894603,0,0,0,0,NULL,NULL),(4,'北京望京店',1,110000,110100,110105,'朝阳区望京国风北京609号楼8单元103','王瑞涛 ','13522236322','','','','','','',1444894655,1444894655,0,0,0,0,NULL,NULL);
    		insert  into {{%shop_manager}}(`id`,`name`,`province_id`,`city_id`,`county_id`,`street`,`principal`,`tel`,`other_contact`,`bankcard_number`,`account_person`,`opening_bank`,`sub_branch`,`opening_address`,`bl_name`,`bl_type`,`bl_number`,`bl_person`,`bl_address`,`bl_create_time`,`bl_photo_url`,`bl_audit`,`bl_expiry_start`,`bl_expiry_end`,`bl_business`,`created_at`,`updated_at`,`is_blacklist`,`audit_status`,`shop_count`,`worker_count`,`complain_coutn`,`level`,`isdel`) values (1,'E家洁',110000,110100,110105,'光华SOHO 2单元708','云涛','12345678901','',NULL,NULL,NULL,NULL,NULL,'o2o',2,'123456789012345678','云涛','光华SOHO 2单元708',NULL,'',20000000,NULL,NULL,'',1444893935,1444893935,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'XXX家政',310000,310100,310109,'上海滩','光头强','12345678901','',NULL,NULL,NULL,NULL,NULL,'o2o',1,'123456789012345678','光头强','彌敦道',NULL,'',20000000,NULL,NULL,'',1444894248,1444894248,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
		");
    }

    public function safeDown()
    {
    	$this->truncateTable('{{%shop}}');
    	$this->truncateTable('{{%shop_manager}}');
    }
}