<template>
  <div class="goods_apply">
    <van-nav-bar fixed title="补货申请" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <GoodsApply v-for="(item,index) in dataList" :content="item" @onclick="onApply"></GoodsApply>
    </div>
  </div>
</template>

<script>
  import GoodsApply from '@/components/GoodsApply'
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    replenishRequestlist
  } from '@/api/user.js'

  export default {
    data() {
      return {
        dataList:[],
        content: {
          name: '测试案例测试案例测试案例测试案例测试案例测试案例测试案例',
          thumb: "https://img.yzcdn.cn/vant/cat.jpeg",
          money: "88.00",
          size_name: '10g/片',
          buy_num: '66'
        },
      }
    },
    mounted() {
      this.initData()
    },
    components: {
      GoodsApply
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onApply(){
        console.log(12)
        this.$router.push('/goods_apply_submit')
      },
      initData() {
        const params = {
          uid: '2'
        }
        replenishRequestlist(params)
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

</style>
