<template>
  <div class="shipment_list">
    <!-- <van-nav-bar fixed title="出货记录" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <!-- 标签栏 -->
      <van-tabs color="#395467" sticky title-inactive-color="#282828" title-active-color="#3a576a" @click="onTabs">
        <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
          <div class="list">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
                <div class="list_item" v-for="(item,index) in dataList" :key="index" @click="onDetail(item.id)">
                  <div class="head"><img :src="item.avatar" alt=""></div>
                  <div class="content">
                    <div>用户昵称：{{item.nickname}}</div>
                    <div>商品名称：{{item.goodsname}}</div>
                    <div>出货数量：{{item.sender}}</div>
                    <div>出货状态：{{item.statusname}}</div>
                    <div>申请时间：{{item.createtime}}</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    shipmentList
  } from '@/api/user.js'
  export default {
    data() {
      return {
        tabList: ['已同意', '已拒绝'],
        page: 1,
        status: 0,
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    components: {

    },
    mounted() {
      // this.initData()
    },
    methods: {

      onTabs(e) {
        this.status = e
        this.onRefresh()
      },
      onDetail(e) {
        this.$router.push({
          path: '/shipment_detail',
          query: {
            id: e
          }
        })
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page,
          status: this.status
        }
        shipmentList(params)
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
        this.initData();
      },
    }
  }
</script>

<style lang="scss">
  .shipment_list {
    .list {
      .list_item {
        @include flexbox($jc: '', $ai:'top') background-color:$white-color;
        padding: 0.4rem 0.32rem;
        margin-bottom: 0.4rem;

        img {
          height: 100%;
          width: 100%;
        }

        .head {
          width: 1.413333rem;
          height: 1.413333rem;
          margin-right: 0.373333rem;
          border-radius: 50%;
          overflow: hidden;
        }

        .content {
          flex: 1;
          color: #000000;
          font-size: $font-size14;
          line-height: 0.586666rem;
        }
      }
    }
  }
</style>
