/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [{
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          keepAlive: false
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine/mine'),
        meta: {
          title: '我的',
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/my_group',
    name: 'MyGroup',
    component: () => import('@/views/mine/my_group'),
    meta: {
      title: '我的团队',
      keepAlive: false
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/mine/message'),
    meta: {
      title: '消息',
      keepAlive: false
    }
  },
  {
    path: '/my_stock',
    name: 'MyStock',
    component: () => import('@/views/mine/my_stock'),
    meta: {
      title: '我的库存',
      keepAlive: false
    }
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: () => import('@/views/mine/withdrawal'),
    meta: {
      title: '提现',
      keepAlive: false
    }
  },
  {
    path: '/withdrawal_list',
    name: 'WithdrawalList',
    component: () => import('@/views/mine/withdrawal_list'),
    meta: {
      title: '提现记录',
      keepAlive: false
    }
  },
  {
    path: '/wait_pay',
    name: 'WaitPay',
    component: () => import('@/views/mine/wait_pay'),
    meta: {
      title: '待付款',
      keepAlive: false
    }
  },
  {
    path: '/wait_send',
    name: 'WaitSend',
    component: () => import('@/views/mine/wait_send'),
    meta: {
      title: '待配送',
      keepAlive: false
    }
  },
  {
    path: '/wait_sign',
    name: 'WaitSign',
    component: () => import('@/views/mine/wait_sign'),
    meta: {
      title: '待配送',
      keepAlive: false
    }
  },
  {
    path: '/complate',
    name: 'Complate',
    component: () => import('@/views/mine/complate'),
    meta: {
      title: '待配送',
      keepAlive: false
    }
  },
  {
    path: '/my_order',
    name: 'MyOrder',
    component: () => import('@/views/mine/my_order'),
    meta: {
      title: '待配送',
      keepAlive: false
    }
  },
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/mine/system'),
    meta: {
      title: '设置',
      keepAlive: false
    }
  },
  {
    path: '/changePhone',
    name: 'ChangePhone',
    component: () => import('@/views/mine/changePhone'),
    meta: {
      title: '修改手机号',
      keepAlive: false
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('@/views/mine/address'),
    meta: {
      title: '收货地址',
      keepAlive: false
    }
  },
  {
    path: '/add_address',
    name: 'AddAddress',
    component: () => import('@/views/mine/add_address'),
    meta: {
      title: '收货地址',
      keepAlive: false
    }
  },
  {
    path: '/income_list',
    name: 'IncomeList',
    component: () => import('@/views/mine/income_list'),
    meta: {
      title: '收入明细',
      keepAlive: false
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/mine/service'),
    meta: {
      title: '客服服务',
      keepAlive: false
    }
  },
  {
    path: '/goods_apply',
    name: 'GoodsApply',
    component: () => import('@/views/mine/goods_apply'),
    meta: {
      title: '补货申请',
      keepAlive: false
    }
  },
  {
    path: '/goods_apply_submit',
    name: 'GoodsApplySubmit',
    component: () => import('@/views/mine/goods_apply_submit'),
    meta: {
      title: '补货申请',
      keepAlive: false
    }
  },
  {
    path: '/replenish_list',
    name: 'ReplenishLlist',
    component: () => import('@/views/mine/replenish_list'),
    meta: {
      title: '补货记录',
      keepAlive: false
    }
  },
  {
    path: '/goods_stock',
    name: 'GoodsStock',
    component: () => import('@/views/mine/goods_stock'),
    meta: {
      title: '商品库存',
      keepAlive: false
    }
  },
  {
    path: '/my_cdkey',
    name: 'MyCdkey',
    component: () => import('@/views/mine/my_cdkey'),
    meta: {
      title: '我的兑换码',
      keepAlive: false
    }
  },
  {
    path: '/upgrade',
    name: 'Upgrade',
    component: () => import('@/views/mine/upgrade'),
    meta: {
      title: '在线升级',
      keepAlive: false
    }
  },
  {
    path: '/gift_bag',
    name: 'GiftBag',
    component: () => import('@/views/home/gift_bag'),
    meta: {
      title: '精品礼包',
      keepAlive: false
    }
  },
  {
    path: '/goods_detail',
    name: 'GoodsDetail',
    component: () => import('@/views/home/goods_detail'),
    meta: {
      title: '商品详情',
      keepAlive: false
    }
  },
  {
    path: '/goods_detail',
    name: 'GoodsDetail',
    component: () => import('@/views/home/goods_detail'),
    meta: {
      title: '商品详情',
      keepAlive: false
    }
  },{
    path: '/order_submit',
    name: 'OrderSubmit',
    component: () => import('@/views/home/order_submit'),
    meta: {
      title: '确认订单',
      keepAlive: false
    }
  },

]
