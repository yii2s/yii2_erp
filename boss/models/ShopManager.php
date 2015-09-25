<?php
namespace boss\models;
use yii;
use yii\behaviors\TimestampBehavior;
use boss\models\Operation\OperationArea;
class ShopManager extends \common\models\ShopManager
{
    public static $bl_types = [
        1=>'个体户',
        2=>'商户'
    ];
    
    public static $audit_statuses = [
        0=>'待审核',
        1=>'通过',
        2=>'不通过'
    ];
    /**
     * 自动处理创建时间和修改时间
     * @see \yii\base\Component::behaviors()
     */
    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'createdAtAttribute' => 'create_at',
                'updatedAtAttribute' => 'update_at',
            ],
        ];
    }
    /**
     * 验证规则
     */
    public function rules()
    {
        return array_merge(parent::rules(),[
            [['name', 'street', 'principal', 'tel'], 'required'],
            [['province_id', 'city_id', 'county_id', 'bl_type', 'bl_create_time', 'bl_audit', 'bl_expiry_start', 'bl_expiry_end', 'create_at', 'update_at', 'is_blacklist', 'blacklist_time', 'audit_status', 'shop_count', 'worker_count', 'complain_coutn'], 'integer'],
            [['bl_business'], 'string'],
            [['name', 'street', 'opening_address', 'bl_name', 'bl_address', 'bl_photo_url', 'blacklist_cause'], 'string', 'max' => 255],
            [['principal', 'tel', 'bankcard_number', 'bl_person', 'level'], 'string', 'max' => 50],
            [['other_contact', 'opening_bank', 'sub_branch', 'bl_number'], 'string', 'max' => 200],
            [['account_person'], 'string', 'max' => 100],
            ['shop_count,worker_count,complain_coutn,audit_status','default','value'=>0],
        ]);
    }
    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return array_merge(parent::attributeLabels(),[
            'province_id' => Yii::t('app', '省份'),
            'city_id' => Yii::t('app', '城市'),
            'county_id' => Yii::t('app', '区县'),
            'bl_type' => Yii::t('app', '注册类型'),
//             'bl_expiry_start' => Yii::t('app', '有效期起始时间'),
//             'bl_expiry_end' => Yii::t('app', '有效期结束时间'),
            'is_blacklist' => Yii::t('app', '是否是黑名单'),
            'audit_status' => Yii::t('app', '审核状态'),
        ]);
    }
    /**
     * 获取城市名称
     */
    public function getCityName()
    {
        $model = OperationArea::find()->where(['id'=>$this->city_id])->one();
        return $model->area_name;
    }
    /**
     * 获取审核各状态数据
     * @param int $number
     */
    public static function getAuditStatusCountByNumber($number)
    {
        return (int)self::find()->where(['audit_status'=>$number])->scalar();
    }
    /**
     * 获取黑名单数
     */
    public static function getIsBlacklistCount()
    {
        return (int)self::find()->where(['is_blacklist'=>1])->scalar();
    }
    /**
     * 获取地址全称,直辖市不需要显示省字段
     */
    public function getAllAddress()
    {
        
        $arg = [110000, 120000, 310000, 500000];
        if(in_array($this->province_id, $arg)){
            $province = '';
        }else{
            $province = OperationArea::find()->select('area_name')
            ->where(['id'=>$this->province_id])->scalar();
        }
        
        $city = OperationArea::find()->select('area_name')
        ->where(['id'=>$this->city_id])->scalar();
        $county = OperationArea::find()->select('area_name')
        ->where(['id'=>$this->county_id])->scalar();
        return $province.$city.$county.$this->street;
    }
}