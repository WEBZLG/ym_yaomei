<template>
  <div class="wait_pay">
    <!-- <van-nav-bar fixed title="待付款" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <van-cell-group class="cell_top">
        <van-cell title="待付款" :border="false" label="2020-11-24 11:11" title-class="my_title" value-class="my_value" />
        <van-cell title="张阿森纳 18888888888" :border="false" label="黑龙江哈尔滨" title-class="my_name" value-class="my_value" />
      </van-cell-group>

      <GoodsInfo :content='content'></GoodsInfo>

      <div class="pay-type">
      	<van-radio-group v-model="radio">
      		<van-cell-group>
      			<van-cell clickable @click="radio = '1'">
      				<!-- 使用 title 插槽来自定义标题 -->
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
      				<!-- 使用 title 插槽来自定义标题 -->
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
      	</van-radio-group>
      </div>

      <div class="other">
      	<van-cell-group>
      		<van-cell title="快递费用" :value="'￥'+dataList.post_money" value-class="orange-color"></van-cell>
      		<van-cell title="需付款" :value="'￥'+dataList.total_money" value-class="orange-color"></van-cell>
      		<van-field v-model="mark" label="订单备注" placeholder="选填,请先和商家协商" />
      	</van-cell-group>
      </div>
      <div class="bottom">
      	<div class="btn" ><img src="../../../static/image/mine/pay_img.png"></div>
      	<div class="btn" ><img src="../../../static/image/mine/cancel_img.png"></div>
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
        radio:'1',
        mark:'',
        activeIcon: require('../../../static/image/mine/checked.png'),
        inactiveIcon:require('../../../static/image/mine/check.png'),
        dataList:{
          post_money:'123',
          total_money:'321'
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
    .pay-icon{
      display: inline-block;
      vertical-align: text-top;
      width: 0.44rem;
      margin-right: 0.213333rem;
      img{
        width: 100%;
      }
    }
    .van-radio__icon{
      width: 0.346666rem;
      img{
        width: 100%;
      }
    }
    .pay-type{
      margin: 0.133333rem 0;
    }
    .orange-color{
      color: $gold-color;
    }
    .bottom{
      @include flexbox($jc:'',$fd:row-reverse);
      padding: 0.16rem 0.32rem;
      background-color: $white-color;
      margin: 0.133333rem 0;
      .btn{
        width:2.56rem;
        margin-left: 0.32rem;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
