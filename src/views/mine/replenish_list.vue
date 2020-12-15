<template>
  <div class="replenish_list">
    <!-- 标签栏 -->
    <van-tabs v-model="active" color="#395467" swipe-threshold="6" sticky  title-inactive-color="#282828"
      title-active-color="#3a576a" @click="onTabs">
      <van-tab v-for="(item,index) in tabList" :title="item" :key='index'>
        <div>
          <GoodsReplenish  v-for="(item,index) in dataList" :key='index' :content='item' @action="onAction" @detail="onDetail"></GoodsReplenish>
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
        dataList:[],
      }
    },
    mounted() {
      this.active = this.$route.query.active
      this.initData(0)
    },
    components:{
      GoodsReplenish
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onAction(type,id){
          console.log(type,id)
      },
      onDetail(){
        console.log('详情')
      },
      onTabs(e){
        console.log(e)
         this.initData(e)
      },
      initData(status) {
        const params = {
          uid: '2',
          status:status
        }

        replenishList(params)
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
  .replenish_list {}
</style>
