<template>
  <div class="goods_stock">
    <!-- <van-nav-bar fixed title="商品库存" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <GoodsInfo v-for="(item,index) in dataList" :key="index" :content="item" @onclick="onStock"></GoodsInfo>
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
        dataList:[],
      }
    },
    mounted() {
      this.initData()
    },
    components: {
      GoodsInfo
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onStock(){
        console.log(12)
        // this.$router.push('/goods_apply_submit')
      },
      initData(){
       const params = {
         uid: '2'
       }
       goodsStock(params)
         .then((res) => {
           console.log(res)
           this.dataList = res.data
         })
         .catch((err) => {
           Toast(err.msg)
         })
      }
    }
  }
</script>

<style lang="scss">

</style>
