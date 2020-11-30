<!-- home -->
<template>
  <div class="container">
    <van-nav-bar fixed title="我的" z-index="99" />
    <!-- 头部 -->
    <div class="banner">
      <div class="sys-box">
        <div class="sys_icon"  @click="onSystem"><img src="../../../static/image/mine/sys_icon.png" alt=""></div>
        <div class="info_icon" @click="onMessage">
          <img src="../../../static/image/mine/info_icon.png" alt="">
          <Dot :content="messageDot"></Dot>
         </div>
      </div>
      <div class="user_info">
        <van-image width="62" height="62" round fit="cover" :src="dataList.avatar" />
        <div class="user_box">
          <div class="name">{{dataList.nickname}} <span class="user_level"><img :src="dataList.group" alt=""></span></div>
          <div class="code">邀请码:
            <span>{{dataList.invite_code}}</span>
            <span class="copy-btn">复制</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单状态 -->
    <div class="conten">
      <div class="order_nav">
        <div @click="onWait(1)">
          <van-image width="28" height="29" fit="cover" :src="navIcon[0]" />
          <div>待付款</div>
          <Dot :content="{type:1,num:dataList.reddot_dfk}"></Dot>
        </div>
        <div @click="onWait(2)">
          <van-image width="34" height="29" fit="cover" :src="navIcon[1]" />
          <div>待配送</div>
          <Dot :content="{type:1,num:dataList.reddot_dps}"></Dot>
        </div>
        <div @click="onWait(3)">
          <van-image width="28" height="29" fit="cover" :src="navIcon[2]" />
          <div>待签收</div>
          <Dot :content="{type:1,num:dataList.reddot_dqs}"></Dot>
        </div>
        <div @click="onWait(4)">
          <van-image width="25" height="29" fit="cover" :src="navIcon[3]" />
          <div>已完成</div>
          <Dot :content="{type:1,num:dataList.reddot_ywc}"></Dot>
        </div>
      </div>
      <!-- 账户情况 -->
      <div class="my_count">
        <div class="my_money">
          <div class="caption">我的余额</div>
          <div class="money">￥{{dataList.money}}</div>
          <div class="total">累计收益：￥{{dataList.income}}</div>
        </div>
        <div class="submit_box">
          <div class="btn tx_btn" @click="onWithdrawal">立即提现</div>
          <div class="btn list_btn" @click="onWithdrawalList">提现记录</div>
        </div>
      </div>

      <!-- 海报升级 -->
      <div class="poster_box">
        <div class="img_box"><img src="../../../static/image/mine/haibao_img.png" alt=""></div>
        <div class="img_box" @click="onUpgrade"><img src="../../../static/image/mine/shengji_img.png" alt=""></div>
      </div>

      <!-- 列表 -->
      <van-cell-group>
        <van-cell is-link :to="item.link" v-for="(item,index) in cellList" :key="index">
          <template #title>
            <span class="s_icon"><img :src="item.icon_url" alt=""></span>
            <span class="custom-title">{{item.title}}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import Dot from '@/components/Dot'
  // 请求接口
  import {
    userInfo
  } from '@/api/user.js'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        dataList:'',
        messageDot:{
          type:0
        },
        navIcon: [
          require('../../../static/image/mine/dfk_icon.png'),
          require('../../../static/image/mine/dps_icon.png'),
          require('../../../static/image/mine/dqs_icon.png'),
          require('../../../static/image/mine/success_icon.png')
        ],
        cellList: [{
            icon_url: require('../../../static/image/mine/active_icon.png'),
            title: '我的动态',
            link: ''
          },
          {
            icon_url: require('../../../static/image/mine/group_icon.png'),
            title: '我的团队',
            link: '/my_group'
          }, {
            icon_url: require('../../../static/image/mine/coin_ico.png'),
            title: '收益明细',
            link: '/income_list'
          },
          {
            icon_url: require('../../../static/image/mine/kucun_icon.png'),
            title: '我的库存',
            link: '/my_stock'
          },
          {
            icon_url: require('../../../static/image/mine/address_icon.png'),
            title: '收获地址',
            link: '/address'
          },
          {
            icon_url: require('../../../static/image/mine/serves_icon.png'),
            title: '客服服务',
            link: '/service'
          }
        ]
      }
    },
    computed: {
      ...mapGetters(['userName'])
    },
    components: {
      Footer,
      Dot
    },
    mounted() {
      this.initData()
    },
    methods: {
      // 订单状态导航
      onWait(e) {
        this.$router.push({
          path: '/my_order',
          query: {
            active: e
          },
        })

      },
      // 消息
      onMessage() {
        this.$router.push('/message')
      },
      //设置
      onSystem(){
        this.$router.push('/system')
      },
      // 提现
      onWithdrawal() {
        this.$router.push('/withdrawal')
      },
      // 提现记录
      onWithdrawalList() {
        this.$router.push('/withdrawal_list')
      },
      onUpgrade(){
        this.$router.push('/upgrade')
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2'
        }
        userInfo(params)
          .then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // // Action 通过 store.dispatch 方法触发
      // doDispatch() {
      //   this.$store.dispatch('setUserName', '12313')
      // }
    }
  }
