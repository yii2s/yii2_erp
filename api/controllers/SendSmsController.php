<?php
namespace api\controllers;
use Yii;
use \core\models\customer\CustomerCode;

class SendSmsController extends \api\components\Controller
{
    /**
     *
     * @api {GET} /sms/send 发短消息
     * @apiName SendSMS
     * @apiGroup SMS
     *
     * @apiParam {String} platform_version 平台版本
     * @apiParam {Number} telephone 电话
     * @apiParam {Mixed} message 发送消息
     *
     * @apiSuccess {String} code 返回码 ok.
     * @apiSuccess {Array} msg 返回消息.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "result": "1",
     *       "msg": "ok",
     *       "tel": "15011152243",
     *       "smsTxt": "您已成功预约e家洁服务，下载应用（http://t.cn/8schPc6）可随时跟踪订单状态、查看服务人员详情，如有问题可致电唯一客服热线4006767636，祝您生活愉快！"
     *     }
     *
     * @apiSampleRequest http://test.web.1jiajie.com/mobileapinew8/packageSmsSendSms?platform_version=apitest&tel=15011152243&msg%5BtempId%5D=1
     */
    public function actionSendV()
    {
        $content=true;
        if ($content) {
            $id = $content['id'];
            $token = Yii::$app->cache->get($id);
            if ($token == false) {
                $token = base64_encode($id . time());
                Yii::$app->cache->set($id, $token, Yii::$app->params['cacheExpiration']);
                Yii::$app->cache->set($token, $id, Yii::$app->params['cacheExpiration']);
            }
            $ret = [
                "user" => $content,
                "access_token" => $token
            ];

            return $this->send($ret, "登陆成功");
        } else {
            return $this->send(null, "用户名或验证码错误", "error");
        }
    }

    /**
     *
     * @api {GET} /auth/sendmessagecode 短信验证码
     * @apiName SendMessageCode
     * @apiGroup SMS
     * @apiDescription 请求向用户手机发送验证码用于登录
     * @apiParam {String} phone 用户手机号
     * @apiParam {String} app_version 访问源(android_4.2.2)
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code":"ok"
     *     }
     *
     * @apiError PhoneNotFound The id of the User was not found.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "code":"error",
     *       "msg": "电话号码不符合规则"
     *     }
     */
    public function actionSendMessageCode()
    {
        $phone = Yii::$app->request->get('phone');
        $app_version = Yii::$app->request->get('app_version');
        if (preg_match("/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/", $phone)) {
            //验证通过
            if (!CustomerCode::generateAndSend($phone)) {
                return $this->send(null, "短信发送失败", "error",403);

            }
        } else {
            return $this->send(null, "电话号码不符合规则", "error",403);

        }
        return $this->send(null, "短信发送成功", "ok");
    }

}

?>