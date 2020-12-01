<template>
  <div class="income_list">
    <van-nav-bar fixed title="收益明细" z-index="99" left-arrow @click-left="onClickLeft" />
    <!-- 列表 -->
    <div class="container">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
          <van-cell-group>
            <van-cell center v-for="(item,index) in dataList" :key="index">
              <template #title>
                <div class="head"><img :src="item.avatar" alt=""></div>
                <div class="infor">
                  <div>
                    <span class="name">{{item.nickname}}</span>
                  </div>
                  <div>收益类型：{{item.profit_name}}</div>
                  <div>{{item.createtime}}</div>
                </div>
              </template>
              <template #right-icon>
                <div class="money">{{item.money}}元</div>
              </template>
            </van-cell>
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  // 请求接口
  import {
    userProfit
  } from '@/api/user.js'
  export default {
    data() {
      return {
        tabList: ['全部', '用户', '会员', '代理商', '经销商', '合伙人'],
        page: 1,
        dataList: [],
        loading: false,
        finished: false,
        refreshing: false,
        finishedText: '',
      }
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
        userProfit(params)
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
  .income_list {
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

        .money {
          color: $gold-color;
          font-size: 18px;
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