</script>
<style lang="scss" scoped>
  .banner {
    color: $white-color;
    height: 3.866666rem;
    width: 100%;
    background: url(../../../static/image/mine/mine_bg.png) no-repeat center;
    background-size: cover;

    .user_info {
      @include flexbox($jc: '') padding: 0 0.4rem;
    }

    .user_box {
      margin-left: 0.32rem;
    }

    .user_level {
      width: 2rem;
      height: 0.6rem;
      display: inline-block;
      vertical-align: text-top;
      margin-left: 0.4rem;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .name {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 0.293333rem;
    }

    .code {
      display: inline-block;
      border: 1px solid $white-color;
      font-size: 10px;
      height: 0.56rem;
      line-height: 0.56rem;
      padding-left: 0.133333rem;
    }

    .copy-btn {
      display: inline-block;
      height: 100%;
      background-color: $white-color;
      color: #2a3745;
      font-size: 12px;
      width: 1.013333rem;
      text-align: center;
      margin-left: 0.133333rem;
    }

    .sys-box {
      display: flex;
      flex-direction: row-reverse;
      padding: 0.373333rem 0.4rem 0.32rem;

      .info_icon,
      .sys_icon {
        width: 0.466666rem;
        height: 0.506666rem;
        position: relative;
      }

      .sys_icon {
        width: 0.56rem;
        margin-left: 0.32rem;
      }
    }
  }

  .order_nav {
    > div{
      position: relative;
    }
    height: 2.506666rem;
    @include flexbox($jc: space-between) text-align: center;
    margin: -0.586666rem 0.133333rem 0;
    position: relative;
    z-index: 9;
    background: url(../../../static/image/mine/order_bg.png) no-repeat center;
    background-size: cover;
    padding: 0 0.666666rem;
  }

  .my_count {
    @include flexbox($jc: space-between) height: 2.8rem;
    margin: 0.453333rem 0.133333rem;
    background: url(../../../static/image/mine/yue_bg.png) no-repeat center;
    background-size: cover;
    padding: 0 0.6rem;

    .my_money {
      color: #111111;

      .caption {
        font-size: $font-size14;
      }

      .money {
        font-size: 28px;
        font-weight: bold;
      }
    }

    .submit_box {
      .btn {
        height: 0.64rem;
        line-height: 0.64rem;
        width: 1.813333rem;
        text-align: center;
        font-weight: bold;
      }

      .tx_btn {
        background: url(../../../static/image/mine/tixian_btn.png) no-repeat center;
        background-size: cover;
        margin-bottom: 0.266666rem;
      }

      .list_btn {
        border: 1px solid #111111;
      }
    }
  }

  .poster_box {
    @include flexbox($jc: space-between) margin: 0 0.32rem 0.4rem;

    .img_box {
      height: 2.133333rem;
      width: 4.533333rem;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .s_icon {
    display: inline-block;
    vertical-align: middle;
    height: 0.373333rem;
    width: 0.373333rem;
    margin-right: 0.186666rem;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .custom-title {
    display: inline-block;
    vertical-align: text-top;
  }
</style>
