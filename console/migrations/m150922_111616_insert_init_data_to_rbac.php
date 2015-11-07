<?php

use yii\db\Schema;
use yii\db\Migration;

class m150922_111616_insert_init_data_to_rbac extends Migration
{
    public function up()
    {
        /**
         * 添加授权项
         */
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-customer',
            'type'=>2,
            'description'=>'显示左侧菜单栏-顾客管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-finance',
            'type'=>2,
            'description'=>'显示左侧菜单栏-财务管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-housekeep',
            'type'=>2,
            'description'=>'显示左侧菜单栏-小家政管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-operation',
            'type'=>2,
            'description'=>'显示左侧菜单栏-运营管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-order',
            'type'=>2,
            'description'=>'显示左侧菜单栏-订单管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-payment',
            'type'=>2,
            'description'=>'显示左侧菜单栏-支付管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-pop',
            'type'=>2,
            'description'=>'显示左侧菜单栏-POP管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-shop',
            'type'=>2,
            'description'=>'显示左侧菜单栏-门店管理模块',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-supplier',
            'type'=>2,
            'description'=>'显示左侧菜单栏-供应商管理',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'sidebar-worker',
            'type'=>2,
            'description'=>'显示左侧菜单栏-阿姨管理模块',
        ]);
        /**
         * 添加角色
         */
        $this->insert('{{%auth_item}}', [
            'name'=>'super_admin',
            'type'=>1,
            'description'=>'超级管理员',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'shop_manager_group',
            'type'=>1,
            'description'=>'小家政公司组',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'shop_group',
            'type'=>1,
            'description'=>'门店组',
        ]);
        $this->insert('{{%auth_item}}', [
            'name'=>'mini_box_group',
            'type'=>1,
            'description'=>'MiNi BOX 组',
        ]);
        
        /**
         * 给角色授权
         */
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-customer',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-finance',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-housekeep',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-operation',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-order',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-pop',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-shop',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-supplier',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-worker',
        ]);
        $this->insert('{{%auth_item_child}}', [
            'parent'=>'super_admin',
            'child'=>'sidebar-payment',
        ]);
        /**
         * 给用户分配角色
         */
        $this->insert('{{%auth_assignment}}', [
            'item_name'=>'super_admin',
            'user_id'=>1,
        ]);
        $this->insert('{{%auth_assignment}}', [
            'item_name'=>'super_admin',
            'user_id'=>2,
        ]);
        $this->insert('{{%auth_assignment}}', [
            'item_name'=>'super_admin',
            'user_id'=>3,
        ]);
        $this->insert('{{%auth_assignment}}', [
            'item_name'=>'super_admin',
            'user_id'=>4,
        ]);
        $this->insert('{{%auth_assignment}}', [
            'item_name'=>'mini_box_group',
            'user_id'=>5,
        ]);
    }

    public function down()
    {
        $this->execute('SET foreign_key_checks=0;');
        $this->truncateTable('{{%auth_assignment}}');
        $this->truncateTable('{{%auth_item_child}}');
        $this->truncateTable('{{%auth_item}}');
        $this->execute('SET foreign_key_checks=1;');
        return true;
    }
}
