<template>
  <div class="add_address">
    <!-- <van-nav-bar fixed title="收货地址" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <van-cell-group>
        <van-field v-model="name" label="收货人" placeholder="请输入收货人姓名" />
        <van-field v-model="tel" type="tel" placeholder="请输入收货人电话" label="联系电话" />
        <van-field readonly clickable label="地区选择" :value="areaValue" placeholder="选择省、市、区" @click="showPicker = true" />
        <van-popup v-model="showPicker" round position="bottom">
          <van-area title="地址" :area-list="areaList" @confirm="onConfirm" @cancel="onCancel" />
        </van-popup>
        <van-field v-model="message" rows="4" autosize label="详细地址" type="textarea" placeholder="请输入详细地址" />
      </van-cell-group>
      <van-checkbox v-model="checked">
        设为默认地址
        <template #icon="props">
          <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-checkbox>
    </div>
    <div class="fixed">
      <BtnImg v-if="!showDel" :src="srcd" @onclick="onDelete"></BtnImg>
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
  // 请求接口
  import {
    addressInc,
    addressDel
  } from '@/api/user.js'
  import {
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        id: '',
        srcd: require('../../../static/image/mine/del_img.png'),
        src: require('../../../static/image/mine/save_img.png'),
        activeIcon: require('../../../static/image/mine/cheecked_.png'),
        inactiveIcon: require('../../../static/image/mine/check_.png'),
        tel: '', //电话
        message: '', //详细地址
        areaList, //地址数据
        name: '', //名字
        region: '', //省
        city: '', //市
        xian: '', //区
        areaValue: '', //选中后地址
        showPicker: false, //地址弹窗
        checked: true, //默认地址
        showDel: true //显隐删除按钮
      }
    },
    mounted() {
      let data = this.$route.query.data
      console.log(typeof(data))
      if (typeof(data) == "undefined") {
        this.showDel = true
      } else {
        this.id = data.id;
        this.tel = data.mobile //电话
        this.message = data.address //详细地址
        this.name = data.name //名字
        this.region = data.region //省
        this.city = data.city //市
        this.xian = data.xian //区
        this.areaValue = data.region + data.city + data.xian //选中后地址
        this.checked = data.status == 1 ? true : false
        this.showDel = false
      }
    },
    components: {
      BtnImg
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      // 添加地址
      onSave() {
        const params = {
          uid: '2',
          name: this.name,
          mobile: this.tel,
          region: this.region,
          city: this.city,
          xian: this.xian,
          address: this.message,
          status: this.checked == true ? '1' : '0'
        }
        if (params.name == '') {
          Toast('请输入姓名');
          return false;
        };
        if (params.mobile == '') {
          Toast('请输入电话');
          return false;
        };
        if (params.region == '') {
          Toast('请选择地址');
          return false;
        };
        if (params.address == '') {
          Toast('请输入详细地址');
          return false;
        };
        addressInc(params)
          .then((res) => {
            Toast(res.msg)
            setTimeout(res => {
              this.$router.go(-1)
            }, 1000)
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // 选择地址
      onConfirm(e) {
        this.areaValue = e[0].name + e[1].name + e[2].name
        this.region = e[0].name
        this.city = e[1].name
        this.xian = e[2].name
        console.log(this.areaValue)
        this.showPicker = false
      },
      // 关闭弹出
      onCancel() {
        this.showPicker = false
      },
      // 删除地址
      onDelete() {
        const params = {
          uid: '2',
          address_id: this.id,
        }
        Dialog.confirm({
            title: '删除地址',
            message: '确认删除地址？',
          })
          .then(() => {
            addressDel(params)
              .then((res) => {
                console.log(res)
                Toast(res.msg)
                setTimeout(res => {
                  this.$router.go(-1)
                }, 1000)
              })
              .catch((err) => {
                Toast(err.msg)
              })
          })
          .catch(() => {
            Toast('已取消')
          });
      },
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
