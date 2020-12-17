<template>
  <div class="my_dynamic">
    <div class="dynamic_tabs">
      <van-tabs v-model="active" title-inactive-color="#282828" color="#395467" line-width="40">
        <van-tab v-for="(item,index) in navList" :key="index" :title="item">
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
                  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
                      <DyVideo :content="content"></DyVideo>
                    </van-list>
                  </van-pull-refresh>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </van-tab>
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
    collectList
  } from '@/api/user.js'
  export default {
    data() {
      return {
        active: 0,
        navList: ['我的收藏', '我的动态'],
        tabList: ['全部', '直播', '未来'],
        activeIndex: 0,
        icon: require('../../../static/image/dynamic/icon3.png'),
        icon_active: require('../../../static/image/dynamic/icon3_a.png'),
        page: 1,
        dluid: 1,
        cid:'',
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    components: {
      DyVideo
    },
    methods: {
      onTabs(e) {
        console.log(e)
        this.activeIndex = e
        this.onRefresh()
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page,
          dluid: this.dluid,
          category_id:this.cid
        }
        collectList(params)
          .then((res) => {
            console.log(res)
              if (this.refreshing) {
                this.dataList = [];
                this.refreshing = false;
              }
              if (res.data.length > 0) {
                for (let item of res.data) {
                  this.dataList.push(item)
                }
                this.page++
              } else {
                this.finished = true
              }
              if (this.dataList.length > 0) {
                this.finishedText = '没有更多了'
              }else{
                this.finishedText = ''
              }
              this.loading = false;
              // this.isDisable = false
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      onRefresh() {
        this.page = 1
        this.dataList = [];
        this.finished = false;
        this.loading = true;
        this.initData();
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
