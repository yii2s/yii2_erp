<?php
class alipay_wap_class{

    public function get($param){
        require_once("alipay.config.php");
        //构造要请求的参数数组，无需改动
        $parameter = array(
            "service" => "alipay.wap.create.direct.pay.by.user",
            "partner" => trim($alipay_config['partner']),
            "seller_id" => trim($alipay_config['seller_id']),
            "payment_type"	=> 1,
            "notify_url"	=> $param['notify_url'],
            "return_url"	=> $param['return_url'],
            "out_trade_no"	=> $param['out_trade_no'],
            "subject"	=> $param['subject'],
            "total_fee"	=> $param['total_fee'],
            "show_url"	=> $param['show_url'],
            "body"	=> $param['body'],
            "it_b_pay"	=> 60000,
            "extern_token"	=> '',
            "_input_charset"	=> trim(strtolower($alipay_config['input_charset']))
        );

        //建立请求
        require_once("lib/alipay_submit.class.php");
        $alipaySubmit = new AlipaySubmit($alipay_config);
        $parameter['send_url'] = $alipaySubmit->buildRequestUrl($parameter,"get", "确认");
        return $parameter;
    }

    /**
     * 回调
     */
    public function callback(){
        require_once("alipay.config.php");
        require_once("lib/alipay_notify.class.php");
        $alipayNotify = new AlipayNotify($alipay_config);
        $verify_result = $alipayNotify->verifyNotify();
        if($verify_result) {//验证成功
            if($_POST['trade_status'] == 'TRADE_FINISHED' || $_POST['trade_status'] == 'TRADE_SUCCESS') {
                return true;
            }
        }
    }

    public function notify(){
        echo "success";		//请不要修改或删除
    }
}