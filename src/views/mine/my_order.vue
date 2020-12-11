<template>
  <div class="my_order">
    <!-- <van-nav-bar fixed title="订单管理" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <!-- 标签栏 -->
    <van-tabs v-model="active" color="#395467" swipe-threshold="6" sticky :offset-top="46" title-inactive-color="#282828"
      title-active-color="#3a576a" @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
        <GoodsItem v-for="(item,index) in dataList" :key="index" :content='item' @action="onAction" @detail="onDetail"></GoodsItem>
      </van-tab>
    </van-tabs>
    <div>
    </div>
  </div>
</template>

<script>
  import GoodsItem from '@/components/GoodsItem'
  // 请求接口
  import {
    myOrder,
    confirmReceipt,
    payRetnow,
    goPay
  } from '@/api/user.js'
  import {
    Dialog,Toast
  } from 'vant';
  export default {
    data() {
      return {
        active: 0,
        tabList: ['全部', '待付款', '待配送', '待签收', '已完成'],
        dataList: [],
      }
    },
    mounted() {
      this.active = this.$route.query.active;
      this.$route.query.active == 4 ? this.initData(6) : this.initData(this.$route.query.active - 1)

    },
    components: {
      GoodsItem
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      // 按钮操作
      onAction(type, id) {
        console.log(type, id)
        switch (type) {
          case "qxdd":
            this.cancelOrder(id)
            break;
          case "dfk":
            this.payType(id)
            break;
          case "qrsh":
            this.complateOrder(id)
            break;
          case "ckdd":
            // this.complateOrder(id)
            break;
          case "ckwl":
            // this.complateOrder(id)
            break;
          default:
            break;
        }
      },
      // 详情
      onDetail(value) {
        this.$router.push({
          path: '/goods_detail',
          query: {
            id: value
          }
        })
      },
      // 切换
      onTabs(e) {
        e == 4 ? this.initData(6) : this.initData(e - 1)
      },
      // 请求数据
      initData(type) {
        const params = {
          uid: '2',
          type: type
        }
        myOrder(params)
          .then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // 请求数据
      cancelOrder(oid) {
        const params = {
          uid: '2',
          order_id: oid
        }
        Dialog.confirm({
            title: '取消订单',
            message: '确认取消订单？',
          })
          .then(() => {
            orderCancel(params)
              .then((res) => {
                console.log(res)
                Toast(res.msg)
              })
              .catch((err) => {
                Toast(err.msg)
              })
          })
          .catch(() => {
            Toast('已取消')
          });

      },
      // 确认收货
      complateOrder(oid) {
        const params = {
          uid: '2',
          order_id: oid
        }
        Dialog.confirm({
            title: '确认收货',
            message: '确认收货？',
          })
          .then(() => {
            confirmReceipt(params)
              .then((res) => {
                console.log(res)
                Toast(res.msg)
              })
              .catch((err) => {
                Toast(err.msg)
              })
          })
          .catch(() => {
            Toast('已取消')
          });
      },
      // 判断支付方式
      payType(oid){
        let _this = this
        let params = {
          uid:'2',
          order_id:oid
        }
        payRetnow(params)
          .then((res) => {
            if(res.data==2){
               _this.wechatPay(oid)
            }
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      wechatPay(oid){
        const params = {
          uid: '2',
          order_id: oid
        }
        goPay(params)
          .then((res) => {
            console.log(res)

          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // 支付
      onBridgeReady(params) {
              let that = this
              const pay_params = params;
              WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                  "appId": pay_params.appId, //公众号名称，由商户传入
                  "timeStamp": pay_params.timeStamp, //时间戳，自1970年以来的秒数
                  "nonceStr": pay_params.nonceStr, //随机串
                  "package": pay_params.package,
                  "signType": pay_params.signType, //微信签名方式：
                  "paySign": pay_params.paySign //微信签名
                },
                function (res) {
                  if (res.err_msg == "get_brand_wcpay_request:ok") {
                    vant.Toast.success('支付成功');
                    setTimeout(() => {
                      window.location.assign(`./order.html?current=1`)
                    }, 1000)
                  } else {
                    vant.Toast('取消支付')
                  }
                });
            },
    }
  }
</script>

<style lang="scss">
  .my_order {}
</style>
