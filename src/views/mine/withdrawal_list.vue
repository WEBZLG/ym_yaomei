<template>
  <div class="withdrawal_list">
    <van-nav-bar fixed title="提现记录" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <van-cell-group>
        <van-cell title="-556元" :border="false" center value="提现方式：微信零钱" label="2020-11-24 11:11" title-class="my_title" value-class="my_value" />
        <van-cell title="-556元" :border="false" center value="提现方式：微信零钱" label="2020-11-24 11:11" title-class="my_title" value-class="my_value" />
      </van-cell-group>
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
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="scss">
  .withdrawal_list {
    .van-cell-group{
      background-color: inherit;
    }
    .my_title{
      font-size: 16px;
      color: $gold-color;
    }
    .my_value{
      color: #000000;
      font-size: $font-size14;
    }
    .van-cell--center{
      margin: 0.266666rem 0;
    }
  }
</style>
