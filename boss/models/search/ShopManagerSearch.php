<?php

namespace boss\models\search;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use boss\models\ShopManager;

/**
 * ShopManagerSearch represents the model behind the search form about `boss\models\ShopManager`.
 */
class ShopManagerSearch extends ShopManager
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'province_id', 'city_id', 'county_id', 'bl_type', 'bl_create_time', 'bl_audit', 'bl_expiry_start', 'bl_expiry_end', 'create_at', 'update_at', 'is_blacklist', 'blacklist_time', 'audit_status', 'shop_count', 'worker_count', 'complain_coutn'], 'integer'],
            [['name', 'street', 'principal', 'tel', 'other_contact', 'bankcard_number', 'account_person', 'opening_bank', 'sub_branch', 'opening_address', 'bl_name', 'bl_number', 'bl_person', 'bl_address', 'bl_photo_url', 'bl_business', 'blacklist_cause', 'level'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = ShopManager::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'province_id' => $this->province_id,
            'city_id' => $this->city_id,
            'county_id' => $this->county_id,
            'bl_type' => $this->bl_type,
            'bl_create_time' => $this->bl_create_time,
            'bl_audit' => $this->bl_audit,
            'bl_expiry_start' => $this->bl_expiry_start,
            'bl_expiry_end' => $this->bl_expiry_end,
            'create_at' => $this->create_at,
            'update_at' => $this->update_at,
            'is_blacklist' => $this->is_blacklist,
            'blacklist_time' => $this->blacklist_time,
            'audit_status' => $this->audit_status,
            'shop_count' => $this->shop_count,
            'worker_count' => $this->worker_count,
            'complain_coutn' => $this->complain_coutn,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'street', $this->street])
            ->andFilterWhere(['like', 'principal', $this->principal])
            ->andFilterWhere(['like', 'tel', $this->tel])
            ->andFilterWhere(['like', 'other_contact', $this->other_contact])
            ->andFilterWhere(['like', 'bankcard_number', $this->bankcard_number])
            ->andFilterWhere(['like', 'account_person', $this->account_person])
            ->andFilterWhere(['like', 'opening_bank', $this->opening_bank])
            ->andFilterWhere(['like', 'sub_branch', $this->sub_branch])
            ->andFilterWhere(['like', 'opening_address', $this->opening_address])
            ->andFilterWhere(['like', 'bl_name', $this->bl_name])
            ->andFilterWhere(['like', 'bl_number', $this->bl_number])
            ->andFilterWhere(['like', 'bl_person', $this->bl_person])
            ->andFilterWhere(['like', 'bl_address', $this->bl_address])
            ->andFilterWhere(['like', 'bl_photo_url', $this->bl_photo_url])
            ->andFilterWhere(['like', 'bl_business', $this->bl_business])
            ->andFilterWhere(['like', 'blacklist_cause', $this->blacklist_cause])
            ->andFilterWhere(['like', 'level', $this->level]);

        return $dataProvider;
    }
}