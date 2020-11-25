<template>
  <div class="btn_img" @click="handelExit">
		<img :src="src" alt="">
  </div>
</template>

<script>
  export default {
    name: 'FooterBtn',
    props: {

      src: {
        type:String,
        default:''
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handelExit(value){
        this.$emit('onclick',value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .btn_img {
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>
