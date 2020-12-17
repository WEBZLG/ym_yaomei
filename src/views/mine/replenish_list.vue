<template>
  <div class="replenish_list">
    <!-- 标签栏 -->
    <van-tabs v-model="active" color="#395467" swipe-threshold="6" sticky title-inactive-color="#282828"
      title-active-color="#3a576a" @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
        <div>
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
              <GoodsReplenish v-for="(item,index) in dataList" :key='index' :content='item' @action="onAction" @detail="onDetail"></GoodsReplenish>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import GoodsReplenish from '@/components/GoodsReplenish'
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    replenishList
  } from '@/api/user.js'
  export default {
    data() {
      return {
        active: 0,
        tabList: ['待审核', '已审核', '已驳回', '已预期'],
        page: 1,
        status:0,
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    mounted() {
      // this.active = this.$route.query.active
      // this.initData(0)
    },
    components: {
      GoodsReplenish
    },
    methods: {
      onAction(type, id) {
        console.log(type, id)
      },
      onDetail() {
        console.log('详情')
      },
      onTabs(e) {
        console.log(e)
        this.status = e
        this.onRefresh()
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page,
          status:this.status
        }
        replenishList(params)
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
  .replenish_list {}
</style>
