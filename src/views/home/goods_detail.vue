<template>
  <div class="goods_detail">
    <van-nav-bar fixed title="商品详情" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <div class="banner">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(item,index) in goodsData.pics"><img :src="item" alt=""></van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/{{totalLength}}
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="content">
        <div class="descript">
          <div class="price">￥{{goodsData.money}}</div>
          <h3 class="title">{{goodsData.name}}</h3>
          <div class="parameter">
            <div>商品数量：{{goodsData.stock}}</div>
            <div>运费：{{goodsData.post_money=="0"?"免运费":goodsData.post_money}}</div>
            <div>规格：{{goodsData.defaultsize}}</div>
          </div>
        </div>
        <div class="content_title">— 商品详情 —</div>
        <div class="content_detail" v-html="goodsData.body"></div>
        <div class="fixed" v-show="!popShow">
          <BtnImg :src="src" @onclick="onShow"></BtnImg>
        </div>
      </div>
    </div>
    <!-- 购买弹出 -->
    <van-popup v-model="popShow" closeable position="bottom" :style="{ height: '40%' }">
      <div class="pop_flex">
        <van-image width="133" height="133" lazy-load :src="goodsData.thumb" />
        <div class="pop_content">
          <h3 class="pop_title">{{goodsData.name}}</h3>
          <div class="price">￥{{goodsData.money}}</div>
          <div class="pop_num">
            <div>购买数量：</div>
            <van-stepper v-model="number" :min="goodsData.siglebuyleast" :max="goodsData.siglebuymax" />
          </div>
          <div>库存数量：{{goodsData.stock}}</div>
        </div>
      </div>
        <div><BtnImg :src="src"></BtnImg></div>
    </van-popup>
  </div>
</template>

<script>
  import BtnImg from '@/components/BtnImg'
  // 请求接口
  import {
    goodsInfo
  } from '@/api/user.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        src: require('../../../static/image/home/buy_now.png'),
        current: 0,
        goodsData: '',
        totalLength: 0,
        popShow: false,
        number:1
      }
    },
    mounted() {
      let id = this.$route.query.id
      this.getData(id)
    },
    components: {
      BtnImg
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onChange(index) {
        this.current = index;
      },
      onShow(){
        this.popShow = true
      },
      getData(id) {
        let param = {
          uid: "2",
          goods_id: id
        }
        goodsInfo(param).then((res) => {
            console.log(res)
            this.goodsData = res.data
            this.totalLength = res.data.pics.length
          })
          .catch((err) => {
            Toast(err.msg)
          })
      }
    }
  }
</script>

<style lang="scss">
  .goods_detail {
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      height: 0.48rem;
      line-height: 0.48rem;
      color: $white-color;
      border-radius: 0.48rem;
      background: rgba(0, 0, 0, 0.1);
    }

    .van-swipe {
      height: 8rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .descript {
      margin: 0.32rem;

      .price {
        font-size: 20px;
        font-weight: bold;
        color: $gold-color;
      }

      .title {
        padding: 0.32rem 0;
      }

      .parameter {
        @include flexbox();
        color: $grey-color;
      }
    }

    .content_title {
      text-align: center;
      font-weight: bold;
      font-size: $font-size14;
    }

    .pop_flex {
      @include flexbox($jc: '', $ai:top);
      padding: 1.066666rem 0.32rem 0.373333rem;
      .pop_content {
        flex: 1;
        margin-left: 0.32rem;

        .pop_title {
          font-size: 16px;
          min-height: 1.12rem;
          @include textoverflow($clamp: 2)
        }

        .price {
          font-size: 20px;
          font-weight: bold;
          color: $gold-color;
        }

        .title {
          padding: 0.32rem 0;
        }

        .pop_num {
          @include flexbox();
          margin: 0.266666rem 0;
        }
      }
    }
  }
</style>
