<?php

namespace boss\models\Operation;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use core\models\Operation\CoreOperationCity;

/**
 * OperationCitySearch represents the model behind the search form about `common\models\OperationCity`.
 */
class OperationCitySearch extends CoreOperationCity
{
    public function rules()
    {
        return [
            [['id', 'city_is_online', 'created_at', 'updated_at'], 'integer'],
            [['city_name'], 'safe'],
        ];
    }

	/**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', '编号'),
            'operation_city_name' => Yii::t('app', '城市名称'),
            'operation_city_is_online' => Yii::t('app', '上线状态'),//（1为上线，2为下线）
            'created_at' => Yii::t('app', '创建时间'),
            'updated_at' => Yii::t('app', '编辑时间'),
        ];
    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = OperationCity::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'city_is_online' => $this->city_is_online,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'city_name', $this->city_name]);

        return $dataProvider;
    }
}
