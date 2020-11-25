<template>
  <div class="address" @click="handleClick(content.id)">
		<div class="flex name">
			<div>{{content.name}}</div>
			<div>{{content.mobile}}</div>
		</div>
    <div class="flex area">
      <div>{{content.address}}</div>
      <div class="right_raw"><img src="../../static/image/mine/right_raw.png" alt=""></div>
    </div>
    <div class="checked" v-if="content.isChecked==true">
      <span class="checked_icon"><img src="../../static/image/mine/cheecked_.png" alt=""></span>
      <span class="checked_text">默认地址</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Address',
    props: {
      content: {
        type: Object,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleClick(value) {
        this.$emit('click', value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .address {
    background-color: $white-color;
    // @include flexbox;
    padding:0.32rem 0;
    border-radius: 0.133333rem;
    .name {
      font-size: $font-size14;
      color: $black-color;
      font-weight: bold;
      padding:0 0.32rem;
    }

    .checked_icon {
      display: inline-block;
      vertical-align: middle;
      height: 0.506666rem;
      width: 0.506666rem;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 0.186666rem;
      img{
        width: 100%;
      }
    }
    .right_raw{
       width: 0.16rem;
       img{
         width: 100%;
       }
    }
    .checked{
      padding:0 0.32rem;
      color: #000000;
      font-size: $font-size14;
      padding-top: 0.32rem;
      .checked_text{
        display: inline-block;
        vertical-align: middle;
      }
    }
    .area{
      color: #808080;
      padding: 0.32rem;
      border-bottom: 1px solid #f5f5f5;
    }
  }
</style>
