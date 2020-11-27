<template>
  <div class="goods_apply">
    <van-nav-bar fixed title="补货申请" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <GoodsApply :content="content" @onclick="onApply"></GoodsApply>
      <GoodsApply :content="content" @onclick="onApply"></GoodsApply>
    </div>
  </div>
</template>

<script>
  import GoodsApply from '@/components/GoodsApply'
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
          size_name: '10g/片',
          buy_num: '66'
        },
      }
    },
    components: {
      GoodsApply
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onApply(){
        console.log(12)
        this.$router.push('/goods_apply_submit')
      }
    }
  }
</script>

<style lang="scss">

</style>
