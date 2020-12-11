<template>
  <div class="my_stock">
    <!-- <van-nav-bar fixed title="我的库存"  z-index="99"  left-arrow @click-left="onClickLeft" /> -->
    <div class="white_bg">
      <div class="icon_nav">
        <div @click="onStock">
          <div class="icon_nav1"><img src="../../../static/image/mine/stock_icon.png" alt=""></div>
          <div>商品库存</div>
        </div>
        <div @click="onApply">
          <div class="icon_nav2"><img src="../../../static/image/mine/apply_icon.png" alt=""></div>
          <div>补货申请</div>
        </div>
        <div @click="onReplenish">
          <div class="icon_nav3"><img src="../../../static/image/mine/buhuo_icon.png" alt=""></div>
          <div>补货记录</div>
        </div>
      </div>
      <div class="code_box">
        <div class="flex">
          <div class="code_icon"><img src="../../../static/image/mine/code_icon.png" alt=""></div>
          <div class="code_text">我的兑换码</div>
        </div>
        <div class="view_btn" @click="onView">
          <img src="../../../static/image/mine/view_icon.png" alt="">
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <Caption content="出货记录" @click="onMore"></Caption>
    <div class="list">
        <div class="list_item" v-for="(item,index) in dataList" :key="index">
          <div class="head"><img :src="item.avatar" alt=""></div>
          <div class="content">
              <div>用户昵称：{{item.nickname}}</div>
              <div>商品名称：{{item.goodsname}}</div>
              <div>出货数量：{{item.sender}}</div>
              <div>出货状态：{{item.statusname}}</div>
              <div>申请时间：{{item.createtime}}</div>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
  import Caption from '@/components/Caption'
  // 请求接口
  import {
    shipmentListhome
  } from '@/api/user.js'
  export default {
    data() {
      return {
        tabList: ['订单消息', '晋级消息', '返润消息', '系统消息'],
        dataList:[]
      }
    },
    mounted() {
        this.initData()
    },
    methods: {
      onMore() {
        this.$router.push('/shipment_list')
      },
      onClickLeft(){
        this.$router.go(-1)
      },
      onApply(){
         this.$router.push('/goods_apply')
      },
      onReplenish(){
        this.$router.push('/replenish_list')
      },
      onStock(){
         this.$router.push('/goods_stock')
      },
      onView(){
        this.$router.push('/my_cdkey')
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2'
        }
        shipmentListhome(params)
          .then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },


    },
    components: {
      Caption
    },

  }
</script>

<style lang="scss">
  .my_stock {
    img {
      height: 100%;
      width: 100%;
    }

    .white_bg {
      padding-top: 0.32rem;
      background-color: $white-color;
    }

    .icon_nav {
      background: url(../../../static/image/mine/stock_bg.png) no-repeat center;
      background-size: cover;
      color: #666666;
      text-align: center;
      @include flexbox($jc: space-between);
	  padding: 0.8rem 0.533333rem;
      margin: 0 0.186666rem 0.48rem;
    }

    .icon_nav1 {
      height: 0.88rem;
      width: 0.933333rem;
    }

    .icon_nav2 {
      height: 0.8rem;
      width: 1.013333rem;
    }

    .icon_nav3 {
      width: 0.72rem;
      height: 0.8rem;
    }

    .icon_nav1,
    .icon_nav2,
    .icon_nav3 {
      margin: 0 auto 0.266666rem;
    }

    .code_box {
      height: 1.333333rem;
      background: url(../../../static/image/mine/code_bg.png) no-repeat center;
      background-size: cover;
      padding: 0 0.32rem 0 0.506666rem;

      @include flexbox($jc: '');
       .code_icon {
        height: 0.613333rem;
        width: 0.613333rem;
        margin-right: 0.346666rem;
      }

      .flex {
        @include flexbox($jc: '')
      }

      .code_text {
        font-size: $font-size14;
        color: #f2caa4;
      }

      .view_btn {
        height: 0.586666rem;
        width: 1.893333rem;
      }
    }
    .list{
      .list_item{
        @include flexbox($jc: '',$ai:'top')
        background-color:$white-color;
        padding: 0.4rem 0.32rem;
        margin-bottom: 0.4rem;
        .head{
          width: 1.413333rem;
          height: 1.413333rem;
          margin-right: 0.373333rem;
              border-radius: 50%;
              overflow: hidden;
        }
        .content{
          flex: 1;
          color: #000000;
          font-size: $font-size14;
          line-height: 0.586666rem;
        }
      }
    }
  }
</style>
