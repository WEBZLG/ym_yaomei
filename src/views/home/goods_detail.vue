<template>
  <div class="goods_detail">
    <!-- <van-nav-bar fixed title="商品详情" z-index="99" left-arrow @click-left="onClickLeft" /> -->
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
        <van-image width="133" height="133" lazy-load :src="goodsData.thumb_square" />
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
      <div>
        <BtnImg :src="src" @onclick="onSubmit"></BtnImg>
      </div>
    </van-popup>
    <!-- 兑换 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="img_icon">
          <img src="../../../static/image/mine/cdk_img.png" alt="">
        </div>
        <div>当前库存不足</div>
        <div class="btn_box">
          <div class="btn" @click="onApply(goodsData.id)">
            <img src="../../../static/image/home/apply_btn.png" alt="">
          </div>
          <div class="btn" @click="onBuy(goodsData.id)">
            <img src="../../../static/image/home/buy_btn.png" alt="">
          </div>
        </div>
      </div>
    </van-overlay>

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
        show: false,
        current: 0,
        goodsData: '',
        totalLength: 0,
        popShow: false,
        number: 1
      }
    },
    mounted() {
      let id = this.$route.query.id
      this.initData(id)
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
      onShow() {
        this.popShow = true
      },
      onSubmit() {
        if (this.goodsData.userstock == 0) {
          this.popShow = false
          this.show = true
        }
        else this.$router.push({path:'/order_submit',query:{params:this.goodsData,number:this.number}});
      },
      onApply(e){
        this.$router.push({path:'/goods_apply_submit',query:{id:e}})
      },
      onBuy(){
        this.$router.push({path:'/order_submit',query:{params:this.goodsData,number:this.number}});
      },
      initData(id) {
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

    .wrapper {
      background-color: $white-color;
      border-radius: 0.266666rem;
      width: 6.613333rem;
      margin: 0 auto;
      text-align: center;
      position: relative;
      top: 50%;
      margin-top: -107px;
      img {
          width: 100%;
        }
      .img_icon {
        width: 3.013333rem;
        margin: 0 auto;
        padding-top: 20px;
      }
      .btn_box{
        @include  flexbox();
        margin:  0.32rem;
      }
      .btn {
        width: 3.013333rem;
        margin: 0 auto;
      }
    }
  }
</style>
