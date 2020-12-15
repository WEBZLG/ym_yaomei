<template>
  <div class="my_dynamic">
    <div class="dynamic_tabs">
      <van-tabs v-model="active" title-inactive-color="#282828" color="#395467" line-width="40">
        <van-tab title="我的收藏">
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
                  <DyVideo></DyVideo>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </van-tab>
        <van-tab title="我的动态">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import DyVideo from '@/components/DyVideo'
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
        active: 0,
        tabList: ['全部', '直播', '未来'],
        activeIndex: 0,
        icon: require('../../../static/image/dynamic/icon3.png'),
        icon_active: require('../../../static/image/dynamic/icon3_a.png')
      }
    },
    components: {
      DyVideo
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
  .dynamic_tabs {
    >.van-tab:first-child::after {
      content: "";
      border-right: 1px solid #c8c9cc;
      position: absolute;
      right: 0;
      height: 22px;
      top: 12px;

    }
    .dynamic {
      .flex {
        @include flexbox()
      }

      .flex_a {
        @include flexbox($jc: '')
      }

      .head {
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
  }
</style>
