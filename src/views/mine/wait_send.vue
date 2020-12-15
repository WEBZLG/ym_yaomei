<template>
  <div class="wait_send">
    <!-- <van-nav-bar fixed title="待配送" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <van-cell-group class="cell_top">
        <van-cell title="待配送" :border="false" title-class="my_title" value-class="my_value">
          <template #label v-if="dataList.order">
            <div>订单编号：{{dataList.order.order_id}}</div>
            <div>下单时间：{{dataList.order.paytime}}</div>
          </template>
        </van-cell>
        <van-cell v-if="dataList.address" :title="dataList.address.shouhuo_name+' '+ dataList.address.shouhuo_mobile" :border="false" :label="dataList.address.address" title-class="my_name" value-class="my_value" />
      </van-cell-group>

      <GoodsInfo :content='dataList.goods'></GoodsInfo>

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
        dataList:'',
        activeIcon: require('../../../static/image/mine/checked.png'),
        inactiveIcon: require('../../../static/image/mine/check.png'),
      }
    },
    components: {
      GoodsInfo
    },
    mounted() {
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
  .wait_send {
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

    .orange-color {
      color: $gold-color;
    }
    .pay-type{
      color: $black-color;
      .pay_icon{
        width: 0.44rem;
        margin-right: 0.186666rem;
        display: inline-block;
        vertical-align: text-top;
        img{
          width: 100%;
        }
      }
    }

  }
</style>
