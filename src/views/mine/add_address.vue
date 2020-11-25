<template>
  <div class="add_address">
    <van-nav-bar fixed title="收货地址" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <van-cell-group>
        <van-field v-model="value" label="收货人" placeholder="请输入收货人姓名" />
        <van-field v-model="tel" type="tel" placeholder="请输入收货人电话"  label="联系电话" />
        <van-field readonly clickable label="地区选择" :value="value" placeholder="选择省、市、区" @click="showPicker = true" />
        <van-popup v-model="showPicker" round position="bottom">
          <van-area title="地址" :area-list="areaList" :value="areaValue" @confirm = "onConfirm" @cancel = "onCancel"/>
        </van-popup>
        <van-field v-model="message" rows="1" autosize label="详细地址" type="textarea" placeholder="请输入详细地址" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import areaList from "../../utils/area.js";
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        value: '',
        tel: '',
        message: '',
        areaList,
        areaValue:'',
        showPicker:false
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onConfirm(e){
        this.areaValue = e[0].name+e[1].name+e[2].name
        console.log(this.areaValue)
        this.showPicker=false
      },
      onCancel(){
        this.showPicker=false
      }
    }
  }
</script>

<style lang="scss">

</style>
