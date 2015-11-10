define({ "api": [
  {
    "type": "POST",
    "url": "/auth/login",
    "title": "Login [POST] /auth/login Login（100%）",
    "description": "<p>客户登录（李勇）</p> ",
    "name": "actionLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "verify_code",
            "description": "<p>短信验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"登陆成功\",\n\"ret\": {\n    \"user\": {\n        \"id\": \"ID\",\n        \"customer_name\": \"用户名\",\n        \"customer_sex\": \"性别\",\n        \"customer_birth\": \"生日\",\n        \"customer_photo\": \"头像\",\n        \"customer_phone\": \"电话\",\n        \"customer_email\": \"邮箱\",\n        \"operation_area_id\": \"商圈id\",\n        \"operation_area_name\": \"商圈\",\n        \"operation_city_id\": \"城市id\",\n        \"operation_city_name\": \"城市\",\n        \"customer_level\": \"评级\",\n        \"customer_complaint_times\": \"投诉\",\n        \"customer_platform_version\": \"操作系统版本号\",\n        \"customer_app_version\": \"app版本号\",\n        \"customer_mac\": \"mac地址\",\n        \"customer_login_ip\": \"登陆ip\",\n        \"customer_login_time\": \"登陆时间\",\n        \"customer_is_vip\": \"身份\",\n        \"created_at\": \"创建时间\",\n        \"updated_at\": \"更新时间\"\n        },\n    \"access_token\": \"token值\"\n     },\n\"alertMsg\": \"登陆成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 200 Not Found\n{\n   \"code\": 0,\n   \"msg\": \"用户名或验证码错误\",\n   \"ret\": {},\n   \"alertMsg\": \"登陆失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/login-from-pop",
    "title": "[POST] /auth/login-from-pop(100%)",
    "description": "<p>客户登录(第三方渠道)</p> ",
    "name": "actionLoginFromPop",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sign",
            "description": "<p>签名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"登录成功\"，\n  \"ret\":{\n     \"user\":{}\n     \"access_token\":\"807b62127fdc2554607a01529d9e4b7e\"\n  },\n  \"alertMsg\": \"登陆成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{ \n  \"code\":\"0\",\n  \"msg\": \"用户名,签名或渠道id错误\",\n  \"ret\": null,\n  \"alertMsg\": \"用户名,签名或渠道id错误\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/weixin-login",
    "title": "WeixinLogin（90%）",
    "name": "actionWeixinLogin",
    "group": "Auth",
    "description": "<p>微信用户登录（赵顺利 未测试）</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "verify_code",
            "description": "<p>短信验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "weixin_id",
            "description": "<p>微信id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"登陆成功\",\n\"ret\": {\n    \"user\": {\n        \"id\": \"ID\",\n        \"customer_name\": \"用户名\",\n        \"customer_sex\": \"性别\",\n        \"customer_birth\": \"生日\",\n        \"customer_photo\": \"头像\",\n        \"customer_phone\": \"电话\",\n        \"customer_email\": \"邮箱\",\n        \"operation_area_id\": \"商圈id\",\n        \"operation_area_name\": \"商圈\",\n        \"operation_city_id\": \"城市id\",\n        \"operation_city_name\": \"城市\",\n        \"customer_level\": \"评级\",\n        \"customer_complaint_times\": \"投诉\",\n        \"customer_platform_version\": \"操作系统版本号\",\n        \"customer_app_version\": \"app版本号\",\n        \"customer_mac\": \"mac地址\",\n        \"customer_login_ip\": \"登陆ip\",\n        \"customer_login_time\": \"登陆时间\",\n        \"customer_is_vip\": \"身份\",\n        \"created_at\": \"创建时间\",\n        \"updated_at\": \"更新时间\"\n        },\n    \"access_token\": \"token值\"\n     },\n\"alertMsg\": \"登陆成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 200 Not Found\n{\n   \"code\": 0,\n   \"msg\": \"用户名或验证码错误\",\n   \"ret\": {},\n   \"alertMsg\": \"登陆失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/worker-login",
    "title": "[POST] /auth/worker-login（李勇100%)",
    "description": "<p>阿姨登录（李勇）</p> ",
    "name": "actionWorkerLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>阿姨电话号码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "verify_code",
            "description": "<p>短信验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>阿姨信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>访问令牌字符串.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"code\": 1,\n      \"msg\": \"登陆成功\",\n      \"ret\": {\n          \"user\": {\n              \"id\": \"阿姨表自增id\",\n              \"shop_id\": \"门店id\",\n              \"worker_name\": \"阿姨姓名\",\n              \"worker_phone\": \"阿姨手机\",\n              \"worker_photo\": \"阿姨头像地址\",\n              \"worker_level\": \"阿姨等级\",\n              \"worker_auth_status\": \"阿姨审核状态 0新录入1已审核2已基础培训3已试工4已上岗5已晋升培训\",\n              \"worker_work_city\": \"阿姨工作城市\",\n              \"worker_work_area\": \"阿姨工作区县\",\n              \"worker_work_street\": \"阿姨常用工作地址\",\n              \"worker_work_lng\": \"阿姨常用工作经度\",\n              \"worker_work_lat\": \"阿姨常用工作纬度\",\n              \"worker_star\": \"阿姨星级\",\n              \"worker_type\": \"阿姨类型 1自有 2非自有\",\n              \"worker_rule_id\": \"阿姨角色id \",\n              \"worker_identity_id\": \"阿姨身份id \",\n              \"worker_is_block\": \"阿姨是否封号 0正常1封号\",\n              \"worker_is_vacation\": \"阿姨是否请假 0正常1请假中\",\n              \"worker_is_blacklist\": \"阿姨是否黑名单 0正常1黑名单\",\n              \"worker_blacklist_reason\": \"阿姨被加入黑名单的原因\",\n              \"worker_blacklist_time\": \"阿姨加入黑名单的原因\",\n              \"worker_is_dimission\": \"阿姨离职原因\",\n              \"worker_dimission_reason\": \"阿姨离职原因\",\n              \"worker_dimission_time\": \"阿姨离职时间\",\n              \"created_ad\": \"阿姨录入时间\",\n              \"updated_ad\": \"最后更新时间\"\n          },\n          \"access_token\": \"token值\"\n      },\n     \"alertMsg\": \"登陆成功\" \n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 Not Found\n{\n\"code\": 0,\n\"msg\": \"用户名或验证码错误\",\n\"ret\": {},\n\"alertMsg\": \"登陆失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/order/create-order",
    "title": "[POST] /order/create-order(100%)",
    "description": "<p>创建订单 (谢奕)</p> ",
    "name": "ActionCreateOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_service_item_id",
            "description": "<p>服务项目id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_src_id",
            "description": "<p>订单来源id 访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_begin_time",
            "description": "<p>服务开始时间 时间戳  如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_end_time",
            "description": "<p>服务结束时间   时间戳  如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_customer_phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_pay_type",
            "description": "<p>支付方式 1现金 2线上 3第三方 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_booked_count",
            "description": "<p>服务时长</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>订单地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel_id",
            "description": "<p>下单渠道</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "address",
            "description": "<p>订单地址</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "city",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_pop_order_code",
            "description": "<p>第三方订单号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_pop_group_buy_code",
            "description": "<p>第三方团购号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "order_pop_order_money",
            "description": "<p>第三方订单金额,预付金额</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "coupon_id",
            "description": "<p>优惠劵id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_booked_worker_id",
            "description": "<p>指定阿姨id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "order_customer_need",
            "description": "<p>客户需求</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_customer_memo",
            "description": "<p>客户备注</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "order_is_use_balance",
            "description": "<p>是否使用余额 1 使用 0 不适用 默认1</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "order",
            "description": "<p>成功订单对象.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"1\",\n \"msg\": \"创建订单成功\",\n \"ret\": {\n         \"order_service_type_id\": \"服务类型商品id\", \n         \"order_src_id\": \"2\",\n         \"order_booked_begin_time\": \"1445251619\",\n         \"order_booked_end_time\": \"1445255219\",\n         \"address_id\": \"1\",\n         \"channel_id\": \"20\",\n         \"order_ip\": \"::1\",\n         \"order_parent_id\": 0,\n         \"order_is_parent\": 0,\n         \"order_unit_money\": \"20.0000\",\n         \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n         \"order_booked_count\": 60,\n         \"order_money\": 20,\n         \"order_address\": \"地址,姓名,电话\",\n         \"order_code\": \"订单号\",\n         \"order_src_name\": \"IOS\",\n         \"order_channel_name\": \"后台下单\",\n         \"checking_id\": 0,\n         \"isdel\": 0,\n         \"created_at\": 1445320069,  订单创建时间\n         \"updated_at\": 1445320069,  订单修改时间\n         \"id\": 8\n     },\n \"alertMsg\": \"创建订单成功,请重新登录\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/order/action-append-order"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/status-orders-count",
    "title": "[GET]/order/status-orders-count(70%)",
    "description": "<p>获得各种状态的订单数量</p> ",
    "name": "StatusOrdersCount",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>订单状态</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"1\",\n     \"msg\": \"操作成功\",\n     \"alertMsg\": \"获取状态订单数量成功\"\n     \"ret\": {\n         \"1\": \"9\",\n         \"2\": \"0\",\n         \"3\": \"4\",\n         \"4\": \"0\",\n         \"5\": \"0\",\n         \"6\": \"1\",\n         \"7\": \"0\",\n         \"8\": \"0\",\n         \"9\": \"0\",\n         \"10\": \"0\",\n         \"11\": \"0\",\n         \"12\": \"0\"\n         }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-cancel-orders-history",
    "title": "[GET]/order/worker-cancel-orders-history(90%)",
    "description": "<p>查询阿姨三个月的取消历史订单（谢奕 --已经将后台接口完成,缺少周期订单）</p> ",
    "name": "WorkerCancelOrdersHistory",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页 从第一页开始</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"code\": \"1\",\n   \"msg\": \"操作成功\",\n   \"ret\": {\n   \"limit\": \"1\",\n   \"page_total\": 4,\n   \"offset\": 0,\n   \"orders\": [\n     {\n         \"id\": \"2\",\n         \"order_code\": \"339710\",\n         \"order_parent_id\": \"0\",\n         \"order_is_parent\": \"0\",\n         \"created_at\": \"1445347126\",\n         \"updated_at\": \"1445347126\",\n         \"isdel\": \"0\",\n         \"ver\": \"3\",\n         \"version\": \"3\",\n         \"order_ip\": \"58.135.77.96\",\n         \"order_service_type_id\": \"1\",\n         \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n         \"order_src_id\": \"1\",\n         \"order_src_name\": \"BOSS\",\n         \"channel_id\": \"20\",\n         \"order_channel_name\": \"后台下单\",\n         \"order_unit_money\": \"20.00\",\n         \"order_money\": \"40.00\",\n         \"order_booked_count\": \"120\",\n         \"order_booked_begin_time\": \"1446249600\",\n         \"order_booked_end_time\": \"1446256800\",\n         \"address_id\": \"397\",\n         \"district_id\": \"3\",\n         \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n         \"order_booked_worker_id\": \"0\",\n         \"checking_id\": \"0\",\n         \"order_cs_memo\": \"\",\n         \"order_id\": \"2\",\n         \"order_before_status_dict_id\": \"2\",\n         \"order_before_status_name\": \"已支付\",\n         \"order_status_dict_id\": \"3\",\n         \"order_status_name\": \"已开始智能指派\"\n     }\n   ],\n  \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "PUT",
    "url": "/order/cancel-order",
    "title": "[PUT] /order/cancel-order(100% )",
    "description": "<p>取消订单(郝建设)</p> ",
    "name": "actionCancelOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_cancel_reason",
            "description": "<p>取消原因</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_code",
            "description": "<p>订单号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"693345订单取消成功\",\n  \"alertMsg\": \"订单取消成功\"\n  \"ret\":{\n    1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "/order/create-recursive-orderes",
    "title": "[POST] /order/create-recursive-orderes（100%）",
    "name": "actionCreateRecursiveOrderes",
    "group": "Order",
    "description": "<p>创建周期订单(郝建设)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>会话id. 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>integer</p> ",
            "optional": false,
            "field": "order_service_item_id",
            "description": "<p>服务类型 商品id 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>integer</p> ",
            "optional": false,
            "field": "order_src_id",
            "description": "<p>订单来源id 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "channel_id",
            "description": "<p>下单渠道 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>客户地址id 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "order_customer_phone",
            "description": "<p>客户手机号 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_pay_type",
            "description": "<p>支付方式 1现金 2线上 3第三方 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_is_use_balance",
            "description": "<p>是否使用余额 0否 1是 必填</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_booked_count",
            "description": "<p>服务时长</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "order_booked_worker_id",
            "description": "<p>指定阿姨id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "accept_other_aunt",
            "description": "<p>0不接受 1接受</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "order_customer_need",
            "description": "<p>客户需求</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "order_customer_memo",
            "description": "<p>客户备注</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "coupon_id",
            "description": "<p>优惠券id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "order_booked_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "order_booked_time.order_booked_begin_time",
            "description": "<p>开始时间 时间戳 如：&quot;14012312312321&quot;</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "order_booked_time.order_booked_end_time",
            "description": "<p>结束时间 时间戳 如：&quot;14012312312321&quot;</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "order_booked_time.coupon_id",
            "description": "<p>优惠券</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"创建周期订单成功\", \n     \"ret\": {},\n     \"alertMsg\": \"创建周期订单成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "POST",
    "url": "/order/delete-worker-order",
    "title": "[POST]/order/delete-worker-order(100%）",
    "description": "<p>阿姨删除订单 （郝建设） [功能介绍：] 删除指定阿姨订单列表 待抢单订单列表 该功能暂时没有开发,没有得到核实！</p> ",
    "name": "actionDeleteWorkerOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id/order_code",
            "description": "<p>周期订单号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"code\": 1,\n \"msg\": \"删除成功\",\n \"ret\": {}\n \"alertMsg\": \"删除成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"认证已经过期,请重新登录，\"\n  \"ret\":{},\n  \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 delete Not Found\n{\n  \"code\": 0,\n  \"msg\": \"删除失败\",\n  \"ret\": {},\n \"alertMeg\": \"删除失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/get-customer-recursive-order",
    "title": "[GET]/order/get-customer-recursive-order(100%）",
    "description": "<p>获取周期订单 （郝建设）</p> ",
    "name": "actionGetCustomerRecursiveOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_batch_code",
            "description": "<p>周期订单号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "workerType",
            "description": "<p>江江获取周期订单传递的表示 workerType=1; 不适用改字段 workerType=0;</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK  workerType 为空\n{\n \"code\": 1,\n \"msg\": \"操作成功\",\n \"ret\": [\n {\n \"id\": \"8\",\n \"order_code\": \"订单号\",\n \"order_batch_code\": \"周期订单号\",\n \"order_parent_id\": \"0\",\n \"order_is_parent\": \"0\",\n \"sub_order\": {\n \"1\": {\n \"id\": \"9\",\n \"order_code\": \"订单号\",\n \"order_batch_code\": \"周期订单号\",\n \"order_parent_id\": \"1\",\n \"order_sys_memo\": \"\"\n },\n \"2\": {\n \"id\": \"10\",\n \"order_code\": \"订单号\",\n \"order_batch_code\": \"周期订单号\",\n \"order_cs_memo\": \"\",\n \"order_sys_memo\": \"\"\n}\n}\n}\n ],\n \"alertMsg\": \"操作成功\"\n }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK  workerType=1 有值，提供江江用\n{\n   \"code\": 1,\n   \"msg\": \"操作成功\",\n   \"ret\": {\n       \"worker_money\": \"阿姨支付现金\",\n       \"order_money\":  \"周期订单总价格\",\n       \"order_channel_name\": \"订单渠道名称\",\n       \"order_service_type_name\": \"订单服务类别\",\n       \"order_service_item_name\": \"订单服务项\",\n       \"order_cs_memo\": \"客服备注\",\n       \"order_lat\": \"纬度\",\n       \"order_lng\": \"经度\",\n       \"order_address\": \"详细地址\",\n\t     \"order_batch_code\": \"周期订单号\"\n       \"times\": [\n           {\n               \"order_booked_begin_time\": \"开始时间时间戳\",\n               \"order_booked_end_time\": \"结束时间时间戳\",\n               \"long_time\": \"时长\",\n               \"id\": \"33\",\n               \"order_code\": \"241511106213910\",\n           },\n           {\n               \"order_booked_begin_time\": \"1448334000\",\n               \"order_booked_end_time\": \"1448341200\",\n               \"long_time\": 2,\n               \"id\": \"34\",\n               \"order_code\": \"051511106213998\",\n           },\n       ]\n   },\n   \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录\"\n  \"ret\":{},\n  \"alertMsg\": \"用户认证已经过期,请重新登录\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/get-order-one",
    "title": "[GET] /order/get-order-one（100%）",
    "description": "<p>获取一个订单的对象 （郝建设）</p> ",
    "name": "actionGetOrderOne",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>订单号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n   \"ret\": {\n  \"id\": \"2\",\n   \"order_code\": \"订单号\",\n  \"order_batch_code\": \"周期订单号\",\n  \"order_parent_id\": \"0\",\n  \"order_is_parent\": 0,\n  \"created_at\": \"1446041297\",\n  \"updated_at\": \"1446041297\",\n  \"isdel\": 0,\n  \"ver\": \"1\",\n  \"version\": \"1\",\n  \"order_ip\": \"114.242.250.248\",\n   \"order_service_type_id\": 1,\n  \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n  \"order_src_id\": 1,\n  \"order_src_name\": \"BOSS\",\n  \"channel_id\": \"2\",\n  \"order_channel_name\": \"H5手机微信\",\n  \"order_unit_money\": \"20.00\",\n  \"order_money\": \"40.00\",\n  \"order_booked_count\": \"120\",\n  \"order_booked_begin_time\": \"1445581800\",\n  \"order_booked_end_time\": \"1445589000\",\n  \"city_id\": \"110100\",\n  \"district_id\": \"5\",\n    \"address_id\": \"1\",\n    \"order_address\": \",北京市,西城区,西城区西什库大街16号123,空,17091005305\",\n},\n\"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n  \"ret\":{},\n  \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/get-worker-orders",
    "title": "[GET]/order/get-worker-orders(100%)",
    "name": "actionGetWorkerOrders",
    "group": "Order",
    "description": "<p>阿姨抢单数 (郝建设)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page_size",
            "description": "<p>条数  #leveltype =2 时要传递</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>页面  #leveltype =2 时要传递</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "leveltype",
            "description": "<p>判断标示 leveltype=1 指定阿姨订单数，待抢单订单订单数;  leveltype=2 指定阿姨订单列表，待抢单订单列表,指定阿姨订单数，待抢单订单订单数</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n 指定阿姨订单数/待抢单订单订单数 leveltype=1\n{\n     \"code\": \"1\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"workerData\": \"指定阿姨订单数\",\n         \"orderData\": \"待抢单订单数\",\n         \"workerServiceCount\": \"待服务订单数\",\n         \"worker_is_block\": 0/1  阿姨是否封号 0正常1封号\n     },\n     \"alertMsg\": \"操作成功\"\n}\n\n  * 指定阿姨订单列表/待抢单订单列表 leveltype=2\n{\n\"code\": \"1\",\n\"msg\":\"操作成功\",\n\"ret\":\n    {\n  \"orderData\": [  //指定阿姨订单列表 待抢单订单列表\n\t    {\n      \"order_id\": \"订单号\",\n      \"order_code\": \"订单编号\",\n      \"batch_code\": \"周期订单号\",\n      \"booked_begin_time\": \"服务开始时间\",\n      \"booked_end_time\": \"服务结束时间\",\n      \"channel_name\": \"服务类型名称\",\n      \"booked_count\": \"时常\",\n      \"address\": \"服务地址\",\n      \"need\": \"备注说明\",\n      \"money\": \"订单价格\",\n      \"is_booker_worker\" => \"判断标示 1有时间格式 0没有时间格式\", # 11月六号 涛涛说不要这个时间标示 18:22\n      \"times\" => '2:00:00', # 11月六号 涛涛说不要这个时间标示 18:22\n                   \"order_time\":\n                [\n                   '开始时间 - 结束时间',\n                   '1447133400 - 1447151400',\n                  '1447738200 - 1447756200'\n              ]\n         },\n\t       ]\n      },\n   \"pageNum\":\"总页码数\"\n   },\n\"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "DELETE",
    "url": "/order/hiden-order",
    "title": "[DELETE]/order/hiden-order（ 100%）",
    "description": "<p>客户端删除订单，后台软删除 隐藏订单</p> ",
    "name": "actionHidenOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"订单删除成功\",\n  \"alertMsg\": \"订单取消成功\"\n   \"ret\":{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/order-status-history",
    "title": "[GET] /order/order-status-history(70%)",
    "description": "<p>查询用户某个订单状态历史状态记录(谢奕/田玉星 --缺少周期订单)</p> ",
    "name": "actionOrderStatusHistory",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>认证令牌</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orders",
            "description": "<p>订单信息.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "status_history",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"查询订单状态记录成功\"\n  \"ret\": {\n      \"orders\": {\n          \"order_booked_begin_time\": \"预约开始时间\",\n          \"order_booked_end_time\": \"预约结束时间\",\n          \"order_address\": \"服务地址\",\n          \"order_booked_worker_id\": \"服务阿姨ID\",\n          \"order_booked_worker_name\": \"服务阿姨姓名\",\n          \"order_status_customer\":\"订单当前状态\",\n          \"order_service_type_name\":\"订单服务类别\",\n          \"order_code\": \"订单号\",\n          \"order_money\": \"订单金额\",\n          \"order_channel_name\": \"下单渠道\",\n          \"order_pay_type\": \"支付方式\",\n          \"order_pay_channel_name\": \"支付渠道名称\",\n          \"order_pay_money\": \"订单支付金额\",\n          \"order_use_acc_balance\": \"使用余额\",\n          \"order_use_card_money\": \"使用服务卡金额\",\n          \"order_use_coupon_money\": \"使用优惠卷金额\",\n          \"order_use_promotion_money\": \"使用促销金额\"\n      },\n      \"status_history\": [\n          {\n              \"created_at\": \"状态更新时间\",\n              \"order_status_customer\": \"当前状态\"\n          },\n          {\n              \"created_at\": \"状态更新时间\",\n              \"order_status_customer\": \"当前状态\"\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/orders",
    "title": "[GET] /order/orders (100%)",
    "description": "<p>查询用户订单 (谢奕)</p> ",
    "name": "actionOrders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "is_asc",
            "description": "<p>排序方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间 如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间 如 *'1443695400'</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\": \"1\",\n   \"msg\": \"操作成功\",\n   \"ret\": {\n     \"limit\": \"1\",\n      \"page_total\": 4,\n      \"offset\": 0,\n      \"orders\": [\n       {\n         \"id\": \"2\",\n         \"order_code\": \"339710\",\n         \"order_parent_id\": \"0\",\n         \"order_is_parent\": \"0\",\n         \"created_at\": \"1445347126\",\n         \"updated_at\": \"1445347126\",\n         \"isdel\": \"0\",\n         \"ver\": \"3\",\n         \"version\": \"3\",\n         \"order_ip\": \"58.135.77.96\",\n         \"order_service_type_id\": \"1\",\n          \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n         \"order_src_id\": \"1\",\n         \"order_src_name\": \"BOSS\",\n         \"channel_id\": \"20\",\n         \"order_channel_name\": \"后台下单\",\n         \"order_unit_money\": \"20.00\",\n         \"order_money\": \"40.00\",\n         \"order_pay_type\": \"支付方式\",\n         \"order_booked_count\": \"120\",\n         \"order_booked_begin_time\": \"1446249600\",\n         \"order_booked_end_time\": \"1446256800\",\n         \"address_id\": \"397\",\n         \"district_id\": \"3\",\n         \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n         \"order_booked_worker_id\": \"0\",\n         \"checking_id\": \"0\",\n         \"order_cs_memo\": \"\",\n         \"order_id\": \"2\",\n         \"order_before_status_dict_id\": \"2\",\n         \"order_before_status_name\": \"已支付\",\n         \"order_status_dict_id\": \"3\",\n         \"order_status_name\": \"已开始智能指派\"\n          }\n   ]\n },\n\"alertMsg\": \"操作成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/orders-count",
    "title": "[GET] /order/orders-count(100%)",
    "name": "actionOrdersCount",
    "group": "Order",
    "description": "<p>获得用户各种状态的订单数量 （谢奕）</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间 时间戳   如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间   时间戳   如 *'1443695400'</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"1\",\n \"msg\": \"操作成功\",\n \"ret\": {\n     \"count\": \"4\"\n },\n  \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "PUT",
    "url": "/order/set-worker-order",
    "title": "[PUT]/order/set-worker-order (100%)",
    "name": "actionSetWorkerOrder",
    "group": "Order",
    "description": "<p>阿姨抢单提交 （郝建设 ）</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"阿姨抢单提交成功\",\n     \"alertMsg\": \"阿姨抢单提交成功\",\n     \"ret\":{\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-done-orders-history",
    "title": "[GET]/order/worker-done-orders-history (90%)",
    "description": "<p>查询阿姨三个月的完成历史订单 (谢奕 --已经将后台接口完成,缺少周期订单)</p> ",
    "name": "actionWorkerDoneOrdersHistory",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页 从第一页开始</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"code\": \"1\",\n     \"msg\": \"操作成功\",\n     \"ret\": {\n         \"limit\": \"1\",\n         \"page_total\": 4,\n         \"offset\": 0,\n         \"orders\": [\n         {\n             \"id\": \"2\",\n              \"order_code\": \"339710\",\n             \"order_parent_id\": \"0\",\n             \"order_is_parent\": \"0\",\n             \"created_at\": \"1445347126\",\n             \"updated_at\": \"1445347126\",\n             \"isdel\": \"0\",\n             \"ver\": \"3\",\n             \"version\": \"3\",\n             \"order_ip\": \"58.135.77.96\",\n             \"order_service_type_id\": \"1\",\n             \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n             \"order_src_id\": \"1\",\n             \"order_src_name\": \"BOSS\",\n             \"channel_id\": \"20\",\n             \"order_channel_name\": \"后台下单\",\n             \"order_unit_money\": \"20.00\",\n             \"order_money\": \"40.00\",\n             \"order_booked_count\": \"120\",\n             \"order_booked_begin_time\": \"1446249600\",\n             \"order_booked_end_time\": \"1446256800\",\n             \"address_id\": \"397\",\n             \"district_id\": \"3\",\n             \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n             \"order_booked_worker_id\": \"0\",\n             \"checking_id\": \"0\",\n             \"order_cs_memo\": \"\",\n             \"order_id\": \"2\",\n             \"order_before_status_dict_id\": \"2\",\n             \"order_before_status_name\": \"已支付\",\n             \"order_status_dict_id\": \"3\",\n             \"order_status_name\": \"已开始智能指派\"\n         }\n     ]\n    \"alertMsg\": \"操作成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-history-orders",
    "title": "[GET]/order/worker-history-orders (0%)",
    "name": "actionWorkerHistoryOrders",
    "group": "Order",
    "description": "<p>阿姨全部订单月份列表 (赵顺利)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>会话id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"year\": \"2015\",\n         \"firstYear\": \"2015\",\n         \"lastYear\": \"2015\",\n         \"info\":\n         [\n         {\n             \"month\": \"09\",\n             \"order_num\": \"8\",\n             \"work_hour\": \"23.5\"\n         }\n         ],\n         \"msgStyle\": \"\"\n     },\n     \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-orders",
    "title": "[GET] /order/worker-orders(90%)",
    "description": "<p>查询阿姨订单（谢奕 --已经将后台接口完成,缺少周期订单）</p> ",
    "name": "actionWorkerOrders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "is_asc",
            "description": "<p>排序方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间   时间戳   如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间     时间戳   如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "oc.customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "not_with_work",
            "description": "<p>0,1</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": \"1\",\n    \"msg\": \"操作成功\",\n    \"ret\": {\n    \"limit\": \"1\",\n    \"page_total\": 4,\n    \"offset\": 0,\n    \"orders\": [\n    {\n        \"id\": \"2\",\n        \"order_code\": \"339710\",\n        \"order_parent_id\": \"0\",\n        \"order_is_parent\": \"0\",\n        \"created_at\": \"1445347126\",\n        \"updated_at\": \"1445347126\",\n        \"isdel\": \"0\",\n        \"ver\": \"3\",\n        \"version\": \"3\",\n        \"order_ip\": \"58.135.77.96\",\n        \"order_service_type_id\": \"1\",\n        \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n        \"order_src_id\": \"1\",\n        \"order_src_name\": \"BOSS\",\n        \"channel_id\": \"20\",\n        \"order_channel_name\": \"后台下单\",\n        \"order_unit_money\": \"20.00\",\n        \"order_money\": \"40.00\",\n        \"order_booked_count\": \"120\",\n        \"order_booked_begin_time\": \"1446249600\",\n        \"order_booked_end_time\": \"1446256800\",\n        \"address_id\": \"397\",\n        \"district_id\": \"3\",\n        \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n        \"order_booked_worker_id\": \"0\",\n        \"checking_id\": \"0\",\n        \"order_cs_memo\": \"\",\n        \"order_id\": \"2\",\n        \"order_before_status_dict_id\": \"2\",\n        \"order_before_status_name\": \"已支付\",\n        \"order_status_dict_id\": \"3\",\n        \"order_status_name\": \"已开始智能指派\"\n    }\n     ]\n   \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-orders-count",
    "title": "[GET] /order/worker-orders-count(90%)",
    "description": "<p>查询阿姨订单订单数量 (谢奕 --已经将后台接口完成,缺少周期订单)</p> ",
    "name": "actionWorkerOrdersCount",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels",
            "description": "<p>渠道号按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态按'.'分隔</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "oc.customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间  时间戳   如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间    时间戳   如 *'1443695400'</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n},\n\"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-service-orders",
    "title": "[GET] /order/worker-service-orders(90%)",
    "description": "<p>查询待服务阿姨订单(谢奕 --已经将后台接口完成,缺少周期订单)</p> ",
    "name": "actionWorkerServiceOrders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order_status",
            "description": "<p>订单状态</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>每页包含订单数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "is_asc",
            "description": "<p>排序方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>开始时间  时间戳   如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>结束时间  时间戳   如 *'1443695400'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "oc.customer_id",
            "description": "<p>客户id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"code\": \"1\",\n  \"msg\": \"操作成功\",\n  \"ret\": {\n     \"limit\": \"1\",\n     \"page_total\": 4,\n     \"offset\": 0,\n     \"orders\": [\n     {\n         \"id\": \"2\",\n         \"order_code\": \"339710\",\n         \"order_parent_id\": \"0\",\n         \"order_is_parent\": \"0\",\n         \"created_at\": \"1445347126\",\n         \"updated_at\": \"1445347126\",\n         \"isdel\": \"0\",\n         \"ver\": \"3\",\n         \"version\": \"3\",\n         \"order_ip\": \"58.135.77.96\",\n         \"order_service_type_id\": \"1\",\n         \"order_service_type_name\": \"Apple iPhone 6s (A1700) 16G 金色 移动联通电信4G手机\",\n         \"order_src_id\": \"1\",\n         \"order_src_name\": \"BOSS\",\n         \"channel_id\": \"20\",\n         \"order_channel_name\": \"后台下单\",\n         \"order_unit_money\": \"20.00\",\n         \"order_money\": \"40.00\",\n         \"order_booked_count\": \"120\",\n         \"order_booked_begin_time\": \"1446249600\",\n         \"order_booked_end_time\": \"1446256800\",\n         \"address_id\": \"397\",\n         \"district_id\": \"3\",\n         \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908,测试昵称,18519654001\",\n         \"order_booked_worker_id\": \"0\",\n         \"checking_id\": \"0\",\n         \"order_cs_memo\": \"\",\n         \"order_id\": \"2\",\n         \"order_before_status_dict_id\": \"2\",\n         \"order_before_status_name\": \"已支付\",\n         \"order_status_dict_id\": \"3\",\n         \"order_status_name\": \"已开始智能指派\"\n       }\n      ]\n     }\n \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "GET",
    "url": "/order/worker-service-orders-count",
    "title": "[GET]/order/worker-service-orders-count (100%)",
    "description": "<p>查询阿姨待服务订单订单数量 （谢奕）</p> ",
    "name": "actionWorkerServiceOrdersCount",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登陆令牌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "orderList",
            "description": "<p>该状态订单.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"code\": \"1\",\n\"msg\": \"操作成功\",\n\"ret\": {\n}\n\"alertMsg\": \"操作成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 401,\n   \"msg\": \"用户无效,请先登录\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "v2/member_card.json",
    "title": "成为会员接口",
    "description": "<p>@apiName actionMemberCard</p> ",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "session_id",
            "description": "<p>会话id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"ok\",\n     \"msg\":\"操作成功\",\n     \"alertMsg\":\"操作成功\",\n     \"ret\":\n     {\n         \"cardList\":\n         [\n         {\n             \"cardName\": \"银　卡:\",\n             \"cardCost\": \"1000\",\n             \"moneyBack\": \"返400券\"\n         },\n         {\n             \"cardName\": \"金　卡:\",\n             \"cardCost\": \"3000\",\n             \"moneyBack\": \"返1400券\"\n         },\n         {\n             \"cardName\": \"铂金卡:\",\n             \"cardCost\": \"5000\",\n             \"moneyBack\": \"返2600券\"\n         }\n         ],\n         \"protocolUrl\": \"http://wap.1jiajie.com/serverinfo/protocol.html\",\n         \"buy_cart_way\": \"0\",\n         \"alipay_alert_msg\": \"您所购买的会员卡金额超过500元手机支付上限，需要先充值到支付宝；或者使用电脑到www.1jiajie.com进行购买\",\n         \"membersCoupon\":\n         {\n             \"title\": \"会员优惠\",\n             \"url\": \"http://wap.1jiajie.com/serverinfo/memberDiscount.html\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/PayController.php",
    "groupTitle": "Pay",
    "name": "GetV2Member_cardJson"
  },
  {
    "type": "POST",
    "url": "/pay/balance-pay",
    "title": "[POST] /pay/balance-pay  (100%)",
    "description": "<p>会员余额支付 (赵顺利)</p> ",
    "name": "actionBalancePay",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"支付成功\",\n     \"ret\":{},\n     \"alertMsg\":\"支付成功\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderIdNotFound",
            "description": "<p>未找到订单ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":0,\n    \"msg\": \"支付失败\",\n    \"ret\": {},\n    \"alertMsg\": \"支付失败\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "POST",
    "url": "/pay/online-pay",
    "title": "[POST] /pay/online-pay (100%)",
    "description": "<p>在线支付接口(赵顺利100)</p> ",
    "name": "actionOnlinePay",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment_type",
            "description": "<p>支付类型:1普通订单,2周期订单,3充值</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道ID 1=APP微信, 2=H5微信, 3=APP百度钱包, 4=APP银联, 5=APP支付宝, 6=WEB支付宝, 7=H5百度直达号, 20=后台支付（未实现）, 21=微博支付（未实现）, 23=微信native,</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单ID,根据支付类型判断发送订单号(普通订单:order.id,周期订单:order.order_batch_code,充值:待定)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "ext_params",
            "description": "<p>扩展参数,用于微信/百度直达号（即channel_id=2或7 必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.openid",
            "description": "<p>微信openid （channel_id=2 必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.return_url",
            "description": "<p>同步回调地址 （channel_id=6必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.show_url",
            "description": "<p>显示商品URL（channel_id=6必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.customer_name",
            "description": "<p>商品名称（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.customer_mobile",
            "description": "<p>用户电话（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.customer_address",
            "description": "<p>用户地址（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.order_source_url",
            "description": "<p>订单详情地址（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.page_url",
            "description": "<p>订单跳转地址（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.goods_name",
            "description": "<p>订单名称（channel_id=7必填）</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "ext_params.detail",
            "description": "<p>订单详情 （channel_id=7必填）</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     \"channel_id\":\"7\",\n     \"partner\":\"1217983401\",\n     \"access_token\":\"00ca52a593ca85ffdb5256372aa642d2\",\n     \"pay_money\":\"0.01\",\n     \"order_id\":\"0\",\n     \"ext_params\":\n     {\n         \"openid\":\"o7Kvajh91Fmh_KYzhwX0LWZtpMPM\",\n         \"goods_name\":\"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_name\":\"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_mobile\":\"18001305711\",\n         \"goods_name\":\"18001305711\",\n         \"customer_address\":\"%E5%8C%97%E4%BA%AC%E7%9C%81\",\n         \"order_source_url\":\"http://www.baidu.com\",\n         \"page_url\":\"http://www.qq.com\",\n         \"detail\":\n         [\n         {\n             \"item_id\":\"1\",\n             \"cat_id\":\"1\",\n             \"name\":\"寿司\",\n             \"desc\":\"很好吃\",\n             \"price\":\"1\"\n         },\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 1,\n     \"msg\": \"数据返回成功\",\n     \"alertMsg\": \"数据返回成功\",\n     \"ret\": {\n         \"sp_no\": 1049,\n         \"code_url\":\"weixin://wxpay/bizpayurl?pr=kK7sllh\",\n         \"order_no\": \"15102301277257\",\n         \"total_amount\": \"1\",\n         \"goods_name\": \"18001305711\",\n         \"return_url\": \"http://127.0.0.1/pay/zhidahao-h5-notify\",\n         \"page_url\": \"http://www.qq.com\",\n         \"detail\": [\n         {\n             \"item_id\": \"1\",\n             \"cat_id\": \"1\",\n             \"name\": \"寿司\",\n             \"desc\": \"很好吃\",\n             \"price\": \"1\"\n         }\n         ],\n         \"order_source_url\": \"http://www.baidu.com\",\n         \"customer_name\": \"%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81\",\n         \"customer_mobile\": \"18001305711\",\n         \"customer_address\": \"%E5%8C%97%E4%BA%AC%E7%9C%81\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderIdNotFound",
            "description": "<p>未找到订单ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\": 401,\n    \"msg\": \"支付失败\",\n    \"ret\": {},\n    \"alertMsg\": \"支付失败\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/PayController.php",
    "groupTitle": "Pay"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-message-code",
    "title": "[GET] /send-sms/send-message-code (100%)",
    "name": "actionSendMessageCode",
    "group": "SendSms",
    "description": "<p>请求向用户手机发送验证码用于登录(赵顺利)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\":\"1\"\n   \"msg\": \"短信发送成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhoneNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"电话号码不符合规则\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-v",
    "title": "[GET ] /send-sms/send-v",
    "description": "<p>发短消息</p> ",
    "name": "actionSendV",
    "group": "SendSms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>平台版本</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "telephone",
            "description": "<p>电话</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>发送消息</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 ok.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>返回消息.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"1\",\n  \"msg\": \"ok\",\n  \"tel\": \"15011152243\",\n  \"smsTxt\": \"您已成功预约e家洁服务，下载应用（http://t.cn/8schPc6）可随时跟踪订单状态、查看服务人员详情，如有问题可致电唯一客服热线4006767636，祝您生活愉快！\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://test.web.1jiajie.com/mobileapinew8/packageSmsSendSms?platform_version=apitest&tel=15011152243&msg%5BtempId%5D=1"
      }
    ],
    "version": "0.0.0",
    "filename": "../controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "GET",
    "url": "/send-sms/send-worker-message-code",
    "title": "[GET]Send-Worker-Message-Code（100%）",
    "description": "<p>请求向阿姨手机发送验证码用于登录（李勇）</p> ",
    "name": "actionSendWorkerMessageCode",
    "group": "SendSms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"短信发送成功\",\n      \"ret\": {},\n      \"alertMsg\": \"验证码已发送手机，守住验证码，打死都不能告诉别人哦！唯一客服热线4006767636\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhoneNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n {\n     \"code\": 0,\n     \"msg\": \"阿姨不存在或在黑名单或离职或删号\",\n     \"ret\": {},\n     \"alertMsg\": \"验证码已发失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/SendSmsController.php",
    "groupTitle": "SendSms"
  },
  {
    "type": "POST",
    "url": "/user/add-address",
    "title": "[POST]/user/add-address(100%)",
    "description": "<p>添加常用地址</p> ",
    "name": "actionAddAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "operation_province_name",
            "description": "<p>省 如:北京</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "operation_city_name",
            "description": "<p>市名  如:北京市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "operation_area_name",
            "description": "<p>地区名  如:朝阳区</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_address_detail",
            "description": "<p>详细地址  如:光华路SOHO2单元708</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_address_nickname",
            "description": "<p>被服务者昵称 如:小强</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_address_phone",
            "description": "<p>被服务者手机 如:138 3838 3888</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>新增地址.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"常用地址添加成功\",\n  \"alertMsg\":\"常用地址添加成功\",\n  \"ret\":{\n  \"address\":\n     {\n     \"id\": 主键,\n     \"customer_id\":\"关联客户\",\n     \"operation_province_id\": \"省id\",\n     \"operation_city_id\": \"市id\",\n     \"operation_area_id\": \"区id\",\n     \"operation_province_name\": \"省名字\",\n     \"operation_city_name\": \"市名字\",\n     \"operation_area_name\": \"区名字\",\n     \"operation_province_short_name\": \"省短名\",\n     \"operation_city_short_name\": \"市短名\",\n     \"operation_area_short_name\": \"区短名\",\n     \"customer_address_detail\": \"详细地址\",\n     \"customer_address_status\": \"客户地址类型,1为默认地址，-1为非默认地址\",\n     \"customer_address_longitude\": 经度,\n     \"customer_address_latitude\": 纬度,\n     \"customer_address_nickname\": \"用户昵称\",\n     \"customer_address_phone\": \"被服务者手机\",\n     \"created_at\": \"创建时间\",\n     \"updated_at\": \"更新时间\",\n     }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": 401,\n  \"msg\": \"常用地址添加失败\",\n  \"ret\": {},\n  \"alertMsg\":\"常用地址添加失败\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"ret\": {},\n  \"alertMsg\":\"地址信息获取失败\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-money-score-coupon",
    "title": "[GET] /user/get-money-score-coupon （100%）",
    "description": "<p>个人中心获取用户的账户余额、积分、优惠券数（李勇）</p> ",
    "name": "actionCoupons",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"获取个人中心信息成功\",\n\"ret\": \n    {\n        \"money\": \"客户余额\",\n        \"score\": \"用户积分数\",\n        \"coupon\": \"优惠券数量\"\n    },\n\"msg\": \"获取个人中心信息成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 401,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n   }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 moeny Not Found\n{\n  \"code\": 0,\n  \"msg\": \"获取用户余额系统错误\",\n  \"ret\": {},\n \"alertMeg\": \"获取用户余额系统错误\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/default-address",
    "title": "[GET] /user/default-address(100%)",
    "description": "<p>获取默认地址(赵顺利)</p> ",
    "name": "actionDefaultAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"获取默认地址成功\"\n  \"alertMsg\": \"获取默认地址成功\"\n  \"ret\":{\n  \"address\":\n    {\n     \"id\": 主键,\n     \"customer_id\":关联客户,\n     \"operation_province_id\": 省id,\n     \"operation_city_id\": 市id,\n     \"operation_area_id\": 区id,\n     \"operation_province_name\": \"省名字\",\n     \"operation_city_name\": \"市名字\",\n     \"operation_area_name\": \"区名字\",\n     \"operation_province_short_name\": \"省短名\",\n     \"operation_city_short_name\": \"市短名\",\n     \"operation_area_short_name\": \"区短名\",\n     \"customer_address_detail\": \"详细地址\",\n     \"customer_address_status\": 客户地址类型,1为默认地址，-1为非默认地址,\n     \"customer_address_longitude\": 经度,\n     \"customer_address_latitude\": 纬度,\n     \"customer_address_nickname\": \"用户昵称\",\n     \"customer_address_phone\": \"被服务者手机\",\n     \"created_at\": 创建时间,\n     \"updated_at\": 更新时间,\n     }\n   }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\nHTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"ret\": {},\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"alertMeg\": \"用户认证已经过期,请重新登录\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": 0,\n  \"msg\": \"该用户没有默认地址\",\n  \"ret\": {},\n  \"alertMsg\": \"该用户没有默认地址\",\n\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>地址信息获取失败.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/delete-address",
    "title": "[DELETE] /user/delete-address (100%)",
    "description": "<p>删除用户常用地址</p> ",
    "name": "actionDeleteAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"alertMeg\": \"地址删除成功\",\n  \"ret\": {},\n  \"msg\": \"地址删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 delete Not Found\n{\n  \"code\": 0,\n  \"msg\": \"地址删除失败\",\n  \"ret\": {},\n \"alertMeg\": \"地址删除失败\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"ret\": {},\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"alertMeg\": \"用户认证已经过期,请重新登录\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-addresses",
    "title": "[GET] /user/get-addresses (100%)",
    "description": "<p>获取常用地址列表</p> ",
    "name": "actionGetAddresses",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>用户常用地址数组.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"获取地址列表成功\"\n  \"ret\":{\n  \"addresses\": [\n    {\n     \"id\": 主键,\n     \"customer_id\":关联客户,\n     \"operation_province_id\": \"省id\",\n     \"operation_city_id\": \"市id\",\n     \"operation_area_id\": \"区id\",\n     \"operation_province_name\": \"省名字\",\n     \"operation_city_name\": \"市名字\",\n     \"operation_area_name\": \"区名字\",\n     \"operation_province_short_name\": \"省短名\",\n     \"operation_city_short_name\": \"市短名\",\n     \"operation_area_short_name\": \"区短名\",\n     \"customer_address_detail\": \"详细地址\",\n     \"customer_address_status\": 客户地址类型,1为默认地址，-1为非默认地址,\n     \"customer_address_longitude\": 经度,\n     \"customer_address_latitude\": 纬度,\n     \"customer_address_nickname\": \"用户昵称\",\n     \"customer_address_phone\": \"被服务者手机\",\n     \"created_at\": \"创建时间\",\n     \"updated_at\": \"更新时间\",\n     },\n    ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": 0,\n  \"msg\": \"地址信息获取失败\",\n  \"ret\": {},\n \"alertMeg\": \"地址信息获取失败\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"ret\": {},\n  \"alertMsg\":\"地址信息获取失败\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-comment-count",
    "title": "[GET] /user/get-comment-count （100%）",
    "description": "<p>获取用户评价数量 (郝建设)</p> ",
    "name": "actionGetCommentCount",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"code\": 1,\n   \"msg\": \"获取用户评价数量\",\n   \"ret\": {\n       \"CommentCount\": \"6\"\n   },\n   \"alertMsg\": \"获取用户评价数量\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 Not Found\n{\n   \"code\": 401,\n   \"msg\": \"用户认证已经过期,请重新登录.\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-comment-level",
    "title": "[GET] /user/get-comment-level （100%）",
    "description": "<p>获取用户评价等级(郝建设)</p> ",
    "name": "actionGetCommentLevel",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"code\": 1,\n   \"msg\": \"获取评论级别成功\",\n   \"ret\": {\n       \"comment\": [\n           {\n               \"id\": \"1\",\n               \"customer_comment_level\": \"0\",\n               \"customer_comment_level_name\": \"满意\"\n           },\n           {\n               \"id\": \"2\",\n               \"customer_comment_level\": \"1\",\n               \"customer_comment_level_name\": \"一般\"\n           },\n           {\n               \"id\": \"3\",\n               \"customer_comment_level\": \"2\",\n               \"customer_comment_level_name\": \"不满意\"\n           }\n       ]\n   },\n   \"alertMsg\": \"获取评论级别成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>获取评论级别失败</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 Not Found\n{\n   \"code\": 401,\n   \"msg\": \"用户认证已经过期,请重新登录.\",\n   \"ret\": {},\n   \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 CommentLevel Not Found\n{\n  \"code\": 0,\n  \"msg\": \"获取评论级别失败\",\n  \"ret\": {},\n  \"alertMsg\": \"获取评论级别失败\",\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-comment-level-tag",
    "title": "[GET] /user/get-comment-level-tag（100%）",
    "description": "<p>获取用户评价等级下面的标签(郝建设)</p> ",
    "name": "actionGetCommentLevelTag",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "customer_comment_level",
            "description": "<p>级别id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"获取评论标签成功\",\n  \"alertMsg\": \"获取评论标签成功\",\n  \"ret\": {\n     \"id\": \"1\",\n     \"customer_tag_name\": \"评价标签名称\",\n     \"customer_comment_level\": \"评价等级\",\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>获取评论标签失败</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录，\"\n  \"ret\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 CommentLevelTag Not Found\n{\n  \"code\": 0,\n  \"msg\": \"获取评论标签失败\",\n  \"ret\": {},\n  \"alertMsg\": \"获取评论标签失败\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-goods",
    "title": "[GET]  /user/get-goods （100%）",
    "description": "<p>获取给定经纬度范围内是否有该服务（郝建设）</p> ",
    "name": "actionGetGoods",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_service_type_id",
            "description": "<p>服务id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"有该服务\",\n  \"alertMsg\": \"有该服务\",\n  \"ret\": {\n   \"service\":\"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录，\",\n  \"ret\": {}\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-level-tag",
    "title": "[GET] /user/get-level-tag （100%）",
    "description": "<p>获取评论的level和tag(郝建设)</p> ",
    "name": "actionGetLeveltag",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"获取标签和子标签成功\",\n\"alertMsg\": \"获取标签和子标签成功\",\n\"ret\": [\n    {\n        \"id\": \"1\",\n       \"customer_comment_level\": \"0\",\n       \"customer_comment_level_name\": \"满意\",\n       \"tag\": [\n           {\n               \"id\": \"2\",\n               \"customer_tag_name\": \"满意\",\n               \"customer_comment_level\": \"0\",\n           },\n           {\n               \"id\": \"6\",\n               \"customer_tag_name\": \"满意\",\n               \"customer_comment_level\": \"0\",\n           }\n       ]\n   },\n   {\n      \"id\": \"2\",\n      \"customer_comment_level\": \"1\",\n      \"customer_comment_level_name\": \"一般\",\n      \"tag\": [\n          {\n              \"id\": \"1\",\n              \"customer_tag_name\": \"一般\",\n              \"customer_comment_level\": \"1\",\n         },\n         {\n             \"id\": \"5\",\n             \"customer_tag_name\": \"一般\",\n             \"customer_comment_level\": \"1\",\n         },\n         {\n             \"id\": \"7\",\n             \"customer_tag_name\": \"一般\",\n             \"customer_comment_level\": \"1\",\n         }\n     ]\n },\n {\n     \"id\": \"3\",\n    \"customer_comment_level\": \"2\",\n    \"customer_comment_level_name\": \"不满意\",\n    \"tag\": [\n        {\n            \"id\": \"3\",\n            \"customer_tag_name\": \"不满意\",\n            \"customer_comment_level\": \"2\",\n        },\n        {\n            \"id\": \"4\",\n            \"customer_tag_name\": \"不满意\",\n            \"customer_comment_level\": \"2\",\n        }\n    ]\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>获取评论标签失败</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录，\",\n  \"ret\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 CommentLevelTag Not Found\n{\n  \"code\": 0,\n  \"msg\": \"获取标签和子标签失败\",\n  \"ret\": {},\n  \"alertMsg\": \"获取标签和子标签失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/get-user-feedback",
    "title": "[POST] /user/get-user-feedback （100%）",
    "description": "<p>用户意见反馈 (郝建设)</p> ",
    "name": "actionGetUserFeedback",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "feedback_content",
            "description": "<p>用户提交的数据</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"code\": 1,\n    \"msg\": \"用户反馈信息提交成功\",\n    \"ret\": {},\n    \"alertMsg\": \"获取用户信息提交成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"ret\":{},\n  \"alertMsg\": \"用户反馈信息提交失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-user-info",
    "title": "[GET] /user/get-user-info （100%）",
    "description": "<p>通过token获取用户信息 (赵顺利)</p> ",
    "name": "actionGetUserInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"code\": 1,\n    \"msg\": \"获取用户信息成功\",\n    \"ret\": {\n        \"user\": {\n            \"id\": 1,\n            \"customer_name\": 用户名,\n            \"customer_sex\": 性别,\n            \"customer_birth\": 生日,\n            \"customer_photo\": 头像,\n            \"customer_phone\": \"电话\",\n            \"customer_email\": 邮箱,\n            \"operation_area_id\": 商圈,\n            \"operation_area_name\": 城市,\n            \"operation_city_id\": 住址,\n            \"operation_city_name\": 详细住址,\n            \"customer_level\": 评级,\n            \"customer_complaint_times\": 投诉,\n            \"customer_platform_version\": 操作系统版本号,\n            \"customer_app_version\": app版本号,\n            \"customer_mac\": mac地址,\n            \"customer_login_ip\": 登陆ip,\n            \"customer_login_time\": 登陆时间,\n            \"customer_is_vip\": 身份,\n            \"created_at\": 创建时间,\n            \"updated_at\": 更新时间,\n        },\n        \"access_token\": \"bdf200df7b4afe39f6fe5110b98299bd\"\n    },\n    \"alertMsg\": \"获取用户信息成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录，\",\n  \"ret\": {}\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-user-money",
    "title": "[GET] /user/get-user-money（100%）",
    "description": "<p>用户余额和消费记录 (郝建设)</p> ",
    "name": "actionGetUserMoney",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "UserMoney",
            "description": "<p>用户当前余额和消费记录对象</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\": \"1\",\n\"msg\": \"查询成功\",\n\"alertMsg\": \"查询成功\",\n\"ret\": {\n\"userBalance\": \"用户余额\",\n\"userRecord\": [\n{\n\"id\": \"1\",\n\"customer_id\": \"用户ID\",\n \"order_id\": \"订单ID\",\n\"order_channel_id\": \"订单渠道\",\n\"customer_trans_record_order_channel\": 订单渠道名称,\n\"pay_channel_id\": \"支付渠道\",\n\"customer_trans_record_pay_channel\": 支付渠道名称,\n \"customer_trans_record_mode\": \"交易方式:1消费,2=充值,3=退款,4=赔偿\",\n\"customer_trans_record_mode_name\": 交易方式名称,\n\"customer_trans_record_coupon_money\": \"优惠券金额\",\n\"customer_trans_record_cash\": \"现金支付\",\n\"customer_trans_record_pre_pay\": \"预付费金额（第三方）\",\n\"customer_trans_record_online_pay\": \"在线支付\",\n\"customer_trans_record_online_balance_pay\": \"在线余额支付\",\n\"customer_trans_record_online_service_card_on\": \"服务卡号\",\n\"customer_trans_record_online_service_card_pay\": \"服务卡支付\",\n\"customer_trans_record_online_service_card_current_balance\": \"服务卡当前余额\",\n\"customer_trans_record_online_service_card_befor_balance\": \"服务卡之前余额\",\n\"customer_trans_record_compensate_money\": \"补偿金额\",\n\"customer_trans_record_refund_money\": \"退款金额\",\n\"customer_trans_record_order_total_money\": \"订单总额\",\n\"customer_trans_record_total_money\":'交易总额',\n\"customer_trans_record_current_balance\":'当前余额',\n\"customer_trans_record_befor_balance\":'之前余额',\n\"customer_trans_record_transaction_id\":'交易流水号',\n\"customer_trans_record_remark\": '备注',\n\"customer_trans_record_verify\": '验证',\n\"created_at\":'创建时间',\n\"updated_at\":'更新时间',\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressNotFound",
            "description": "<p>获取失败</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录，\",\n  \"ret\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": 0,\n  \"msg\": \"余额获取失败\",\n  \"ret\": {},\n  \"alertMsg\": \"余额获取失败\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-user-score",
    "title": "[GET] /user/get-user-score（100%）",
    "description": "<p>获取用户当前积分，积分兑换奖品信息，怎样获取积分信息</p> ",
    "name": "actionGetUserScore",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"用户积分明细列表\",\n\"alertMsg\": \"用户积分明细列表\",\n\"ret\": {\n\"scoreCategory\": [\n     {\n      \"id\": \"1\",\n      \"customer_id\": \"客户\",\n      \"customer_score\": \"客户积分\",\n      \"created_at\": \"创建时间\",\n      \"updated_at\": \"更新时间\",\n      },\n     ]\n    }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录\",\n  \"ret\": {},\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/get-weixin-user-info",
    "title": "[GET] /user/get-weixin-user-info （90%）",
    "description": "<p>通过微信id获取用户信息 (赵顺利 未测试)</p> ",
    "name": "actionGetWeixinUserInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "weixin_id",
            "description": "<p>微信id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sign",
            "description": "<p>微信签名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"code\": 1,\n    \"msg\": \"获取用户信息成功\",\n    \"ret\": {\n        \"user\": {\n            \"id\": 1,\n            \"customer_name\": 用户名,\n            \"customer_sex\": 性别,\n            \"customer_birth\": 生日,\n            \"customer_photo\": 头像,\n            \"customer_phone\": \"电话\",\n            \"customer_email\": 邮箱,\n            \"operation_area_id\": 商圈,\n            \"operation_area_name\": 城市,\n            \"operation_city_id\": 住址,\n            \"operation_city_name\": 详细住址,\n            \"customer_level\": 评级,\n            \"customer_complaint_times\": 投诉,\n            \"customer_platform_version\": 操作系统版本号,\n            \"customer_app_version\": app版本号,\n            \"customer_mac\": mac地址,\n            \"customer_login_ip\": 登陆ip,\n            \"customer_login_time\": 登陆时间,\n            \"customer_is_vip\": 身份,\n            \"created_at\": 创建时间,\n            \"updated_at\": 更新时间,\n        },\n        \"access_token\": \"bdf403df7b4afe39f6fe5110b98299bd\"\n    },\n    \"alertMsg\": \"获取用户信息成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"微信id或签名不允许为空\",\n  \"ret\":{},\n  \"alertMsg\": \"获取用户信息失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/set-default-address",
    "title": "[PUT] /user/set-default-address(100%)",
    "description": "<p>设置默认地址 [用户每次下完单都会将该次地址设置为默认地址，下次下单优先使用默认地址]</p> ",
    "name": "actionSetDefaultAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id                         如：1</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_province_name",
            "description": "<p>省              如：北京</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_city_name",
            "description": "<p>市名                如：北京市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_area_name",
            "description": "<p>地区名（朝阳区）     如：朝阳区</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_detail",
            "description": "<p>详细地址         如：光华路SOHO 2单元 708</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_nickname",
            "description": "<p>被服务者昵称   如：小强</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_phone",
            "description": "<p>被服务者手机      如：136 3838 3888</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"设置默认地址成功\",\n  \"ret\": {},\n \"alertMeg\": \"设置默认地址成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"ret\": {},\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"alertMeg\": \"用户认证已经过期,请重新登录\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": 0,\n  \"msg\": \"设置默认地址失败\",\n  \"ret\": {},\n \"alertMeg\": \"设置默认地址失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/update-address",
    "title": "[PUT] /user/update-address(100%)",
    "description": "<p>修改常用地址</p> ",
    "name": "actionUpdateAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id                         如：1</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)       如：android_4.2.2</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_province_name",
            "description": "<p>省              如：北京</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_city_name",
            "description": "<p>市名                如：北京市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "operation_area_name",
            "description": "<p>地区名（朝阳区）     如：朝阳区</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_detail",
            "description": "<p>详细地址         如：光华路SOHO 2单元 708</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_nickname",
            "description": "<p>被服务者昵称   如：小强</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "customer_address_phone",
            "description": "<p>被服务者手机      如：136 3838 3888</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>新增地址.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"修改常用地址成功\",\n  \"ret\": {},\n  \"alertMsg\": \"修改常用地址成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证失败.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"ret\": {},\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"alertMeg\": \"用户认证已经过期,请重新登录\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 address Not Found\n{\n  \"code\": 0,\n  \"ret\": {},\n  \"alertMeg\": \"地址信息获取失败\",\n  \"msg\": \"地址信息获取失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/user-suggest",
    "title": "[POST] /user/user-suggest （100%）",
    "description": "<p>用户评价 (郝建设)</p> ",
    "name": "actionUserSuggest",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "order_id",
            "description": "<p>'订单ID'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>'阿姨id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_tel",
            "description": "<p>'阿姨电话'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "operation_shop_district_id",
            "description": "<p>'商圈id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "province_id",
            "description": "<p>'省id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>'市id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "county_id",
            "description": "<p>'区id'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_phone",
            "description": "<p>'用户电话'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_content",
            "description": "<p>'评论内容'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "customer_comment_level",
            "description": "<p>'评论等级'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_level_name",
            "description": "<p>'评价等级名称'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_tag_ids",
            "description": "<p>'评价标签'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_comment_tag_names",
            "description": "<p>'评价标签名称'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "customer_comment_anonymous",
            "description": "<p>是否匿名评价,0匿名,1非匿名'</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"1\",\n  \"msg\": \"用户评价提交成功\", \n  \"alertMsg\": \"用户评价提交成功\",\n  \"ret\": {}\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"code\": 401,\n  \"msg\": \"用户认证已经过期,请重新登录，\",\n  \"alertMsg\": \"用户认证已经过期,请重新登录，\",\n  \"ret\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/worker/check-task",
    "title": "[GET] /worker/check-task(100%)",
    "description": "<p>查看任务的详情（李勇）</p> ",
    "name": "actionCheckTask",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>任务id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": {\n          \"id\": \"编号\",\n          \"worker_id\": \"阿姨ID\",\n          \"worker_task_id\": \"任务ID\",\n          \"worker_task_cycle_number\": \"任务周期序号\",\n          \"worker_task_name\": \"任务名称\",\n          \"worker_task_log_start\": 任务本周期开始时间,\n          \"worker_task_log_end\": \"任务本周期结束时间\",\n          \"worker_task_is_done\": \"任务是否完成,0未处理，1完成，-1结束且未完成\",\n          \"worker_task_done_time\": \"任务完成时间\",\n          \"worker_task_reward_type\": \"任务奖励类型\",\n          \"worker_task_reward_value\": \"任务奖励值\",\n          \"worker_task_is_settlemented\": \"是否已结算0未结算，1已结算\",\n          \"created_at\": \"创建时间\",\n          \"updated_at\": \"更新时间\",\n          \"values\": [\n              {\n                  \"worker_tasklog_condition\": \"条件索引\",\n                  \"worker_tasklog_value\": \"条件完成值\",\n                  \"name\": \"主动接单\",\n                  \"judge\": \">=\",\n                  \"value\": \"条件值\"\n              }\n           ],\n          \"worker_task_description\": \"任务描述\",\n          \"order_list\": [\n                  {\n                      \"order_code\": \"订单号\",\n                      \"created_at\": \"创建时间\",\n                      \"order_booked_count\": \"预约服务数量（时长）\"\n                  },\n                  {\n                      \"order_code\": \"订单号\",\n                      \"created_at\": \"创建时间\",\n                      \"order_booked_count\": \"预约服务数量（时长）\"\n                  }\n           ]\n       },\n      \"alertMsg\": \"操作成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found \n  {\n     \"code\": 0,\n     \"msg\": \"查看任务失败\",\n     \"ret\": {},\n     \"alertMsg\": \"查看任务失败\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-bill-list",
    "title": "[GET]/worker/get-worker-bill-list(100%)",
    "description": "<p>获取阿姨对账单列表 （田玉星）</p> ",
    "name": "actionGetWorkerBillList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取账单列表成功\",\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"explain_url\": \"账单说明跳转URL\",\n      \"data\": [\n          {\n              \"settle_id\": \"账单唯一标识\",\n              \"settle_year\": \"账单归属年限\",\n              \"order_count\": \"账单内完成的订单总数\",\n              \"worker_income\": \"该账单阿姨的总收入\",\n              \"settle_cycle\": \"账单类型【1周期账单 2月结账单】\",\n              \"settle_cycle_des\": \"账单文字说明\",\n              \"settle_task_money\": \"任务奖励金额\",\n              \"base_salary_subsidy\": \"底薪补贴\",\n              \"money_deduction\": \"处罚金额\",\n              \"order_money_except_cash\": \"工时服务费\",\n              \"settle_status\":\"账单状态【0未结算 1已结算】\",\n              \"settle_starttime\": \"账单开始日期【如果是月结则settle_endtime无效】\",\n               \"settle_endtime\": \"账单结束日期\",\n              \"worker_is_confirmed\": \"阿姨是否确认账单【0未确认 1已确认】\"\n          }\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-center",
    "title": "[GET] /worker/get-worker-center(100%)",
    "description": "<p>个人中心首页 （田玉星）</p> ",
    "name": "actionGetWorkerCenter",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"ok\",\n \"msg\": \"阿姨信息查询成功\",\n \"alertMsg\": \"获取阿姨数据成功\",\n \"ret\": {\n     \"worker_name\": \"阿姨姓名\",\n     \"worker_phone\": \"阿姨手机号\",\n     \"worker_photo\": \"头像地址\",\n     \"worker_identity_description\": \"阿姨身份说明\",\n     \"worker_identity_id\":\"阿姨身份标识【1全职 2兼职 3高峰 4时段】\",\n     \"worker_type\": \"阿姨类型【 1自有 2非自有】\",\n     \"worker_star\": \"星级\",\n     \"personal_skill\": [\n         \"阿姨技能1\",\n         \"阿姨技能2\",\n         \"阿姨技能3\"\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"code\": \"error\",\n  \"msg\": \"用户认证已经过期,请重新登录，\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-comment",
    "title": "[GET]/worker/get-worker-comment(100%)",
    "description": "<p>获取阿姨对应的评论 （田玉星）</p> ",
    "name": "actionGetWorkerComment",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment_level",
            "description": "<p>评论类型 【1：满意 2：一般 3：差评】</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>页码数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"alertMsg\": \"获取评论成功\"，\n      \"ret\": {\n          \"per_page\": 1,\n          \"page_num\": 10,\n          \"data\": [\n              {\n                  \"comment_id\": \"评论ID\",\n                  \"comment_content\": \"评论内容\",\n                  \"comment_time\": \"评论日期\"\n              }\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-complain",
    "title": "[GET]/worker/get-worker-complain(100%)",
    "description": "<p>获取阿姨对应的投诉 （田玉星）</p> ",
    "name": "actionGetWorkerComplain",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示的数据数量</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取投诉成功\"，\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"worker_is_block\":\"阿姨账号状态【0正常 1封号】\",\n      \"data\": [\n          {\n              \"complaint_content\": \"投诉内容\",\n              \"complaint_time\": \"投诉时间\"\n          }\n      ]\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-leave-history",
    "title": "[GET]/worker/get-worker-leave-history(100%)",
    "description": "<p>查看阿姨请假历史 （田玉星）</p> ",
    "name": "actionGetWorkerLeaveHistory",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>页码数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取阿姨请假历史记录成功\",\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 1,\n      \"data\": [\n          {\n              \"leave_type\": \"请假类型【1休假 2事假】\",\n              \"leave_time\": \"请假时间\",\n              \"leave_status\": \"请假状态\"\n          }\n      ]\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-place-by-id",
    "title": "[GET]/worker/get-worker-place-by-id（100%）",
    "description": "<p>获取阿姨住址 （田玉星）</p> ",
    "name": "actionGetWorkerPlaceById",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"查询地址成功\",\n     \"alertMsg\": \"获取阿姨住址成功\",\n     \"ret\":\n     {\n         \"live_place\": \"阿姨常住地址\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-punish-list",
    "title": "[GET]/worker/get-worker-punish-list(100%)",
    "description": "<p>获取阿姨受处罚列表 （田玉星）</p> ",
    "name": "actionGetWorkerPunishList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 1,\n    \"msg\": \"操作成功\",\n    \"alertMsg\": \"获取处罚列表成功\",\n    \"ret\":{\n             \"per_page\": 1,\n             \"page_num\": 10,\n             \"data\":[\n                {\n                 \"deduction_money\": \"处罚金额\",\n                 \"deduction_des\": \"处罚描述\",\n                 \"deduction_type\": \"处罚类型\",\n                 \"deduction_time\": \"处罚时间\",\n                 \"deduction_type_des\": \"处罚类型描述\"\n               }\n             ]  \n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-service-info",
    "title": "[GET]/worker/get-worker-service-info(100%)",
    "description": "<p>获取账单阿姨服务信息 （田玉星）</p> ",
    "name": "actionGetWorkerServiceInfo",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\": \"操作成功.\",\n      \"alertMsg\": \"获取服务信息成功\",\n     \"ret\": [\n            \"worker_name\": \"阿姨姓名\",\n            \"order_count\": \"服务订单数\",\n            \"service_family_count\": \"服务家庭总数\",\n            \"worker_income\":\"阿姨收入\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-taskreward-list",
    "title": "[GET]/worker/get-worker-taskreward-list(100%)",
    "description": "<p>获取阿姨奖励列表 （田玉星）</p> ",
    "name": "actionGetWorkerTaskrewardList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取任务奖励成功\",\n  \"ret\":{\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"data\": [\n          {\n              \"task_money\": \"奖励金额\",\n              \"task_des\": \"任务说明\"\n          }\n      ]    \n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/get-worker-tasktime-list",
    "title": "[GET]/worker/get-worker-tasktime-list(100%)",
    "description": "<p>获取阿姨工时列表 （田玉星）</p> ",
    "name": "actionGetWorkerTasktimeList",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"alertMsg\": \"获取工时列表成功\",\n  \"ret\": {\n      \"per_page\": 1,\n      \"page_num\": 10,\n      \"data\": [\n          {\n              \"order_id\": \"订单ID\",\n              \"order_money\": \"订单金额\",\n              \"order_code\": \"订单号\",\n              \"service_date\": \"服务日期\",\n              \"service_time\": \"服务时间段\"\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "POST",
    "url": "/worker/handle-worker-leave",
    "title": "[POST] /worker/handle-worker-leave（100%）",
    "description": "<p>阿姨请假 （田玉星）</p> ",
    "name": "actionHandleWorkerLeave",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "leave_time",
            "description": "<p>请假时间，如果请假时间格式为:【2015-09-10】</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "leave_type",
            "description": "<p>请假类型  1.休假 2事假</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"您的请假已提交，请耐心等待审批\",\n   \"alertMsg\": \"您的请假已提交，请耐心等待审批\"，\n  \"ret\": {}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/system-news",
    "title": "[GET] /worker/system-news(0%)",
    "description": "<p>消息通知中心 （田玉星）</p> ",
    "name": "actionSystemNews",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/task-doing",
    "title": "[GET] /worker/task-doing(100%)",
    "description": "<p>获得进行中的任务列表（李勇）</p> ",
    "name": "actionTaskDoing",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": [\n         \"task_doing\":{ \n              \"id\": \"编号\",\n              \"worker_id\": \"阿姨ID\",\n              \"worker_task_id\": \"任务ID\",\n              \"worker_task_cycle_number\": \"任务周期序号\",\n              \"worker_task_name\": \"任务名称\",\n              \"worker_task_log_start\": 任务本周期开始时间,\n              \"worker_task_log_end\": \"任务本周期结束时间\",\n              \"worker_task_is_done\": \"任务是否完成,0未处理，1完成，-1结束且未完成\",\n              \"worker_task_done_time\": \"任务完成时间\",\n              \"worker_task_reward_type\": \"任务奖励类型\",\n              \"worker_task_reward_value\": \"任务奖励值\",\n              \"worker_task_is_settlemented\": \"是否已结算0未结算，1已结算\",\n              \"created_at\": \"创建时间\",\n              \"updated_at\": \"更新时间\",\n              \"worker_task_description\": \"任务描述\"\n          },\n          \"url\": \"右上角任务说明链接（后台没有返回空）\"\n      ]，\n     \"alertMsg\": \"操作成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 200 Not Found\n{\n    \"code\": 0,\n    \"msg\": \"您没有任务哦\",\n    \"ret\": {},\n    \"alertMsg\": \"您没有任务哦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/task-done",
    "title": "[GET] /worker/task-done(100%)",
    "description": "<p>获得已完成的任务列表（李勇）</p> ",
    "name": "actionTaskDone",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": [\n         \"task_done\":{ \n              \"id\": \"编号\",\n              \"worker_id\": \"阿姨ID\",\n              \"worker_task_id\": \"任务ID\",\n              \"worker_task_cycle_number\": \"任务周期序号\",\n              \"worker_task_name\": \"任务名称\",\n              \"worker_task_log_start\": 任务本周期开始时间,\n              \"worker_task_log_end\": \"任务本周期结束时间\",\n              \"worker_task_is_done\": \"任务是否完成,0未处理，1完成，-1结束且未完成\",\n              \"worker_task_done_time\": \"任务完成时间\",\n              \"worker_task_reward_type\": \"任务奖励类型\",\n              \"worker_task_reward_value\": \"任务奖励值\",\n              \"worker_task_is_settlemented\": \"是否已结算0未结算，1已结算\",\n              \"created_at\": \"创建时间\",\n              \"updated_at\": \"更新时间\",\n              \"values\": [\n                  {\n                      \"worker_tasklog_condition\": \"条件索引\",\n                      \"worker_tasklog_value\": \"条件值\"\n                  }\n              ],\n              \"worker_task_description\": \"任务描述\"\n          },\n         \"url\": \"右上角任务说明链接（后台没有返回空）\"\n      ]，\n     \"alertMsg\": \"操作成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 200 Not Found\n{\n    \"code\": 0,\n    \"msg\": \"您没有已完成任务哦\",\n    \"ret\": {},\n    \"alertMsg\": \"您没有已完成任务哦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/task-fail",
    "title": "[GET] /worker/task-fail(100%)",
    "description": "<p>获得已失败的任务列表（李勇）</p> ",
    "name": "actionTaskFail",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页显示多少条</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"操作成功\",\n      \"ret\": [\n          \"task_fail\":{ \n              \"id\": \"编号\",\n              \"worker_id\": \"阿姨ID\",\n              \"worker_task_id\": \"任务ID\",\n              \"worker_task_cycle_number\": \"任务周期序号\",\n              \"worker_task_name\": \"任务名称\",\n              \"worker_task_log_start\": 任务本周期开始时间,\n              \"worker_task_log_end\": \"任务本周期结束时间\",\n              \"worker_task_is_done\": \"任务是否完成,0未处理，1完成，-1结束且未完成\",\n              \"worker_task_done_time\": \"任务完成时间\",\n              \"worker_task_reward_type\": \"任务奖励类型\",\n              \"worker_task_reward_value\": \"任务奖励值\",\n              \"worker_task_is_settlemented\": \"是否已结算0未结算，1已结算\",\n              \"created_at\": \"创建时间\",\n              \"updated_at\": \"更新时间\",\n              \"values\": [\n                  {\n                      \"worker_tasklog_condition\": \"条件索引\",\n                      \"worker_tasklog_value\": \"条件值\"\n                  }\n              ],\n              \"worker_task_description\": \"任务描述\"\n          }\n      ]，\n     \"url\": \"右上角任务说明链接（后台没有返回空）\"\n     \"alertMsg\": \"操作成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 Not Found\n{\n   \"code\": 0,\n   \"msg\": \"您没有失败的任务哦\",\n   \"ret\": {},\n   \"alertMsg\": \"您没有失败的任务哦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "PUT",
    "url": "/worker/worker-bill-confirm",
    "title": "[PUT] /worker/worker-bill-confirm(100%)",
    "description": "<p>账单确认 （田玉星）</p> ",
    "name": "actionWorkerBillConfirm",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "settle_id",
            "description": "<p>账单唯一标识.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 1,\n   \"msg\": \"账单确定成功\",\n   \"alertMsg\": \"账单确认成功\",\n   \"ret\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"msg\": \"用户认证已经过期,请重新登录\",\n \"ret\": {},\n \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/worker-info",
    "title": "[GET] /worker/worker-info(100%)",
    "description": "<p>获取阿姨信息 (田玉星)</p> ",
    "name": "actionWorkerInfo",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户登录token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "worker_id",
            "description": "<p>阿姨id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"阿姨信息查询成功\",\n  \"alertMsg\": \"获取阿姨信息成功\",\n  \"ret\": {\n      \"worker_photo\": \"阿姨头像地址\",\n      \"worker_name\": \"阿姨姓名\",\n      \"worker_age\":\"阿姨年龄\",\n      \"worker_idcard\": \"阿姨身份证号码\",\n      \"worker_stat_order_num\": \"阿姨服务次数\",\n      \"worker_live_province\": \"110000\",\n      \"worker_district\": \"阿姨服务商圈\",\n      \"worker_comment_satisfied\": \"阿姨评价满意数\",\n      \"worker_comment_commonly\": \"阿姨评价满\",\n      \"worker_comment_unsatisfy\": \"阿姨不满意数\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n  \"code\": 0,\n  \"msg\": \"用户认证已经过期,请重新登录\",\n  \"ret\": {},\n  \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/worker/worker-leave",
    "title": "[GET] /worker/worker-leave(100%)",
    "description": "<p>查看请假情况（李勇）</p> ",
    "name": "actionWorkerLeave",
    "group": "Worker",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>阿姨登录 token.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>请假类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>平台版本号.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"操作成功\",\n  \"ret\": {\n      \"2015-10-28\": true,\n      \"2015-10-29\": true,\n      \"2015-10-30\": false,\n      \"2015-10-31\": false,\n      \"2015-11-01\": false,\n      \"2015-11-02\": true,\n      \"2015-11-03\": true,\n      \"2015-11-04\": true,\n      \"2015-11-05\": true,\n      \"2015-11-06\": false,\n      \"2015-11-07\": false,\n      \"2015-11-08\": false,\n      \"2015-11-09\": true,\n  },\n \"alertMsg\": \"获取阿姨请假排班表成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 Not Found\n{\n    \"code\": 0,\n    \"msg\": \"用户认证已经过期,请重新登录\",\n    \"ret\": {},\n    \"alertMsg\": \"用户认证已经过期,请重新登录\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/WorkerController.php",
    "groupTitle": "Worker"
  },
  {
    "type": "GET",
    "url": "/configure/all-services",
    "title": "[GET] /configure/all-services（100%）",
    "description": "<p>获取城市服务配置项价格介绍页面以及分类的全部服务项目</p> ",
    "name": "actionAllServices",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n    {\n        \"category_id\":\"\", 服务品类id\n        \"category_name\":\"专业保洁\",  服务品类名\n        \"goodses\":\n        [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n        },\n        ]\n     }\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "/configure/get-service-item",
    "title": "[GET] /configure/get-service-item （0%）",
    "description": "<p>根据城市名称和服务类型获取对应的服务品类 (田玉星)</p> ",
    "name": "actionGetServiceItem",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市名称</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category_id",
            "description": "<p>服务类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "platform_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"code\": 1,\n     \"msg\": \"获取数据成功\",\n     \"alertMsg\": \"获取服务类型详情成功\",\n      \"ret\": [\n          {\n              \"good_id\": \"商品ID\",\n              \"goods_name\": \"商品名称\",\n              \"colour\": \"颜色\",\n              \"icon\": \"商品图标\",\n              \"goods_price\":\"商品价格\",\n              \"goods_price_description\":\"商品价格描述\"\n          }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 0,\n      \"msg\": \"城市名称参数错误\",\n      \"ret\": {},\n      \"alertMsg\": \"获取服务类型详情失败\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "/configure/start-page",
    "title": "[GET] /configure/start-page  （20%）",
    "description": "<p>阿姨端启动页（赵顺利）</p> ",
    "name": "actionStartPage",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n         \"code\": \"1\",\n         \"msg\": \"操作成功\",\n         \"ret\": {\n             \"pages\": [\n             {\n                 \"id\": \"1\", 编号\n                 \"img\": \"\", 图片地址\n                 \"title\": \"\", 文字\n                 \"remark\": \"\",  备注\n                 \"sort\": \"1\" 排序\n                 \"time\": \"5\"  停留时间，默认5秒\n                 \"next_url\": \"\" 下一页url\n             },\n             {\n                 \"id\": \"2\", 编号\n                 \"img\": \"\", 图片地址\n                 \"title\": \"\", 文字\n                 \"remark\": \"\",  备注\n                 \"sort\": \"2\" 排序\n                 \"time\": \"5\"  停留时间，默认5秒\n                 \"next_url\": \"\" 下一页url\n             },\n             ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExceptionService",
            "description": "<p>服务异常.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"服务异常\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "/configure/user-init",
    "title": "[GET] /configure/user-init（20% ）",
    "name": "actionUserInit",
    "group": "configure",
    "description": "<p>用户端首页初始化,获得开通城市列表，广告轮播图 等初始化数据(赵顺利--假数据 )</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市名称</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "platform_version",
            "description": "<p>app版本【ios_user4.4】</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 1,\n    \"msg\": \"操作成功\",\n    \"alertMsg\": \"成功\"\n    \"ret\": {\n        \"city_list\": [\n            {\n                \"city_id\": \"110100\",\n                \"city_name\": \"北京市\"\n            }\n        ],\n        \"header_link\": {\n            \"comment_link\": {\n                \"title\": \"意见反馈\",\n                \"url\": \"http://dev.m2.1jiajie.com/statics/images/MyView_FeedBack.png\",\n                \"img\": \"http://dev.m2.1jiajie.com/statics/images/MyView_FeedBack.png\"\n            },\n            \"phone_link\": {\n                \"title\": \"18210922324\",\n                \"url\": \"\",\n                \"img\": \"http://dev.m2.1jiajie.com/statics/images/MyView_Tel.png\"\n            }\n        },\n        \"pic_list\": [\n            {\n                \"img_path\": \"http://webapi2.1jiajie.com/app/images/ios_banner_1.png\",\n                \"link\": \"http://wap.1jiajie.com/trainAuntie1.html\",\n                \"url_title\": \"标准服务\"\n            }\n        ],\n        \"home_order_server\": [\n            {\n                \"title\": \"单次保洁\",\n                \"introduction\": \"新用户第1小时免费\",\n                \"icon\": \"http://dev.m2.1jiajie.com/statics/images/dancibaojie.png\",\n                \"url\": \"http://dev.m2.1jiajie.com/#/order/createOnceOrder/1\",\n                \"bg_colour\": \"ffb518\",\n                \"font_colour\": \"ffffff\"\n            },\n            {\n                \"title\": \"周期保洁\",\n                \"introduction\": \"一次下单 清洁无忧\",\n                \"icon\": \"http://dev.m2.1jiajie.com/statics/images/zhouqibaojie.png\",\n                \"url\": \"http://dev.m2.1jiajie.com/#/order/createOnceOrder/2\",\n                \"bg_colour\": \"ff8a44\",\n                \"font_colour\": \"ffffff\"\n            }\n        ],\n        \"server_list\": [\n            {\n                \"category_id\": \"2\",\n                \"category_name\": \"保洁任务\",\n                \"category_icon\": \"http://7b1f97.com1.z0.glb.clouddn.com/14468862302219563dbb56de6d3\",\n                \"category_introduction\": \"地板深度保护\",\n                \"category_url\": \"http://www.baidu.com\",\n                \"colour\": \"颜色\",\n                \"category_price_description\": \"价格描述\"\n            }\n        ],\n        \"isBlock\": \"用户是否为黑名单【1表示黑名单，0表示正常】\",\n        \"isEffect\": \"用户token是否有效【0表示正常，1表示失效】\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":0,\n  \"alertMsg\": \"城市尚未开通\",\n  \"msg\": \"城市尚未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "/configure/worker-check-update",
    "title": "[GET] /configure/worker-check-update （0%）",
    "description": "<p>检查阿姨端版本更新 (赵顺利)</p> ",
    "name": "actionWorkerCheckUpdate",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": \"1\",\n     \"msg\":\"操作成功\",\n     \"ret\":\n     {\n         \"curAndroidVersion\": 23,\n         \"androidVersionUrl\": \"http://webapi2.1jiajie.com/app/aunt_2.5.apk\",\n         \"androidVersionAlertMsg\": \"1、兼职阿姨也可登录阿姨端。2、兼职阿姨可修改自己的工作时间。3、新增待接活订单推送通知。\",\n         \"isAndroidUpdateForce\": false,\n         \"msgStyle\": \"\",\n         \"alertMsg\": \"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"0\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "/configure/worker-init",
    "title": "[GET] /configure/worker-init（100%）",
    "description": "<p>阿姨app初始化 （赵顺利）</p> ",
    "name": "actionWorkerInit",
    "group": "configure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n         \"code\": \"1\",\n         \"msg\": \"操作成功\",\n         \"ret\": {\n             \"pic_list\": [\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/ios_banner_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/trainAuntie1.html\",\n                 \"url_title\": \"标准服务\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150603ad_top_v4_1.png\",\n                 \"link\": \"http://wap.1jiajie.com/pledge.html\",\n                 \"url_title\": \"服务承诺\"\n             },\n             {\n                 \"img_path\": \"http://webapi2.1jiajie.com/app/images/20150311ad_top_v4_3.png\",\n                 \"link\": \"\",\n                 \"url_title\": \"\"\n             }\n             ],\n             \"order_num\":\n             {\n                 \"server_count\"=>\"\", 待服务订单\n                 \"worker_count\"=>\"\", 指定阿姨订单\n                 \"order_count\"=>\"\",  待抢单订单\n\n             },\n             \"footer_link\":[\n             {\n                 \"link_id\"=>\"1\",\n                 \"title\"=>\"首页\",\n                 \"url\"=>\"\",   跳转链接\n                 \"link_icon\"=>\"\",\n                 \"colour\"=>\"\",\n                 \"sort\"=>\"1\"  排序\n             },\n             {\n                 \"link_id\"=>\"2\",\n                 \"title\"=>\"任务\",\n                 \"url\"=>\"\",\n                 \"link_icon\"=>\"\",\n                 \"colour\"=>\"\",\n                 \"sort\"=>\"2\"\n             },\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SessionIdNotFound",
            "description": "<p>未找到会话ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\":\"Failed\",\n    \"msg\": \"SessionIdNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ConfigureController.php",
    "groupTitle": "configure"
  },
  {
    "type": "GET",
    "url": "/coupon/coupons",
    "title": "[GET] /coupon/coupons（100%）",
    "description": "<p>下单时获取用户优惠券列表（包括该用户该城市下的优惠券和通用的优惠券）（李勇）</p> ",
    "name": "actionCoupons",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Strimg</p> ",
            "optional": false,
            "field": "service_type_id",
            "description": "<p>服务类别id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"msg\": \"获取优惠券列表成功\",\n    \"ret\": [\n        {\n            \"id\": \"优惠券id\",\n            \"coupon_userinfo_name\": \"优惠券名称\",\n            \"coupon_userinfo_price\": \"优惠券价值\",\n            \"couponrule_use_start_time\": \"优惠券的用户可使用的开始时间\",\n            \"couponrule_use_end_time\": \"过期时间\",\n            \"couponrule_type\": \"实收金额优惠券类型1为全网优惠券2为类别优惠券3为商品优惠券\",\n            \"couponrule_service_type_id\": \"服务类别id\",\n            \"couponrule_commodity_id\": \"如果是商品优惠券id\"\n        }\n    ],\n    \"alertMsg\": \"获取优惠券列表成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 0,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "GET",
    "url": "/coupon/coupons-over-due",
    "title": "[GET] /coupon/coupons-over-due（100%）",
    "description": "<p>获取用户优惠券列表（包括该城市可用的、还有过期30天内的优惠券）（李勇）</p> ",
    "name": "actionCouponsOverDue",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"msg\": \"获取优惠券列表成功\",\n    \"ret\": [\n        {\n            \"id\": \"优惠券id\",\n            \"coupon_userinfo_name\": \"优惠券名称\",\n            \"coupon_userinfo_price\": \"优惠券价值\",\n            \"couponrule_use_start_time\": \"优惠券的用户可使用的开始时间\",\n            \"couponrule_use_end_time\": \"过期时间\",\n            \"couponrule_type\": \"实收金额优惠券类型1为全网优惠券2为类别优惠券3为商品优惠券\",\n            \"couponrule_service_type_id\": \"服务类别id\",\n            \"couponrule_commodity_id\": \"如果是商品优惠券id\"\n        }\n    ],\n    \"alertMsg\": \"获取优惠券列表成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 0,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "POST",
    "url": "/coupon/exchange-coupon",
    "title": "[POST] /coupon/exchange-coupon（100%）",
    "description": "<p>兑换优惠劵（李勇）</p> ",
    "name": "actionExchangeCoupon",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "customer_phone",
            "description": "<p>用户手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "coupon_code",
            "description": "<p>优惠码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n       \"code\": 1,\n       \"msg\": \"兑换成功\",\n       \"ret\": {\n           \"is_status\": 1,\n           \"msg\": \"数据库写入成功\",\n           \"data\": {\n               \"id\": \"优惠券id\",\n               \"couponrule_price\": \"优惠券金额\",\n               \"couponrule_name\": \"优惠券名称\",\n               \"couponrule_use_start_time\": \"优惠券的用户可使用的开始时间\",\n               \"couponrule_use_end_time\": \"优惠券的用户可使用的结束时间\",\n               \"couponrule_service_type_id\": \"服务类别id\"\n           }\n       },\n       \"alertMsg\": \"兑换成功\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouponNotFound",
            "description": "<p>优惠码不存在.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 Not Found\n{\n   \"code\": 0,\n   \"msg\": \"优惠码不存在\",\n   \"ret\": {},\n   \"alertMsg\": \"兑换失败\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "GET",
    "url": "/coupon/get-coupon-count",
    "title": "{GET} /coupon/get-coupon-count（100%）",
    "description": "<p>获取用户优惠券数量（李勇）</p> ",
    "name": "actionGetCouponCount",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"code\": 1,\n     \"msg\": \"获取用户优惠券数量成功\",\n     \"ret\": {\n         \"couponCount\": \"优惠券数量\"\n     },\n     \"alertMsg\": \"获取用户优惠券数量成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 0,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "GET",
    "url": "/coupon/get-customer-coupon-total",
    "title": "{GET} /coupon/get-customer-coupon-total（100%）",
    "description": "<p>获取用户优惠券总额（李勇）</p> ",
    "name": "actionGetCustomerCouponTotal",
    "group": "coupon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 1,\n      \"msg\": \"获取用户优惠券总额成功\",\n      \"ret\": {\n          \"couponTotal\": \"30.00\"\n      },\n      \"alertMsg\": \"获取用户优惠券总额成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 0,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/CouponController.php",
    "groupTitle": "coupon"
  },
  {
    "type": "GET",
    "url": "/order/get-order-channel-list",
    "title": "[GET] /order/get-order-channel-list (100%)",
    "name": "actionGetOrderChannelList_____",
    "group": "order",
    "description": "<p>获得订单渠道配置信息</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"数据获取成功\",\n    \"ret\":\n    [\n        {\n            \"order_channel_id\": \"8\",           订单渠道id\n            \"order_channel_name\": \"美团上门\",  订单渠道名称\n        },\n        {\n            \"order_channel_id\": \"9\",           订单渠道id\n            \"order_channel_name\": \"点评到家\",  订单渠道名称\n        },\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/OrderController.php",
    "groupTitle": "order"
  },
  {
    "type": "GET",
    "url": "/service/all-services",
    "title": "[GET] /service/all-services (100%)",
    "name": "actionAllServices",
    "group": "service",
    "description": "<p>获取城市所以服务类型列表 （赵顺利）</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n    {\n        \"category_id\":\"\", 服务品类id\n        \"category_name\":\"专业保洁\",  服务品类名\n        \"goodses\":\n        [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n        },\n        ]\n     }\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/baidu-map",
    "title": "[GET]/service/baidu-map（100%）",
    "group": "service",
    "name": "actionBaiduMap",
    "description": "<p>根据地址获取百度地图数据(赵顺利 )</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "query",
            "description": "<p>查询关键字</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>经纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "radius",
            "description": "<p>半径</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "output",
            "description": "<p>输出方式</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ak",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页条数</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page_num",
            "description": "<p>页数  允许为0</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.api.1jiajie.com/v1/service/baidu-map"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "queryNotSupportFound",
            "description": "<p>关键字不能为空.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"关键字不能为空\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/cleaning-task",
    "title": "[GET] /service/cleaning-task（100%）",
    "group": "service",
    "name": "actionCleaningTask",
    "description": "<p>获取城市所有保洁任务(赵顺利)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address_id",
            "description": "<p>地址id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "build_area",
            "description": "<p>建筑面积 传面积类型 1\\2; 1是小于100平米的，2是大于100平米的</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":[\n        {\n            \"id\": \"1\",\n            \"selected_service_scene\": \"\",\n            \"selected_service_area\": \"1\",\n            \"selected_service_sub_area\": \"1\",\n            \"selected_service_standard\": \"\",\n            \"selected_service_area_standard\": \"1\",\n            \"selected_service_unit\": \"1\",\n            \"selected_service_photo\": \"1\",\n            \"created_at\": \"1\"\n        },\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/get-shop-district-info",
    "title": "[GET] /service/get-shop-district-info（100%）",
    "description": "<p>根据经纬度获取商圈信息（李勇）</p> ",
    "group": "service",
    "name": "actionGetShopDistrictInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": 1,\n     \"msg\": \"获取商圈信息成功\",\n     \"ret\": {\n         \"id\": \"1\",\n         \"operation_shop_district_id\": \"商圈id\",\n         \"operation_shop_district_name\": \"商圈名称\",\n         \"operation_city_id\": \"城市编号\",\n         \"operation_city_name\": \"城市名称\",\n         \"operation_area_id\": \"区域id\",\n         \"operation_area_name\": \"区域名称\"\n     },\n     \"alertMsg\": \"获取商圈信息成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "queryNotSupportFound",
            "description": "<p>获取商圈信息失败</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n{\n    \"code\": 0,\n    \"msg\": \"商圈不存在\",\n    \"ret\": {},\n    \"alertMsg\": \"商圈不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/goods-price",
    "title": "[GET] /service/goods-price（100%）",
    "name": "actionGoodsPrice",
    "group": "service",
    "description": "<p>获取某城市某商品的价格及备注信息 （赵顺利）</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "goods_id",
            "description": "<p>服务品类id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"msg\": \"\",\n    \"ret\":\n    [\n        \"category_name\": \"\", 服务品类名称\n        \"goods_category_name\": \"\", 服务商品名称\n        \"goods_price\": \"0.0000\", 价格\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>错误的城市信息.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":0,\n  \"msg\": \"错误的城市信息\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/home-services",
    "title": "[GET] /service/home-services（20% ）",
    "name": "actionHomeServices",
    "group": "service",
    "description": "<p>获取城市首页服务项目信息简介(赵顺利--假数据，未与boss关联)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 1,\n    \"msg\": \"信息获取成功\",\n    \"ret\":\n    [\n    {\n        \"goods_id\": \"1\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"管道疏通\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"眼\",\n        \"goods_price_description\": \"\"\n    },\n    {\n        \"goods_id\": \"2\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"家电维修\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"次\",\n        \"goods_price_description\": \"\"\n    },\n    {\n        \"goods_id\": \"3\",\n        \"goods_no\": \"\",\n        \"goods_name\": \"家具组装\",\n        \"goods_introduction\": \"含：专业设备+专业技师+上门服务\",\n        \"goods_english_name\": \"\",\n        \"goods_img\": \"\",\n        \"goods_app_ico\": \"\",\n        \"goods_pc_ico\": \"\",\n        \"goods_price\": \"160.00\",\n        \"goods_price_unit\": \"次\",\n        \"goods_price_description\": \"\"\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":0,\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/recursive-service-time",
    "title": "[GET] /service/recursive-service-time(100%)",
    "description": "<p>周期服务时间表（李勇）</p> ",
    "name": "actionRecursiveServiceTime",
    "group": "service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "service_type",
            "description": "<p>服务类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "worker_id",
            "description": "<p>阿姨id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan_time",
            "description": "<p>计划服务时长.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"获取周期服务时间表成功\",\n  \"ret\": [\n      {\n          \"date\": \"2015-10-29\",\n          \"timeline\": [\n              {\n                  \"time\": \"8:00-10:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"8:30-10:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:00-11:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:30-11:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:00-12:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:30-12:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:00-13:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:30-13:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:00-14:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:30-14:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:00-15:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:30-16:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:00-17:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:30-17:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"15:00-18:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"16:30-18:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:00-19:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:30-19:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:00-20:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:30-20:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:00-21:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:30-21:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"20:00-22:00\",\n                  \"enable\": false\n              }\n          ]\n      }\n   ],\n \"alertMsg\": \"获取周期服务时间表成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 0,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/server-worker-list",
    "title": "[GET] /service/server-worker-list（100%）",
    "description": "<p>获取周期服务可用阿姨列表（李勇）</p> ",
    "group": "service",
    "name": "actionServerWorkerList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>第几页.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": 1,\n     \"msg\": \"获取周期服务可用阿姨列表成功\",\n     \"ret\": {\n         \"page\": \"第几页\",\n         \"pageNum\": \"每页显示多少条\",\n         \"data\": [\n             {\n                 \"id\": \"阿姨表自增id\",\n                 \"worker_name\": \"阿姨姓名\",\n                 \"worker_photo\": \"阿姨手机\",\n                 \"worker_star\": \"阿姨星级\",\n                 \"updated_at\": \"最后更新时间\",\n                 \"worker_server_num\": \"阿姨服务次数\",\n                 \"worker_comment_score\": \"阿姨评论评分\"\n             }\n         ]\n     },\n     \"alertMsg\": \"获取周期服务可用阿姨列表成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "queryNotSupportFound",
            "description": "<p>没有可用阿姨</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n      \"code\": 0,\n      \"msg\": \"没有可用阿姨\",\n      \"ret\": {},\n      \"alertMsg\": \"没有可用阿姨\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/service-goods",
    "title": "[GET] /service/service-goods（80%）",
    "name": "actionServiceGoods",
    "group": "service",
    "description": "<p>获得某城市下某服务的所有子服务列表，返回子服务数组<a href=\"%E8%B5%B5%E9%A1%BA%E5%88%A9--url%E4%B8%8D%E8%83%BD%E8%8E%B7%E5%8F%96\">服务名,服务描述,服务图标，服务id，url</a></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category_id",
            "description": "<p>服务品类id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "app_version",
            "description": "<p>访问源(android_4.2.2)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"\",\n    \"ret\":\n    [\n        {\n            \"goods_id\": \"2\", 服务类型id\n            \"goods_no\": null,  服务类型编号\n            \"goods_name\": \"空调清洗\",  服务类型名\n            \"goods_introduction\": \"\", 服务类型简介\n            \"goods_english_name\": \"\", 服务类型英文名称\n            \"goods_img\": \"\", 服务类型图片\n            \"goods_app_ico\": null,  APP端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_pc_ico\": null,  PC端图标(序列化方式存储|首页大图，首页小图，分类页小图，订单页小图)\n            \"goods_price\": \"0.0000\", 价格\n            \"goods_price_unit\": \"件\",  单位\n            \"goods_price_description\": \"1232131\"\n            \"goods_page_url\": \"\"\n        },\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotSupportFound",
            "description": "<p>该城市暂未开通.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\":\"0\",\n  \"msg\": \"该城市暂未开通\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/service-items",
    "title": "[GET] /service/service-items ( for pop )",
    "name": "actionServiceItems",
    "group": "service",
    "description": "<p>获得所有服务项目[服务id, 服务编号,服务名,服务描述,服务英文名称]</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"1\",\n    \"msg\": \"数据获取成功\",\n    \"ret\":\n    [\n        {\n            \"goods_id\": \"2\", 服务id\n            \"goods_no\": null,  服务编号\n            \"goods_name\": \"空调清洗\",  服务名\n            \"goods_introduction\": \"\", 服务简介\n            \"goods_english_name\": \"\", 服务英文名称\n        },\n     ],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  },
  {
    "type": "GET",
    "url": "/service/single-service-time",
    "title": "[GET] /service/single-service-time(100%)",
    "description": "<p>单次服务获取服务时间（李勇）</p> ",
    "name": "actionSingleServiceTime",
    "group": "service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>用户认证.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "service_type",
            "description": "<p>服务类型</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>当前经度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>当前纬度.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan_time",
            "description": "<p>计划服务时长</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 1,\n\"msg\": \"获取单次服务排班表成功\",\n\"ret\": [\n      {\n          \"date\": \"2015-10-29\",\n          \"timeline\": [\n              {\n                  \"time\": \"8:00-10:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"8:30-10:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:00-11:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"9:30-11:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:00-12:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"10:30-12:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:00-13:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"11:30-13:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:00-14:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"12:30-14:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:00-15:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"13:30-16:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:00-17:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"14:30-17:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"15:00-18:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"16:30-18:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:00-19:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"17:30-19:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:00-20:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"18:30-20:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:00-21:00\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"19:30-21:30\",\n                  \"enable\": false\n              },\n              {\n                  \"time\": \"20:00-22:00\",\n                  \"enable\": false\n              }\n          ]\n      }\n   ],\n\"alertMsg\": \"获取周期服务时间表成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户认证已经过期.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n  {\n     \"code\": 0,\n     \"msg\": \"用户认证已经过期,请重新登录\",\n     \"ret\": {},\n     \"alertMsg\": \"用户认证已经过期,请重新登录\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/ServiceController.php",
    "groupTitle": "service"
  }
] });