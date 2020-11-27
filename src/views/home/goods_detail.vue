<template>
  <div class="goods_detail">
    <van-nav-bar fixed title="商品详情" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <div class="banner">
        <van-swipe @change="onChange">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/4
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="content">
        <div class="descript">
          <div class="price">￥666</div>
          <h3 class="title">巴拉巴拉</h3>
          <div class="parameter">
            <div>商品数量：324</div>
            <div>运费：免运费</div>
            <div>规格：10/盒</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        current: 0,
      }
    },
    components: {

    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onChange(index) {
        this.current = index;
      },
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
      .price{
        font-size: 20px;
        font-weight: bold;
        color: $gold-color;
      }
      .title{
          padding: 0.32rem 0;
      }
      .parameter {
        @include flexbox();
        color:$grey-color;
      }
    }
  }
</style>
