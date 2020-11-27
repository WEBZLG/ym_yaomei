<template>
  <div class="goods_list">
    <van-nav-bar fixed title="商品列表" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <Goods></Goods>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/Goods'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {

      }
    },
    components: {
      Goods
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="scss">

</style>
