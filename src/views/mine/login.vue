<template>
  <div class="">
	<div>
		
	</div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    seeReferrer
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
