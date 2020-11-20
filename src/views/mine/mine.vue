<!-- home -->
<template>
  <div class="container">
    <!-- 头部 -->
    <div class="banner">
      <div class="sys-box">
        <div class="sys_icon"><img src="../../../static/image/mine/sys_icon.png" alt=""></div>
        <div class="info_icon"><img src="../../../static/image/mine/info_icon.png" alt=""></div>
      </div>
      <div class="user_info">
        <van-image width="62" height="62" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="user_box">
          <div class="name">用户昵称 <span class="user_level"><img src="../../../static/image/mine/user_level0.png" alt=""></span></div>
          <div class="code">邀请码:
            <span>FG1234G</span>
            <span class="copy-btn">复制</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单状态 -->
    <div class="conten">
      <div class="order_nav">
        <div>
          <van-image width="28" height="29" fit="cover" :src="navIcon[0]" />
          <div>带配送</div>
        </div>
        <div>
          <van-image width="34" height="29" fit="cover" :src="navIcon[1]" />
          <div>带配送</div>
        </div>
        <div>
          <van-image width="28" height="29" fit="cover" :src="navIcon[2]" />
          <div>带配送</div>
        </div>
        <div>
          <van-image width="25" height="29" fit="cover" :src="navIcon[3]" />
          <div>带配送</div>
        </div>
      </div>
      <!-- 账户情况 -->
      <div class="my_count">
        <div class="my_money">
          <div class="caption">我的余额</div>
          <div class="money">￥0.00</div>
          <div class="total">累计收益：￥888888</div>
        </div>
        <div class="submit_box">
          <div class="btn tx_btn">立即体现</div>
          <div class="btn list_btn">提现记录</div>
        </div>
      </div>

      <!-- 海报升级 -->
      <div class="poster_box">
        <div class="img_box"><img src="../../../static/image/mine/haibao_img.png" alt=""></div>
        <div class="img_box"><img src="../../../static/image/mine/shengji_img.png" alt=""></div>
      </div>

      <!-- 列表 -->
      <van-cell-group>
        <van-cell  is-link to="">
          <template #title>
            <span class="s_icon"><img src="../../../static/image/mine/address_icon.png" alt=""></span>
            <span class="custom-title">单元格</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  // 请求接口
  import {
    getUserInfo
  } from '@/api/user.js'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        navIcon: [
          require('../../../static/image/mine/dfk_icon.png'),
          require('../../../static/image/mine/dps_icon.png'),
          require('../../../static/image/mine/dqs_icon.png'),
          require('../../../static/image/mine/success_icon.png')
        ]
      }
    },
    computed: {
      ...mapGetters(['userName'])
    },
    mounted() {
      this.initData()
    },
    methods: {
      // 请求数据案例
      initData() {
        // 请求接口数据，仅作为展示，需要配置src->config下环境文件
        const params = {
          user: 'sunnie'
        }
        getUserInfo(params)
          .then(() => {})
          .catch(() => {})
      },
      // Action 通过 store.dispatch 方法触发
      doDispatch() {
        this.$store.dispatch('setUserName', '12313')
      }
    }
  }
</script>
<style lang="scss">
  .banner {
    color: #ffffff;
    height: 3.866666rem;
    width: 100%;
    background: url(../../../static/image/mine/mine_bg.png) no-repeat center;
    background-size: cover;

    .user_info {
      display: flex;
      align-items: center;
      padding: 0 0.4rem;
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
      border: 1px solid #ffffff;
      font-size: 10px;
      height: 0.56rem;
      line-height: 0.56rem;
      padding-left: 0.133333rem;
    }

    .copy-btn {
      display: inline-block;
      height: 100%;
      background-color: #ffffff;
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
      }

      .sys_icon {
        width: 0.56rem;
        margin-left: 0.32rem;
      }
    }
  }

  .order_nav {
    height: 2.506666rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin: -0.586666rem 0.133333rem 0;
    position: relative;
    z-index: 9;
    background: url(../../../static/image/mine/order_bg.png) no-repeat center;
    background-size: cover;
    padding: 0 0.666666rem;
  }

  .my_count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.8rem;
    margin: 0.453333rem 0.133333rem;
    background: url(../../../static/image/mine/yue_bg.png) no-repeat center;
    background-size: cover;
    padding: 0 0.6rem;

    .my_money {
      color: #111111;

      .caption {
        font-size: 14px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.32rem;

    .img_box {
      height: 2.133333rem;
      width: 4.533333rem;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
.van-cell__title{
  
}
</style>
