<template>
  <div class="message">
    <!-- 标签栏 -->
    <van-tabs color="#395467" sticky title-inactive-color="#282828" title-active-color="#3a576a" @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
        <!-- 列表 -->
        <div class="container">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
              <van-cell-group :title="item.createtime" v-for="(item,index) in dataList">
                <van-cell :title="item.title" :label="item.content" />
              </van-cell-group>
            </van-list>
          </van-pull-refresh>
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
    userMessage
  } from '@/api/user.js'

  export default {
    data() {
      return {
        tabList: ['订单消息', '晋级消息', '返润消息', '系统消息'],
        page: 1,
        type: 1,
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    methods: {
      onTabs(e) {
        console.log(e)
        this.type = Number(e) + 1
        this.onRefresh()
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page,
          type: this.type
        }
        userMessage(params)
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
