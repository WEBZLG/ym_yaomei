<template>
  <div class="goods_item">
    <div class="order_status">
        <div class="order">订单编号：3456789</div>
        <div class="status">待付款</div>
    </div>
    <div class="goodsInfo">
      <div>
        <van-image height="100" width="100" lazy-load :src="content.thumb">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div>
      <div class="parameter">
        <h3 class="title">{{content.name}}</h3>
        <div>￥<span>{{content.money}}</span></div>
        <div>规格：<span>{{content.size_name}}</span></div>
        <div>数量：<span>{{content.buy_num}}</span></div>
      </div>
    </div>
    <div class="cost">
        <div>共1件</div>
        <div>快递费用：￥0.00</div>
        <div>合计：￥888.00</div>
    </div>
    <div class="btn_box">
      <div class="btn"><img src="../../static/image/mine/cancel_img.png" alt=""></div>
      <div class="btn"><img src="../../static/image/mine/pay_img.png" alt=""></div>
      <div class="btn"><img src="../../static/image/mine/view_order.png" alt=""></div>
      <div class="btn"><img src="../../static/image/mine/wuliu_img.png" alt=""></div>
      <div class="btn"><img src="../../static/image/mine/shouhuo_img.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsInfo',
    props: {
      content: {
        type: Object,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goods_item{
    background-color: $white-color;

    .order_status{
      @include  flexbox();
      padding: 0.453333rem 0.32rem;
      color: $grey-deep-color;
      border-bottom: 1px solid #f7f7f7;
      .status{
        font-weight: bold;
      }
    }

  .goodsInfo {
    @include flexbox();
    padding: 0.4rem 0.32rem;

    .parameter {
      line-height: 22px;
      margin-left: 0.32rem;
    }

    .title {
      font-size: $font-size14;
      color: $black-color;
      font-weight: bold;
      margin: 0;
      min-height: 0.48rem;
      @include textoverflow($clamp: 2);
    }

    .parameter div {
      font-size: $font-size14;
      color: #979797;
    }

    .parameter span {
      color: #282828;
    }
  }
  .cost{
    @include flexbox();
    padding: 0.453333rem 0.32rem;
    border-bottom: 1px solid #f7f7f7;
  }
  .btn_box {
    @include flexbox($jc: '', $fd:row-reverse);
    padding: 0.16rem 0.32rem;
    background-color: $white-color;
    margin: 0.133333rem 0;

    .btn {
      width: 2.56rem;
      margin-left: 0.32rem;

      img {
        width: 100%;
      }
    }
  }
  }
</style>
