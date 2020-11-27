<template>
  <div class="upgrade">
    <van-nav-bar fixed title="在线升级"  z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <div class="menu_img"><img src="../../../static/image/mine/jingxiaoshang.png" alt=""></div>
      <div class="menu_img"><img src="../../../static/image/mine/dailishang.png" alt=""></div>
      <div class="menu_img"><img src="../../../static/image/mine/hehuoren.png" alt=""></div>
    </div>
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
.upgrade{
  padding: 0.32rem;
  .menu_img{
    margin-bottom: 0.266666rem;
    img{
      width: 100%;
    }
  }
}
</style>
