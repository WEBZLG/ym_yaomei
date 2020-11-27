<!-- home -->
<template>
  <div class="home">
    <van-nav-bar fixed title="首页" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="gift_img" @click="onGift"><img src="../../../static/image/home/gift_img.png" alt=""></div>
      <Caption content='代理商品' @click="onView"></Caption>
      <div class="goods_list">
        <Goods @onclick="onDetail"></Goods>
      </div>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/Goods'
  import Caption from '@/components/Caption'
  export default {
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
        ],
      }
    },

    components: {
      Caption,
      Goods
    },
    mounted() {},

    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onGift(){
        this.$router.push('/gift_bag')
      },
      onDetail(){
        console.log(123)
        this.$router.push('/goods_detail')
      },
      onView(){

      }
    }
  }
</script>
<style lang="scss">
  .home {
    .van-swipe {
      height: 4rem;
      border-radius: 0.266666rem;
      overflow: hidden;
      margin: 0.266666rem 0.32rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .van-swipe__indicator {
      height: 0;
      width: 0.32rem;
      background-color: $white-color;
      border-bottom: 2px solid $white-color;
    }

    .van-swipe__indicator--active {
      height: 0;
      width: 0.32rem;
      background-color: $main-color;
      border-bottom: 2px solid $main-color;
    }

    .gift_img {
      min-height: 1.933333rem;
      margin: 0 0.4rem;

      img {
        width: 100%;
      }
    }

    .goods_list {
      margin: 0 0.32rem;

      .goods_img {
        min-height: 3.306666rem;

        img {
          width: 100%;
        }
      }
      .goods_item{
        margin-bottom: 0.4rem;
      }
      .price {
        font-size: 20px;
        font-weight: bold;
        color: $gold-color;
      }

      .descript {
        font-size: 16px;
        color: $black-color;
      }
    }
  }
</style>
