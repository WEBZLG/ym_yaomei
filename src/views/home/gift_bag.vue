<template>
  <div class="gift_bag">
    <van-nav-bar fixed title="精品礼包" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <div class="back">
        <img :src="dataList.backimg" alt="">
      </div>
      <div class="fixed">
        <div class="btn" @click="popShow"><img src="../../../static/image/home/exchange_img.png" alt=""></div>
        <div class="btn"><img src="../../../static/image/home/buy_img.png" alt=""></div>
      </div>
    </div>
    <!-- 兑换 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="img_icon">
          <img src="../../../static/image/mine/cdk_img.png" alt="">
        </div>
        <div>礼包码兑换</div>
        <div>
          <van-field v-model="value" placeholder="请输入兑换码" />
        </div>
        <div class="exchange_btn">
          <img src="../../../static/image/mine/duihuan.png" alt="">
        </div>
      </div>
    </van-overlay>

  </div>
</template>

<script>
  // 请求接口
  import {
    giftIndex
  } from '@/api/user.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        dataList: '',
        show: false,
        value: ''
      }
    },
    components: {

    },
    mounted() {
      this.initData()
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      initData(id) {
        let param = {
          uid: "2",
        }
        giftIndex(param).then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      popShow() {
        this.show = true
      }

    }
  }
</script>

<style lang="scss">
  .gift_bag {
    .back {
      img {
        width: 100%;
      }
    }

    .fixed {
      @include flexbox();
      bottom: 0.4rem;

      .btn {
        flex: 1;

        img {
          width: 100%;
        }
      }
    }

    .wrapper {
      background-color: $white-color;
      border-radius: 0.266666rem;
      width: 6.613333rem;
      margin: 0 auto;
      text-align: center;
      .img_icon {
        width: 3.013333rem;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }

      .exchange_btn {
        width: 4rem;
        margin: 0 auto;
        img {
          width: 100%; 
        }
      }
    }
  }
</style>
