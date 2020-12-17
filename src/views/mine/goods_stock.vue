<template>
  <div class="goods_stock">
    <div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
          <GoodsInfo v-for="(item,index) in dataList" :key="index" :content="item" @onclick="onStock"></GoodsInfo>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import GoodsInfo from '@/components/GoodsInfo'
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    goodsStock
  } from '@/api/user.js'
  export default {
    data() {
      return {
        page: 1,
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
    },
    mounted() {
      // this.initData()
    },
    components: {
      GoodsInfo
    },
    methods: {
      onStock() {
        console.log(12)
        // this.$router.push('/goods_apply_submit')
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page
        }
        goodsStock(params)
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

</style>
