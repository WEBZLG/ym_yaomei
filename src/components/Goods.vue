<template>
  <div class="goods" @click="handleClick">
      <div class="goods_item">
        <div class="goods_img"><img src="../../static/image/mine/cdkey_bg.png" alt=""></div>
        <div class="price">￥888</div>
        <div class="descript">【补水紧致亮白】巴拉巴拉一大堆</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Caption',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleClick(value) {
        this.$emit('onclick', value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goods {
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
</style>
