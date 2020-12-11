<template>
  <div class="shipment_detail">
    <!-- <van-nav-bar fixed title="出货详情" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>

    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    shipmentDetails
  } from '@/api/user.js'
  export default {
    data() {
      return {
        dataList: []
      }
    },
    components: {

    },
    mounted() {
      let id = this.$route.query.id
      this.initData(id)
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      // 请求数据
      initData(id) {
        const params = {
          uid: '2',
          id:id
        }
        shipmentDetails(params)
          .then((res) => {
            console.log(res)
            // this.dataList = res.data
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
    }
  }
</script>

<style lang="scss">
  .shipment_detail {

  }
</style>
