<template>
  <div class="goods_apply_submit">
    <van-nav-bar fixed title="补货申请" z-index="99" left-arrow @click-left="onClickLeft" />
    <div class="banner">
      <img :src="dataList" alt="">
<!--      <van-swipe @change="onChange">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/4
          </div>
        </template>
      </van-swipe> -->
    </div>
    <div class="content">
      <van-cell-group>
        <van-cell title="商品名字一大堆" :border="false" />
        <van-cell :border="false">
          <template #title>
            <span class="custom-title">规格：</span>
            <span type="danger">25/片</span>
          </template>
        </van-cell>
        <van-cell title="补货数量" :border="false">
          <template #default>
            <van-stepper v-model="value" />
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <span class="custom-title">补货总额：</span>
            <span type="danger">123元</span>
          </template>
        </van-cell>
        <van-field name="uploader" label="文件上传" :border="false">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field v-model="name" :border="false" label="出货人姓名：" placeholder="请输入姓名" />
        <van-field v-model="mobile" :border="false" label="联系方式：" placeholder="请输入联系电话" />
      </van-cell-group>
    </div>
    <BtnImg :src="src"></BtnImg>
  </div>
</template>

<script>
  import BtnImg from '@/components/BtnImg'
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    replenishRequest
  } from '@/api/user.js'
  export default {
    data() {
      return {
        dataList:'',
        name: '',
        mobile: '',
        value: 1,
        current: 0,
        src: require("../../../static/image/mine/submit_img.png"),
        uploader: [{
          url: 'https://img.yzcdn.cn/vant/leaf.jpg'
        }],
      }
    },
    components: {
      BtnImg
    },
    mounted() {
      let id = this.$route.query.id;
      this.initData(id)
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onChange(index) {
        this.current = index;
      },
      initData(id) {
        const params = {
          uid: '2',
           goods_id:id
        }
        replenishRequest(params)
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
  .goods_apply_submit {
    .banner {
      height: 6.666666rem;
        img{
          width: 100%;
          height: 100%;
        }
      .van-swipe {
        height: 6.666666rem;
      }
    }

    .flex {
      @include flexbox();
    }

    .flex_ard {
      @include flexbox($jc: '', $ai:'top');
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      height: 0.48rem;
      line-height: 0.48rem;
      color: $white-color;
      border-radius: 0.48rem;
      background: rgba(0, 0, 0, 0.1);
    }
  }
</style>
