<template>
  <div class="">
    <!-- <van-nav-bar fixed title="消息"  z-index="99" left-arrow @click-left="onClickLeft" /> -->

  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    goodsInfo
  } from '@/api/user.js'
  export default {
    data() {
      return {
        
      }
    },
    components:{
      
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
