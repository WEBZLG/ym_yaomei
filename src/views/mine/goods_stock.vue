<template>
  <div class="goods_stock">
    <van-nav-bar fixed title="商品库存" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <GoodsInfo :content="content" @onclick="onStock"></GoodsInfo>
    </div>
  </div>
</template>

<script>
  import GoodsInfo from '@/components/GoodsInfo'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        content: {
          name: '测试案例测试案例测试案例测试案例测试案例测试案例测试案例',
          thumb: "https://img.yzcdn.cn/vant/cat.jpeg",
          money: "88.00",
          stock:'33'
        },
      }
    },
    components: {
      GoodsInfo
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onStock(){
        console.log(12)
        // this.$router.push('/goods_apply_submit')
      }
    }
  }
</script>

<style lang="scss">

</style>
