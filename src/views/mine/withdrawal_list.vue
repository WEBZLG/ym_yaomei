<template>
  <div class="withdrawal_list">
    <!-- <van-nav-bar fixed title="提现记录" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <van-cell-group>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
            <van-cell v-for="(item,index) in dataList" :key="index" :title="item.money+'元'" :border="false" center
              :value="'提现方式：'+(item.withdraw_type=='w'?'微信':'支付宝') " :label="item.add_time" title-class="my_title"
              value-class="my_value" />
          </van-list>
        </van-pull-refresh>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    withdrawalRecord
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
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2',
          page: this.page
        }
        withdrawalRecord(params)
          .then((res) => {
            console.log(res)
            // this.dataList = res.data
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
  .withdrawal_list {
    .van-cell-group {
      background-color: inherit;
    }

    .my_title {
      font-size: 16px;
      color: $gold-color;
    }

    .my_value {
      color: #000000;
      font-size: $font-size14;
    }

    .van-cell--center {
      margin: 0.266666rem 0;
    }
  }
</style>
