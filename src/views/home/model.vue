<template>
  <div class="">
    <van-nav-bar fixed title="消息"  z-index="99" left-arrow @click-left="onClickLeft" />

  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
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
