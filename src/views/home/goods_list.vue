<template>
  <div class="goods_list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
        <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
          <div class="container">
            <Goods v-for="(item,index) in indexData" :key="index" :content="item" @onclick="onDetail"></Goods>
          </div>
    </van-list>
    </van-pull-refresh>
    <div class="loading_box"  v-if="show_loading">
      <van-loading type="spinner"/>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/Goods'
  // 请求接口
  import {
    showMore
  } from '@/api/user.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        indexData: [],
        page: 1,
        loading: false,
        show_loading:true,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    components: {
      Goods
    },
    mounted() {
      // this.initData()
    },
    methods: {
      onDetail(value) {
        console.log(value)
        this.$router.push({
          path: '/goods_detail',
          query: {
            id: value
          }
        })
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page
        }
        showMore(params)
          .then((res) => {
            console.log(res)
            if (this.refreshing) {
              this.indexData = [];
              this.refreshing = false;
            }
            if (res.data.length > 0) {
              for (let item of res.data) {
                this.indexData.push(item)
              }
              this.page++
            } else {
              this.finished = true
            }
            if (this.indexData.length > 0) {
              this.finishedText = '没有更多了'
            } else {
              this.finishedText = ''
            }
            this.loading = false;
            this.show_loading = false;
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      onRefresh() {
        this.page = 1
        // this.indexData = [];
        this.finished = false;
        this.loading = true;
        this.initData();
      },
    }
  }
</script>

<style lang="scss">
  .goods_list{
    padding: 0.32rem;
  }
</style>
