<?php

namespace core\models;

use Yii;
/**
 * This is the model class for table "{{%worker_ext}}".
 *
 * @property integer $worker_id
 * @property integer $worker_age
 * @property integer $worker_sex
 * @property integer $worker_birth
 * @property string $worker_edu
 * @property string $worker_hometown
 * @property integer $worker_is_health
 * @property integer $worker_is_insurance
 * @property string $worker_source
 * @property string $worker_bank_name
 * @property string $worker_bank_from
 * @property string $worker_bank_card
 * @property integer $worker_live_province
 * @property integer $worker_live_city
 * @property integer $worker_live_area
 * @property string $worker_live_street
 * @property double $worker_live_lng
 * @property double $worker_live_lat
 * @property integer $created_ad
 * @property integer $updated_ad
 */
class WorkerExt extends \common\models\WorkerExt
{

    public function setProvince_id($id){
        $this->worker_live_province = $id;
    }

    public function getProvince_id(){
        return $this->worker_live_province;
    }
    public function setCity_id($id){
        $this->worker_live_city = $id;
    }

    public function getCity_id(){
        return $this->worker_live_city;
    }
    public function setcounty_id($id){
        $this->worker_live_area = $id;
    }

    public function getcounty_id(){
        return $this->worker_live_area;
    }

    public function settown_id($id){
        $this->worker_live_street = $id;
    }

    public function gettown_id(){
        return $this->worker_live_street;
    }
}
