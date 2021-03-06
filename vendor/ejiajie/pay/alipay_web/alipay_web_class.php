<?php
/* *
 * 功能：支付宝服务器异步通知页面
 * 版本：3.3
 * 日期：2012-07-23
 * 说明：
 * 以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 * 该代码仅供学习和研究支付宝接口使用，只是提供一个参考。


 *************************页面功能说明*************************
 * 创建该页面文件时，请留心该页面文件中无任何HTML代码及空格。
 * 该页面不能在本机电脑测试，请到服务器上做测试。请确保外部可以访问该页面。
 * 该页面调试工具请使用写文本函数logResult，该函数已被默认关闭，见alipay_notify_class.php中的函数verifyNotify
 * 如果没有收到该页面返回的 success 信息，支付宝会在24小时内按一定的时间策略重发通知
 */
require_once("lib/alipay_notify.class.php");
class alipay_web_class{
    public function __construct(){}

    public function get($param){
        require_once("alipay.config.php");

        //构造要请求的参数数组，无需改动
        $parameter = array(
            "service" => "create_direct_pay_by_user",
            "partner" => trim($alipay_config['partner']),
            "seller_email" => trim($alipay_config['seller_email']),
            "payment_type"	=> 1,
            "notify_url"	=> $param['notify_url'],
            "return_url"	=> $param['return_url'],
            "out_trade_no"	=> $param['out_trade_no'],
            "subject"	=> $param['subject'],
            "total_fee"	=> $param['total_fee'],
            "body"	=> $param['body'],
            "show_url"	=> $param['show_url'],
            "anti_phishing_key"	=> time(),
            "exter_invoke_ip"	=> $_SERVER['REMOTE_ADDR'],
            "_input_charset"	=> trim(strtolower($alipay_config['input_charset']))
        );

        return $parameter;

    }

    public function callback(){
        require_once("alipay.config.php");
        $alipayNotify = new AlipayNotifyWeb($alipay_config);
        $verify_result = $alipayNotify->verifyNotify();
        if($verify_result){
            if($_POST['trade_status'] == 'TRADE_FINISHED' || $_POST['trade_status'] == 'TRADE_SUCCESS'){
                return true;
            }
        }
        return false;
    }

    public function notify(){
        return "success";
    }
}