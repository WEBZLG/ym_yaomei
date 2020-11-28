<template>
  <div class="goods" @click="handleClick(content.id)">
      <div class="goods_item">
        <div class="goods_img"><img :src="content.thumb" alt=""></div>
        <div class="price">￥{{content.money}}</div>
        <div class="descript">{{content.name}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Caption',
    props: {
      content: {
        type: Object,
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
       height: 3.306666rem;

        img {
          width: 100%;
          height: 100%;
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
