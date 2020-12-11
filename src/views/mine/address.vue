<template>
  <div class="address">
    <!-- <van-nav-bar fixed title="收货地址" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div class="container">
      <Address v-for="(item,index) in dataList" :key="index" :content="item" @click="onEdit(item)"></Address>
      <div class="fixed">
        <BtnImg :src="src" @onclick="onAdd"></BtnImg>
      </div>
    </div>
  </div>
</template>

<script>
  import Address from '@/components/Address'
  import BtnImg from '@/components/BtnImg'
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    myAddress
  } from '@/api/user.js'
  export default {
    data() {
      return {
        src: require('../../../static/image/mine/add_address.png'),
        dataList: [],
        type: ''
      }
    },
    mounted() {
      let type = this.$route.query.type;
      if (typeof(type) == 'string') {
        this.type = type
      }
      this.initData()
    },
    components: {
      Address,
      BtnImg
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onEdit(e) {
        if (this.type == "order") {
          this.$storage.set('chooseAddress', e)
          this.$router.go(-1)
          console.log(this.$storage.get('chooseAddress'))
        } else {
          this.$router.push({
            path: '/add_address',
            query: {
              data: e
            }
          })
        }
      },
      onAdd(e) {
        this.$router.push('/add_address')
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2'
        }
        myAddress(params)
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
  .address {
    .container {
      margin: 0.32rem;
    }

    .flex {
      @include flexbox()
    }
  }
</style>
