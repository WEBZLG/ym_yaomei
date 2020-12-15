<template>
  <div class="withdrawal">
    <div class="white_bg ipt_money">
      <!-- <label for="">账户余额将提现到微信余额</label> -->
      <label for="">{{dataList.config}}</label>
      <van-field v-model="money" type="number" placeholder="￥0.00" />
      <div class="balance">账户余额：<span class="money">￥{{dataList.money}}</span></div>
    </div>
    <div class="white_bg flex">
      <div>提现方式</div>
      <div class="wechat">
        <span class="wechat_icon"><img src="../../../static/image/mine/wechat_cion.png" alt=""></span>
        <span>微信</span>
      </div>
    </div>


    <div class="tx_btn"><img src="../../../static/image/mine/tx_btn_img.png" alt=""></div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {
    userWithdraw,
    appWithdraw
  } from '@/api/user.js'
  export default {
    data() {
      return {
        money: '',
        dataList: ''
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      // 请求数据
      initData() {
        const params = {
          uid: '2'
        }
        userWithdraw(params)
          .then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      postData() {
        const params = {
          uid: '2',
          money: this.money
        }
        if (params.money == '') {
          Toast('请输入金额')
          return false;
        }
        userWithdraw(params)
          .then((res) => {
            console.log(res)
            Toast(res.msg)
            this.money = ''
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
    }
  }
</script>

<style lang="scss">
  .withdrawal {
    .ipt_money {
      margin-bottom: 0.266666rem;
    }

    .tx_btn {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 9.36rem;

      img {
        width: 100%;
      }
    }

    .white_bg {
      padding: 0.506666rem 0.32rem;
      color: $grey-deep-color;
      font-size: $font-size14;
      background-color: $white-color;

      .balance {
        padding-top: 0.533333rem;
      }

      .van-cell {
        padding: 0;

        .van-cell__value--alone {
          font-size: 32px;
          // font-weight: bold;
          padding: 0.533333rem 0;
        }
      }
    }

    .money {
      color: $gold-color;
    }

    .flex {
      @include flexbox();
    }

    .wechat {
      color: #1f1f1f;

      .wechat_icon {
        display: inline-block;
        vertical-align: middle;
        width: 0.36rem;
        margin-right: 0.053333rem;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
