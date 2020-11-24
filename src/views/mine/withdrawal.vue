<template>
  <div class="withdrawal">
    <van-nav-bar fixed title="提现" z-index="99" left-arrow @click-left="onClickLeft" />
    <div class="white_bg ipt_money">
      <label for="">账户余额将提现到微信余额</label>
      <van-field v-model="money" type="number" placeholder="请输入提现金额" />
      <div class="balance">账户余额：<span class="money">￥0.00</span></div>
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
  export default {
    data() {
      return {
        money:''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="scss">
  .withdrawal {
    .ipt_money{
      margin: 0.426666rem 0 0.266666rem;
    }
    .tx_btn{
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
      .balance{
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
