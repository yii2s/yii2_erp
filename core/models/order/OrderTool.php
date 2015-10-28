<?php
/**
 * Created by PhpStorm.
 * User: LinHongYou
 * Date: 2015/10/27
 * Time: 19:13
 */

namespace core\models\order;


use Yii;
use yii\base\Model;

class OrderTool extends Model
{
    const ORDER_TODAY_ORDER_CODE = 'ORDER_TODAY_ORDER_CODE';
    const ORDER_BATCH_ORDER_CODE = 'ORDER_BATCH_ORDER_CODE';

    public static function createOrderCode(){
        return self::_code(self::ORDER_TODAY_ORDER_CODE);
    }

    public static function createOrderBatchCode(){
        return self::_code(self::ORDER_BATCH_ORDER_CODE);
    }

    private static function _code($redis_key){
        if(Yii::$app->redis->executeCommand('GET', [$redis_key.'_'.date('ymd',strtotime('-1 days'))])){
            Yii::$app->redis->executeCommand('DEL', [$redis_key.'_'.date('ymd',strtotime('-1 days'))]);
        }
        $code = Yii::$app->redis->executeCommand('INCR', [$redis_key.'_'.date('ymd')]);
        $code = str_pad($code,6,'0',STR_PAD_LEFT);
        $a = $code{0};
        $b = $code{1};
        $c = $code{2};
        $d = $code{3};
        $e = $code{4};
        $f = $code{5};
        $scheme = [
            1=>['a','b','c','d','e','f'],
            2=>['b','c','d','e','f','a'],
            3=>['c','d','e','f','a','b'],
            4=>['d','e','f','a','b','c'],
            5=>['e','f','a','b','c','d'],
            6=>['f','a','b','c','d','e'],
        ];
        $scheme_use = rand(1,6);
        $day = date('ymd');
        $order_code = $scheme_use;
        for($i=0;$i<6;$i++){
            $order_code.=$day{5-$i}.$$scheme[$scheme_use][$i];
        }
        return $order_code;
    }
}