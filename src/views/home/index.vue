<!-- home -->
<template>
  <div class="home">
    <van-nav-bar fixed title="首页" z-index="99" />
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerData.banner" :key="index">
          <img v-lazy="item.thumb" />
        </van-swipe-item>
      </van-swipe>
      <div class="gift_img" @click="onGift"><img :src="bannerData.giftimg" alt=""></div>
      <Caption :content='bannerData.categoryname' @click="onView"></Caption>
      <div class="goods_list">
        <Goods v-for="(item,index) in indexData" :key="index" :content="item" @onclick="onDetail"></Goods>
      </div>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/Goods'
  import Caption from '@/components/Caption'
  // 请求接口
  import {
    getBanner,
    yaomeiIndex,
    goodsInfo
  } from '@/api/user.js'
import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        bannerData:'',
        indexData:''
      }
    },

    components: {
      Caption,
      Goods
    },
    mounted() {
      this.getBanner();
      this.getIndex();
    },

    methods: {
      onGift(){
        this.$router.push('/gift_bag')
      },
      onDetail(value){
        console.log(value)
        this.$router.push({
            path: '/goods_detail',
            query: {
              id: value
            }
          })
      },
      onView(){

      },
      // 轮播
      getBanner(){
        getBanner().then((res) => {
            console.log(res)
            this.bannerData = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // 首页商品
      getIndex(){
        yaomeiIndex().then((res) => {
            console.log(res)
            this.indexData = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
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
