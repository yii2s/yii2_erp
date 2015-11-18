<?php

namespace boss\models\worker;

use core\models\worker\WorkerDistrict;
use core\models\worker\WorkerVacationApplication;
use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use boss\models\worker\Worker;

/**
 * WorkerSearch represents the model behind the search form about `dbbase\models\Worker`.
 */
class WorkerSearch extends Worker
{


    public function rules()
    {
        return [
            [['id', 'shop_id', 'worker_level', 'worker_auth_status',  'worker_work_city', 'worker_work_area', 'worker_type', 'worker_identity_id', 'worker_rule_id','worker_is_block', 'worker_is_blacklist', 'worker_is_vacation','worker_is_dimission','created_ad', 'updated_ad', 'isdel'], 'integer'],
            [['worker_name', 'worker_phone', 'worker_idcard', 'worker_password', 'worker_photo', 'worker_work_street'], 'safe'],
            [['worker_work_lng', 'worker_work_lat'], 'number'],
        ];
    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function search($params)
    {
        if(isset($params['WorkerSearch']['worker_district']) && $params['WorkerSearch']['worker_district']){
            $workerIdsArr = WorkerDistrict::getDistrictWorkerIds($params['WorkerSearch']['worker_district']);
            if($workerIdsArr){
                $params['WorkerSearch']['id'] = $workerIdsArr;
            }else{
                $params['WorkerSearch']['id'] = 0;
            }
        }
        if(isset($params['WorkerSearch']['worker_auth_status']) && strpos($params['WorkerSearch']['worker_auth_status'],',')!==false){
            $params['WorkerSearch']['worker_auth_status'] = explode(',',$params['WorkerSearch']['worker_auth_status']);
        }
        if (isset($params['WorkerSearch']['worker_vacation_application_approve_status'])) {
            $query = WorkerVacationApplication::find()->joinWith('worker')->where(['worker_vacation_application_approve_status' => 0])->orderBy('id desc');
            $dataProvider = new ActiveDataProvider([
                'query' => $query,
            ]);
            return $dataProvider;
        } else {
            $query = Worker::findAllQuery([], true)->joinWith('workerStatRelation')->joinWith('workerExtRelation')->orderBy('id desc');
            $dataProvider = new ActiveDataProvider([
                'query' => $query,
            ]);
            if (!($this->load($params))) {
                return $dataProvider;
            }
            $query->andFilterWhere([
                'id' => $this->id,
                'shop_id' => $this->shop_id,
                'worker_level' => $this->worker_level,
                'worker_auth_status' => $this->worker_auth_status,
                'worker_work_city' => $this->worker_work_city,
                'worker_work_area' => $this->worker_work_area,
                'worker_work_lng' => $this->worker_work_lng,
                'worker_work_lat' => $this->worker_work_lat,
                'worker_type' => $this->worker_type,
                'worker_identity_id' => $this->worker_identity_id,
                'worker_is_block' => $this->worker_is_block,
                'worker_is_blacklist' => $this->worker_is_blacklist,
                'worker_is_vacation' => $this->worker_is_vacation,
                'worker_is_dimission' => $this->worker_is_dimission,
                'created_ad' => $this->created_ad,
                'updated_ad' => $this->updated_ad,
            ]);
            $query->andFilterWhere(['like', 'worker_name', $this->worker_name])
                ->andFilterWhere(['like', 'worker_phone', $this->worker_phone])
                ->andFilterWhere(['like', 'worker_idcard', $this->worker_idcard])
                ->andFilterWhere(['like', 'worker_password', $this->worker_password])
                ->andFilterWhere(['like', 'worker_photo', $this->worker_photo])
                ->andFilterWhere(['like', 'worker_work_street', $this->worker_work_street]);
            return $dataProvider;
        }
    }
    //设置商圈搜索框的默认值
    public function getworker_district()
    {
        $search = Yii::$app->request->get('WorkerSearch');
        return isset($search['worker_district'])?$search['worker_district']:'';
    }
}
