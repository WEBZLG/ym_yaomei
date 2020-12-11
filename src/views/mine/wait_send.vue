<template>
  <div class="wait_send">
    <!-- <van-nav-bar fixed title="待配送" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <van-cell-group class="cell_top">
        <van-cell title="待配送" :border="false" title-class="my_title" value-class="my_value">
          <template #label>
            <div>订单编号：</div>
            <div>下单时间：</div>
          </template>
        </van-cell>
        <van-cell title="张阿森纳 18888888888" :border="false" label="黑龙江哈尔滨" title-class="my_name" value-class="my_value" />
      </van-cell-group>

      <GoodsInfo :content='content'></GoodsInfo>

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
          <van-cell title="快递费用" :value="'￥'+dataList.post_money" value-class="orange-color"></van-cell>
          <van-cell title="实付款" :value="'￥'+dataList.total_money" value-class="orange-color"></van-cell>
          <van-field v-model="mark" readonly label="订单备注" placeholder="选填,请先和商家协商" />
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
  export default {
    data() {
      return {
        content: {
          name: '测试案例测试案例测试案例测试案例测试案例测试案例测试案例',
          thumb: "https://img.yzcdn.cn/vant/cat.jpeg",
          money: "88.00",
          size_name: '10g/片',
          buy_num: '66'
        },
        radio: '1',
        mark: '',
        activeIcon: require('../../../static/image/mine/checked.png'),
        inactiveIcon: require('../../../static/image/mine/check.png'),
        dataList: {
          post_money: '123',
          total_money: '321'
        }
      }
    },
    components: {
      GoodsInfo
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
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
