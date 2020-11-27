<template>
  <div class="address">
    <van-nav-bar fixed title="收货地址" z-index="99" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <Address :content="content" @click="onEdit"></Address>
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
  export default {
    data() {
      return {
        src: require('../../../static/image/mine/add_address.png'),
        content:{
          id:0,
          name:'张三',
          mobile:'123456',
          address:'哈尔滨南岗区',
          isChecked:true
        }
      }
    },
    components:{
      Address,
      BtnImg
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onEdit(e){
        console.log(e)
        this.$router.push('/add_address')
      },
      onAdd(e){
        this.$router.push('/add_address')
      }
    }
  }
</script>

<style lang="scss">
.address{
  .container{
    margin: 0.32rem;
  }
  .flex{
    @include  flexbox()
  }
}
</style>
