<template>
  <div class="dynamic">
    <!-- 标签栏 -->
    <!-- <van-tabs type="card" color="#395467"  sticky title-inactive-color="#282828" title-active-color="#3a576a" @click="onTabs"> -->
    <van-tabs color="#395467" sticky @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
        <template #title>
          <div class="s_icon">
            <img :src="activeIndex==index?icon_active:icon" alt="">
          </div>
          {{item}}
        </template>
        <!-- 列表 -->
        <div class="container">
          <div class="dy_video">
            <div class="flex">
              <div class="flex_a">
                <div class="head"><img src="" alt=""></div>
                <div>
                  <h3>官方作者</h3>
                  <p>#5G播商#</p>
                </div>
              </div>
              <div>4次分享</div>
            </div>
            <div>
              <video src=""></video>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

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
        tabList: ['全部', '直播', '未来'],
        activeIndex: 0,
        icon: require('../../../static/image/dynamic/icon3.png'),
        icon_active: require('../../../static/image/dynamic/icon3_a.png')
      }
    },
    components: {

    },
    methods: {
      onTabs(e) {
        console.log(e)
        this.activeIndex = e
      },
    }
  }
</script>

<style lang="scss">
  .dynamic {
    .flex{
      @include  flexbox()
    }
    .flex_a{
      @include  flexbox($jc:'')
    }
    .head{
      height: 1.333333rem;
      width: 1.333333rem;
      border-radius: 50%;
      overflow: hidden;
    }

    .s_icon {
      width: 0.266666rem;
      display: inline-block;
      vertical-align: middle;

      img {
        width: 100%;
      }
    }

    .van-tabs__line {
      display: none;
    }

    .van-tab {
      flex: none;

      .van-tab__text {
        display: inline-block;
        background-color: #cccccc;
        border-radius: 0.533333rem;
        height: 0.533333rem;
        line-height: 0.48rem;
        padding: 0 0.266666rem;
      }
    }

    .van-tab--active .van-tab__text {
      color: $white-color;
      background-color: #395467;
    }

  }
</style>
