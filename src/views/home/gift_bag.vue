<template>
  <div class="gift_bag">
    <van-nav-bar fixed title="精品礼包"  z-index="99" left-arrow @click-left="onClickLeft" />
	<div>
		<img src="" alt="">
		<div class="fixed">
			<div class="btn"><img src="../../../static/image/home/exchange_img.png" alt=""></div>
			<div class="btn"><img src="../../../static/image/home/buy_img.png" alt=""></div>
		</div>
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
.gift_bag{
  .fixed{
    @include  flexbox()
    .btn{
      flex: 1;
      img{
        width: 100%;
      }
    }
  }
}
</style>
