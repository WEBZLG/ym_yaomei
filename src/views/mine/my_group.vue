<template>
  <div class="my_group">
    <!-- 标签栏 -->
    <van-tabs color="#395467" sticky title-inactive-color="#282828" title-active-color="#3a576a" @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item.name+'('+item.num+')'" :key='index'>
        <!-- 列表 -->
        <div class="container">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="myTeam">
              <van-cell-group>
                <van-cell center v-for="(item,index) in dataList" :key="index">
                  <template #title>
                    <div class="head"><img :src="item.avatar" alt=""></div>
                    <div class="infor">
                      <div>
                        <span class="name">{{item.nickname}}</span>
                        <span class="level"><img :src="item.group_name" alt=""></span>
                      </div>
                      <div>{{item.mobile}}</div>
                      <div>{{item.createtime}}</div>
                    </div>
                  </template>
                  <template #right-icon>
                    <van-button type="default" @click="onOther(item.id)">Ta的团队</van-button>
                  </template>
                </van-cell>
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
    myTeamnav,
    myTeam
  } from '@/api/user.js'
  export default {
    data() {
      return {
        tabList: [],
        dataList: [],
        page: 1,
        gid: '',
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      onTabs(e) {
        console.log(e)
        this.gid = e
        this.onRefresh()
      },
      onOther(e) {

      },
      initData() {
        const params = {
          uid: '2'
        }
        myTeamnav(params)
          .then((res) => {
            this.tabList = res.data
            this.gid = es.data[0].id
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },

      // 请求数据
      myTeam() {
        const params = {
          uid: '2',
          group_id: this.gid,
          page: this.page
        }
        myTeam(params)
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
            } else {
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
        this.myTeam();
      },
    }
  }
</script>

<style lang="scss">
  .my_group {
    .van-tab--active {
      font-weight: bold;
    }

    .van-cell__title {
      @include flexbox($jc: '')
    }

    .head {
      height: 1.066666rem;
      width: 1.066666rem;
      border-radius: 50%;
      margin-right: 0.32rem;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .container {
      margin: 0.32rem;

      .van-cell-group {
        background-color: inherit;
      }

      .van-cell {
        margin-bottom: 0.266666rem;
        border-radius: 0.133333rem;
        overflow: hidden;
        line-height: inherit;

        .van-button--normal {
          background-color: #395467;
          color: $white-color;
          font-size: $font-size14;
          height: 0.8rem;
          line-height: 0.8rem;
          border: none;
        }
      }
    }

    .infor {
      font-size: 12px;
      color: $grey-color;

      .name {
        font-size: $font-size14;
        color: $font-color;
        font-weight: bold;
      }

      .level {
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.106666rem;
        height: 19px;

        img {
          height: 100%;
        }
      }
    }
  }
</style>
