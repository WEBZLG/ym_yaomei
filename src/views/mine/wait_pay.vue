<template>
  <div class="wait_pay">
    <div>
      <van-cell-group class="cell_top">
        <van-cell v-if="dataList.order" title="待付款" :border="false" :label="dataList.order.paytime" title-class="my_title" value-class="my_value" />
        <van-cell v-if="dataList.address" :title="dataList.address.shouhuo_name+' '+ dataList.address.shouhuo_mobile" :border="false" :label="dataList.address.address" title-class="my_name" value-class="my_value" />
      </van-cell-group>

      <GoodsInfo :content='dataList.goods'></GoodsInfo>

      <div class="pay-type">
        <van-cell v-if="dataList.order" title="支付方式" :value="dataList.order.paytype"></van-cell>
<!--        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell clickable @click="radio = '1'">
              <template #title>
                <span class="pay-icon"><img src="../../../static/image/mine/wechat_cion.png"></span>
                <span class="custom-title">微信支付</span>
              </template>
              <template #right-icon>
                <van-radio name="1">
                  <template #icon="props">
                    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                  </template>
                </van-radio>
              </template>
            </van-cell>
            <van-cell clickable @click="radio = '2'">
              <template #title>
                <span class="pay-icon"><img src="../../../static/image/mine/zhifubao_img.png"></span>
                <span class="custom-title">支付宝支付</span>
              </template>
              <template #right-icon>
                <van-radio name="2">
                  <template #icon="props">
                    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                  </template>
                </van-radio>
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group> -->
      </div>

      <div class="other">
        <van-cell-group>
          <van-cell v-if="dataList.order" title="快递费用" :value="dataList.order.postage=='0'?'免运费':'￥'+dataList.order.postage" value-class="orange-color"></van-cell>
          <van-cell v-if="dataList.order" title="需付款" :value="'￥'+dataList.order.money" value-class="orange-color"></van-cell>
          <van-field v-if="dataList.order" label="订单备注"  :value="dataList.order.other" readonly/>
        </van-cell-group>
      </div>
      <div class="bottom">
        <div class="btn"><img src="../../../static/image/mine/pay_img.png"></div>
        <div class="btn"><img src="../../../static/image/mine/cancel_img.png"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import GoodsInfo from '@/components/GoodsInfo'
  import {
    Toast
  } from 'vant';
  import {
    orderDetails
  } from '@/api/user.js'
  export default {
    data() {
      return {
        id:'',
        dataList:'',
        radio: '1',
        activeIcon: require('../../../static/image/mine/checked.png'),
        inactiveIcon: require('../../../static/image/mine/check.png'),
      }
    },
    components: {
      GoodsInfo
    },
    mounted() {
        this.id = this.$route.query.id;
        this.initData(this.$route.query.id)
    },
    methods: {
      // 请求数据
      initData(id) {
        const params = {
          uid: '2',
          order_id:id
        }
        orderDetails(params)
          .then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
    }
  }
</script>

<style lang="scss">
  .wait_pay {
    .van-cell-group {
      background-color: inherit;
    }

    .cell_top .van-cell {
      margin: 0.266666rem 0;
    }

    .my_title span,
    .my_name span {
      font-size: 18px;
      color: $black-color;
      font-weight: bold;
    }

    .my_name span {
      font-size: $font-size14;
    }

    .pay-icon {
      display: inline-block;
      vertical-align: text-top;
      width: 0.44rem;
      margin-right: 0.213333rem;

      img {
        width: 100%;
      }
    }

    .van-radio__icon {
      width: 0.346666rem;

      img {
        width: 100%;
      }
    }

    .pay-type {
      margin: 0.133333rem 0;
    }

    .orange-color {
      color: $gold-color;
    }

    .bottom {
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
