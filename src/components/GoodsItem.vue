<template>
  <div class="goods_item">
    <div class="order_status">
      <div class="order">订单编号：{{content.order_num}}</div>
      <div v-if="content.status=='待付款'" class="status red">待付款</div>
      <div v-if="content.status=='待配送'" class="status orange">待配送</div>
      <div v-if="content.status=='待签收'" class="status green">待签收</div>
      <div v-if="content.status=='已完成'" class="status blue">已完成</div>
    </div>
    <div class="goodsInfo" @click="haneleDetail(content.id)">
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
      <div>共{{content.number}}件</div>
      <div>快递费用：￥{{content.post_num}}</div>
      <div>合计：￥{{content.total}}</div>
    </div>
    <div class="btn_box">
      <div class="btn" v-if="content.status=='待付款'" @click="handleAction('dfk',content.id)"><img src="../../static/image/mine/pay_img.png" alt=""></div>
      <div class="btn" v-if="content.status=='待付款'" @click="handleAction('qxdd',content.id)"><img src="../../static/image/mine/cancel_img.png" alt=""></div>
      <div class="btn" v-if="content.status=='待配送'||content.status=='已完成'" @click="handleAction('ckdd',content.id)"><img src="../../static/image/mine/view_order.png"
          alt=""></div>
      <div class="btn" v-if="content.status=='待签收'" @click="handleAction('qrsh',content.id)"><img src="../../static/image/mine/shouhuo_img.png" alt=""></div>
      <div class="btn" v-if="content.status=='待签收'" @click="handleAction('ckwl',content.id)"><img src="../../static/image/mine/wuliu_img.png" alt=""></div>
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
        status_color: ''
      }
    },
    methods: {
      handleAction(type,id) {
        this.$emit('action', type,id)
      },
      haneleDetail(e){
        this.$emit('detail', e)
      }
      // handleCancel(value) {
      //   this.$emit('cancel', value)
      // },
      // handleView(value) {
      //   this.$emit('view', value)
      // },
      // handleSign(value) {
      //   this.$emit('sign', value)
      // },
      // handleLogistics(value) {
      //   this.$emit('logistics', value)
      // }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goods_item {
    background-color: $white-color;

    .order_status {
      @include flexbox();
      padding: 0.453333rem 0.32rem;
      color: $grey-deep-color;
      border-bottom: 1px solid #f7f7f7;

      .status {
        font-weight: bold;
      }

      .red {
        color: $red-color;
      }

      .orange {
        color: $orange-color;
      }

      .green {
        color: $green-color;
      }

      .blue {
        color: $blue-color;
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

    .cost {
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
