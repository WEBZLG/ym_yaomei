<template>
  <div class="message">
    <van-nav-bar fixed title="消息"  z-index="99" left-arrow @click-left="onClickLeft" />
    <!-- 标签栏 -->
    <van-tabs color="#395467" sticky title-inactive-color="#282828" title-active-color="#3a576a">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'></van-tab>
    </van-tabs>
    <!-- 列表 -->
    <div class="container">
      <van-cell-group title="分组1">
        <van-cell title="单元格" label="描述信息" />
      </van-cell-group>
      <van-cell-group title="分组2">
        <van-cell title="单元格" label="描述信息" />
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
        tabList: ['订单消息', '晋级消息', '返润消息', '系统消息']
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
  .message {
    .van-tab--active {
      font-weight: bold;
    }

    .container {
      margin: 0.32rem;
    }

    .van-cell-group__title {
      text-align: center;
      color: $grey-color;
      margin-bottom: 0.32rem;
    }

    .van-cell {
      color: $font-color;
    }

    .van-cell__label {
      color: $grey-color;
    }
  }
</style>
