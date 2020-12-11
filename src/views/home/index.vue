<!-- home -->
<template>
  <div class="home">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
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
    </van-list>
    </van-pull-refresh>
    <div class="loading_box"  v-if="show_loading">
      <van-loading type="spinner"/>
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
        bannerData: '',
        indexData: [],
        page: 1,
        loading: false,
        show_loading:true,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },

    components: {
      Caption,
      Goods
    },
    mounted() {
      this.getBanner();
    },

    methods: {
      onGift() {
        this.$router.push('/gift_bag')
      },
      onDetail(value) {
        console.log(value)
        this.$router.push({
          path: '/goods_detail',
          query: {
            id: value
          }
        })
      },
      onView() {
        this.$router.push('/goods_list')
      },
      // 轮播
      getBanner() {
        getBanner().then((res) => {
            console.log(res)
            this.bannerData = res.data
            this.show_loading = false;
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // 首页商品
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page
        }
        yaomeiIndex(params)
          .then((res) => {
            console.log(res)
            if (this.refreshing) {
              this.indexData = [];
              this.refreshing = false;
            }
            if (res.data.length > 0) {
              for (let item of res.data) {
                this.indexData.push(item)
              }
              this.page++
            } else {
              this.finished = true
            }
            if (this.indexData.length > 0) {
              this.finishedText = '没有更多了'
            } else {
              this.finishedText = ''
            }
            this.loading = false;
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      onRefresh() {
        this.page = 1
        // this.indexData = [];
        this.finished = false;
        this.loading = true;
        this.initData();
      },
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

      .goods_item {
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
