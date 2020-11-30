<template>
  <div class="my_order">
    <van-nav-bar fixed title="订单管理" z-index="99" left-arrow @click-left="onClickLeft" />
    <!-- 标签栏 -->
    <van-tabs v-model="active" color="#395467" swipe-threshold="6" sticky :offset-top="46" title-inactive-color="#282828"
      title-active-color="#3a576a" @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
        <GoodsItem v-for="(item,index) in dataList" :key="index" :content='item' @action="onAction" @detail="onDetail"></GoodsItem>
      </van-tab>
    </van-tabs>
    <div>
    </div>
  </div>
</template>

<script>
  import GoodsItem from '@/components/GoodsItem'
  // 请求接口
  import {
    myOrder
  } from '@/api/user.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        active: 0,
        tabList: ['全部', '待付款', '待配送', '待签收', '已完成'],
        dataList: [],
      }
    },
    mounted() {
      this.active = this.$route.query.active;
      this.$route.query.active==4? this.initData(6) :this.initData(this.$route.query.active-1)

    },
    components: {
      GoodsItem
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onAction(type, id) {
        console.log(type, id)
      },
      onDetail(value) {
        console.log('详情')
        this.$router.push({
            path: '/goods_detail',
            query: {
              id: value
            }
          })
      },
      onTabs(e){
         e==4? this.initData(6) :this.initData(e-1)
      },
      // 请求数据
      initData(type) {
        const params = {
          uid: '2',
          type: type
        }
        myOrder(params)
          .then((res) => {
            console.log(res)
            this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
    }
  }
</script>

<style lang="scss">
  .my_order {}
</style>
