<template>
  <div class="complate">
    <div>
      <van-cell-group class="cell_top">
        <van-cell title="已完成" :border="false" label="2020-11-24 11:11" title-class="my_title" value-class="my_value" />
        <van-cell title="快递公司：申通快递" :border="false" label="快递单号:234567890" title-class="my_name" value-class="my_value">
          <template #default>
            <div class="copy_btn">
              <img src="../../../static/image/mine/copy_img.png" alt="">
            </div>
          </template>
        </van-cell>
        <van-cell v-if="dataList.address" :title="dataList.address.shouhuo_name+' '+ dataList.address.shouhuo_mobile" :border="false" :label="dataList.address.address" title-class="my_name" value-class="my_value" />
      </van-cell-group>

      <GoodsInfo  :content='dataList.goods'></GoodsInfo>

      <div class="other">
        <van-cell-group>
          <van-cell title="支付类型">
            <template #default>
              <div class="pay-type">
                <span class="pay_icon"><img src="../../../static/image/mine/wechat_img.png" alt=""></span>
                <span>微信支付</span>
              </div>
              <!-- <div class="pay-type">
                <span class="pay_icon"><img src="../../../static/image/mine/zhifubao_img.png" alt=""></span>
                <span>支付宝支付</span>
              </div> -->
            </template>
          </van-cell>
          <van-cell v-if="dataList.order" title="快递费用" :value="dataList.order.postage=='0'?'免运费':'￥'+dataList.order.postage" value-class="orange-color"></van-cell>
          <van-cell v-if="dataList.order" title="需付款" :value="'￥'+dataList.order.money" value-class="orange-color"></van-cell>
          <van-field v-if="dataList.order" label="订单备注"  :value="dataList.order.other" readonly/>
        </van-cell-group>
      </div>
      <div class="bottom">
        <div class="btn"><img src="../../../static/image/mine/shouhuo_img.png"></div>
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
        radio: '1',
        activeIcon: require('../../../static/image/mine/checked.png'),
        inactiveIcon: require('../../../static/image/mine/check.png'),
      }
    },
    mounted() {
      this.initData(this.$route.query.id)
    },
    components: {
      GoodsInfo
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
  .complate {
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


    .copy_btn {
      display: inline-block;
      width: 2.56rem;
      margin-left: 0.32rem;
      margin-top: 0.133333rem;

      img {
        width: 100%;
      }
    }

    .pay-type {
      color: $black-color;

      .pay_icon {
        width: 0.44rem;
        margin-right: 0.186666rem;
        display: inline-block;
        vertical-align: text-top;

        img {
          width: 100%;
        }
      }
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
