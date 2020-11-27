<template>
  <div class="add_address">
    <van-nav-bar fixed title="收货地址" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <van-cell-group>
        <van-field v-model="value" label="收货人" placeholder="请输入收货人姓名" />
        <van-field v-model="tel" type="tel" placeholder="请输入收货人电话" label="联系电话" />
        <van-field readonly clickable label="地区选择" :value="areaValue" placeholder="选择省、市、区" @click="showPicker = true" />
        <van-popup v-model="showPicker" round position="bottom">
          <van-area title="地址" :area-list="areaList" :value="areaValue" @confirm="onConfirm" @cancel="onCancel" />
        </van-popup>
        <van-field v-model="message" rows="4" autosize label="详细地址" type="textarea" placeholder="请输入详细地址" />
      </van-cell-group>
      <van-checkbox v-model="checked">
        自定义图标
        <template #icon="props">
          <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-checkbox>
    </div>
    <div class="fixed">
      <BtnImg :src="srcd" @onclick="onDelete"></BtnImg>
      <BtnImg :src="src" @onclick="onSave"></BtnImg>
    </div>
  </div>
</template>

<script>
  import areaList from "../../utils/area.js";
  import BtnImg from '@/components/BtnImg'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        srcd: require('../../../static/image/mine/del_img.png'),
        src: require('../../../static/image/mine/save_img.png'),
        tel: '',
        message: '',
        areaList,
        areaValue: '',
        showPicker: false,
        checked: true,
        activeIcon: require('../../../static/image/mine/cheecked_.png'),
        inactiveIcon: require('../../../static/image/mine/check_.png'),
      }
    },
    components: {
      BtnImg
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onSave() {
        console.log('保存')
      },
      onConfirm(e) {
        this.areaValue = e[0].name + e[1].name + e[2].name
        console.log(this.areaValue)
        this.showPicker = false
      },
      onCancel() {
        this.showPicker = false
      }
    }
  }
</script>

<style lang="scss">
  .add_address {
    .img-icon {
      height: 0.506666rem;
    }

    .van-checkbox {
      padding: 0.32rem;
      background-color: $white-color;
    }
  }
</style>
