<?php
/*
    10  0 000
     A  B  C
    100000 代表数据返回正常
    A（10） 代表数据模块 User
    B（0）  保留位
    C（000）错误代码，最快捷的捕捉到错误信息&位置
*/  
    exit('100000 代表数据返回正常');
    $ErrorCode = [
        '100001'=>'数据传入，为空',
        '100002'=>'数据传入，格式有误（手机号，邮箱）',
        '100003'=>'数据传入，数据无效（Token）',
        '100004'=>'未授权，非法访问',
    ];
?>