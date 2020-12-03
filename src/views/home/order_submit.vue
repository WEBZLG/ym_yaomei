<template>
  <div class="">
    <van-nav-bar fixed title="确认订单" z-index="99" left-arrow @click-left="onClickLeft" />
    <div class="order_submit">
      <div class="address">
        <van-cell title-class="cell-title" v-if="addressList =='暂无收货地址'" :title="addressList" center size="large" is-link
          @click="onAddress" />
        <van-cell title-class="cell-title" v-if="addressList !=='暂无收货地址'" :title="addressList.name+' '+addressList.mobile" center
          size="large" :label="addressList.region+addressList.city+addressList.xian+addressList.address" is-link @click="onAddress" />
      </div>
      <div class="goods">
        <div class="pic">
          <img :src="dataList.thumb">
        </div>
        <div class="description">
          <h3 class="tilte">{{dataList.name}}</h3>
          <div class="price"><span>￥{{dataList.money}}</span></div>
          <div class="specs">规格：<span>{{dataList.defaultsize}}</span></div>
          <div class="number">数量：<span>{{number}}</span></div>
        </div>
      </div>
      <div class="pay-type">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell clickable @click="radio = '1'">
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="pay-icon"><img src="../../../static/image/home/wechat.png"></span>
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
                <span class="pay-icon"><img src="../../../static/image/home/zhifubao.png"></span>
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
      <div class="pay-type">
        <van-cell value="库存充足,扣除相应商品库存,无需支付"></van-cell>
      </div>
      <div class="other">
        <van-cell-group>
          <van-cell title="快递费用" :value="'￥'+dataList.post_money" value-class="orange-color"></van-cell>
          <van-cell title="需付款" :value="'￥'+dataList.money" value-class="orange-color"></van-cell>
          <van-field v-model="mark" label="订单备注" placeholder="选填,请先和商家协商" />
        </van-cell-group>
      </div>
      <div class="bottom">
        <div class="total">总价：<span class="red-color">￥{{dataList.money}}</span></div>
        <div class="btn" @click="payfor"><img src="../../../static/image/home/goPay.png"></div>
        <!-- <div class="btn"><img src="../../../static/image/home/goOrder.png" @click="onPopShow"></div> -->
      </div>
      <!-- 消耗库存弹出 -->
      <van-overlay :show="popShow" z-index='2' @click="popShow = false">
        <div class="cofirm" @click.stop>
          <div class="confirm-title">确认扣除商品库存下单？</div>
          <div class="confirm-btn-box">
            <div class="confirm-btn" @click="popShow = false"><img src="../../../static/image/home/cancel.png"></div>
            <div class="confirm-btn" @click="onStock"><img src="../../../static/image/home/sure.png"></div>
          </div>
        </div>
      </van-overlay>
      <!-- loading -->
      <van-loading v-show='isShow' />
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    myAddress
  } from '@/api/user.js'
  export default {
    data() {
      return {
        addressList: '暂无收货地址',
        dataList: '',
        number:1,
        radio: '1',//支付方式
        mark: '',//备注
        popShow: false,//库存弹出
        isShow: false,//loading
        activeIcon: require('../../../static/image/home/radio2.png'),//支付单选样式
        inactiveIcon: require('../../../static/image/home/radio1.png'),//支付单选样式
      }
    },
    components: {

    },
    mounted() {
      this.dataList = this.$route.query.params;
      this.number = this.$route.query.number;
      let chooseAddress = this.$storage.get('chooseAddress')
      console.log('-----')
      console.log(chooseAddress)
      if(chooseAddress) {
        this.addressList = chooseAddress;
        // this.$storage.remove('chooseAddress')
      }else{
        this.initData();
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      // 消耗库存弹出
      onPopShow() {
      	this.popShow = true
      },
      // 选择地址交互
      onAddress() {
      	this.$router.push({path:'/address',query:{type:'order'}})
      },
      // 弹出确认
      onStock() {
      	console.log(3333)
      },
      payfor(){

      },
      // 请求数据
      initData() {
        const params = {
          uid: '2'
        }
        myAddress(params)
          .then((res) => {
            if(res.data.length>0) this.addressList = res.data[0];
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
    }
  }
</script>

<style lang="scss">
  .order_submit {
    .address {
      margin: 0.266666rem 0;
    }

    .pic {
      height: 2.666666rem;
      width: 2.666666rem;
      margin-right: 0.32rem;
    }

    .description {
      flex: 1;
    }


    .pic img,
    .pay-icon img,
    .btn img {
      height: 100%;
      width: 100%;
    }

    .goods {
      font-size: 14px;
      line-height: 22px;
      display: flex;
      background-color: #ffffff;
      padding: 0.266666rem 0.32rem;
    }

    .pay-type {
      margin: 0.133333rem 0;
    }

    .bottom {
      font-size: 14px;
      height: 1.2rem;
      line-height: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 0.32rem;
      background-color: #ffffff;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      font-weight: bold;
    }

    .red-color {
      color: #ff0000;
    }

    .orange-color {
      color: #f6c693;
      font-weight: bold;
    }

    .img-icon {
      height: 20px;
    }

    .pay-icon {
      height: 0.426666rem;
      width: 0.426666rem;
      display: inline-block;
      vertical-align: text-top;
    }

    .btn {
      width: 4.16rem;
      height: 1.2rem;
    }

    .cell-title span {
      font-weight: bold;
    }

    .tilte {
      font-weight: bold;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: 1.066666rem;
    }

    .van-loading {
      text-align: center;
      margin-top: 50%;
    }

    .cofirm {
      background-color: #ffffff;
      border-radius: 10px;
      height: 3.6rem;
      width: 6.613333rem;
      margin: -1.8rem auto 0;
      position: relative;
      top: 50%;
      box-sizing: border-box;
      padding: 0 0.533333rem;
    }

    .confirm-btn-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .confirm-btn {
      width: 2.8rem;
    }

    .confirm-btn img {
      width: 100%;
    }

    .confirm-title {
      font-size: 14px;
      color: #000000;
      text-align: center;
      padding: 0.96rem 0 0.64rem;
    }
  }
</style>
