export default {
  USER_CHECK_STATUS_DICT: {
    1: '正常',
    2: '封禁',
    3: '未审核',
    4: '审核不通过',
    5: '待核实'
  },

  ORDER_STATUS_SEARCH: [
    {
      code: '',
      label: '所有'
    },
    {
      code: 96,
      label: '待报价'
    },
    {
      code: 99,
      label: '已报价'
    },
    {
      code: 1,
      label: '待支付'
    },
    {
      code: 2,
      // label: '已付款'
      label: '待发货'
    },
    {
      code: 41,
      // label: '已发货'
      label: '待收货'
    },
    {
      code: 5,
      label: '已收货'
    },
    {
      code: 6,
      label: '已完成'
    },
    {
      code: 9,
      label: '已取消'
    },
    {
      code: 91,
      label: '已关闭'
    },
    {
      code: 97,
      label: '售后'
    }
  ],

  ORDER_STATUS_STEP_FLOW: [
    {
      code: -1,
      label: '发布需求'
    },
    {
      code: 0,
      label: '报价'
    },
    {
      code: 2,
      label: '付款'
    },
    {
      code: 4,
      label: '发货'
    },
    {
      code: 5,
      label: '收货'
    },
    {
      code: 6,
      label: '完成'
    }
  ],
  ORDER_STATUS: {
    0: '预处理',
    1: '待支付',
    2: '待发货',
    41: '待收货',
    5: '已收货',
    6: '已完成',
    9: '已取消',
    91: '已关闭'
  },

  FROZEN_STATUS: {
    0: '解冻',
    1: '正在处理售后'
  },

  OFFER_STATUS: {
    0: '待报价',
    1: '已报价'
  },

  SUB_ACCOUNT_CHECK_STATUS_DICT: {
    1: '正常',
    2: '已停用'
  },

  SUB_ACCOUNT_ROLE_DICT: {
    1: '管理员',
    2: '版师',
    3: '客服'
  },

  ORDER_STATUS_DICT: {
    1: '未支付',
    2: '支付成功'
  },

  COMPANY_TAX_PAYER_TYPE: {
    0: '一般纳税人',
    1: '小规模纳税人'
  },

  DESIGNER_GENDER_TYPE: {
    1: '男',
    2: '女',
    3: '保密'
  },

  IM_MER: {
    BASE_URL: {
      value: 'https://mchat.udesk.cn/web_client/demo.html',
      label: 'IM地址'
    },
    TENANT_ID: {
      value: '63922389-ae73-4368-a610-8da6b0c7796b',
      label: '租户ID'
    },
    MERCHANT_EUID: {
      value: 'mc01',
      label: ''
    },
    PRODUCT_TITLE: {
      value: 'Apple+iPhone+7',
      label: '咨询标题'
    },
    PRODUCT_URL: {
      value: 'http://item.jd.com/3133829.html?cu=true&utm_source%E2%80%A6erm=9457752645_0_11333d2bdbd545f1839f020ae9b27f14',
      label: '咨询链接'
    },
    PRODUCT_IMAGE: {
      value: 'http://img14.360buyimg.com/n1/s450x450_jfs/t3157/63/1645131029/112074/f4f79169/57d0d44dN8cddf5c5.jpg?v=1483595726320',
      label: '咨询图片'
    },
    'PRODUCT_价格': {
      value: '￥6189.00',
      label: '咨询价格'
    },
    'PRODUCT_描述': {
      value: '购买京东自营电脑,手机,数码品类指定产品,实际下单结算金额满199元,返京东自营大闸蟹东券一张.',
      label: '咨询描述'
    }
  },
  IM_CUSTOMER: {
    CUSTOMER_EUID: {
      value: '998',
      label: '客户euid'
    },
    CUSTOMER_NAME: {
      value: 'TEST-VIP',
      label: '客户名称'
    }
  }
}
