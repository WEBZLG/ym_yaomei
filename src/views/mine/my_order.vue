<template>
  <div class="my_order">
    <van-nav-bar fixed title="订单管理" z-index="99" left-arrow @click-left="onClickLeft" />
    <!-- 标签栏 -->
    <van-tabs v-model="active" color="#395467" swipe-threshold="6" sticky title-inactive-color="#282828"
      title-active-color="#3a576a">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'></van-tab>
    </van-tabs>
    <div>
      <GoodsItem :content='content'></GoodsItem>
    </div>
  </div>
</template>

<script>
    import GoodsItem from '@/components/GoodsItem'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        active: 0,
        tabList: ['全部', '待付款', '待配送', '待签收', '已完成'],
        content: {
          name: '测试案例测试案例测试案例测试案例测试案例测试案例测试案例',
          thumb: "https://img.yzcdn.cn/vant/cat.jpeg",
          money: "88.00",
          size_name: '10g/片',
          buy_num: '66'
        },
      }
    },
    mounted() {
      this.active = this.$route.query.active
    },
    components:{
      GoodsItem
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="scss">
  .my_order {}
</style>
