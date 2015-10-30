<?php

namespace boss\models\worker;

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
 * @property string $worker_vacation_source
 * @property integer $created_ad
 * @property integer $updated_ad
 * @property integer $admin_id
 */
class WorkerVacation extends \core\models\worker\WorkerVacation
{
    public function getDateRange(){
        if(empty($this->worker_vacation_start_time) || empty($this->worker_vacation_start_time)){
            $dateRange = '';
        }else{
            $dateRange = date('Y-m-d',$this->worker_vacation_start_time).'至'.date('Y-m-d',$this->worker_vacation_finish_time);
        }
        return $dateRange;
    }
}
