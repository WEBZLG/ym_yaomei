<template>
  <div class="system">
    <van-nav-bar fixed title="设置" z-index="99" left-arrow @click-left="onClickLeft" />
    <!-- 列表 -->
    <div class="">
      <van-cell-group>
        <van-cell v-for="(item,index) in navList" :key="index" :title="item.title" is-link :to="item.link" :value="item.value" @click="clkCall(item.event)" />
      </van-cell-group>
    </div>
    <div class="fixed">
      <BtnImg :src="src" @onclick="onExit"></BtnImg>
    </div>
    <!-- 推荐人弹窗 -->
    <van-overlay :show="recommenderShow" @click="recommenderShow = false">
      <div class="wrapper" @click.stop>
        <van-image height="56" width="56" round :src="dataList.avatar">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
          <h3 class="pop_title">推荐人</h3>
          <div>{{dataList.nickname}}</div>
          <div>等级：{{dataList.group_name}}</div>
          <div class="pop_mobile">手机号：{{dataList.mobile}}</div>
          <div class="pop_btn" @click="recommenderShow = false">
              <img src="../../../static/image/mine/pop_btn.png" alt="">
          </div>
      </div>
    </van-overlay>
    <!-- 绑定微信弹窗 -->
    <van-overlay :show="wechatShow" @click="wechatShow = false">
      <div class="wrapper wechat_wrap" @click.stop>
          <h3 class="pop_title">提示</h3>
          <div class="pop_mobile">您确定要绑定微信吗</div>
          <div class="pop_btn_box" @click="wechatShow = false">
              <div class="btn"><img src="../../../static/image/mine/pop_cancel.png" alt=""></div>
              <div class="btn"><img src="../../../static/image/mine/pop_sure.png" alt=""></div>
          </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  import BtnImg from '@/components/BtnImg.vue'
  import {
    Toast
  } from 'vant';
  // 请求接口
  import {
    seeReferrer
  } from '@/api/user.js'
  export default {
    data() {
      return {
        recommenderShow:false,
        wechatShow:false,
        src: require('../../../static/image/mine/exit_img.png'),
        dataList:[],
        navList: [{
            title: '修改手机号',
            link: '/changePhone',
            value:'',
            event: 'onDefault'
          },
          {
            title: '推荐人',
            link: '',
            value:'',
            event: 'onShowRecommender'
          },
          {
            title: '绑定微信',
            link: '',
            value:'',
            event: 'onShowWechat'
          },
          {
            title: '用户协议',
            link: '/changePhone',
            value:'',
            event: 'onDefault'
          },
          {
            title: '关于我们',
            link: '/changePhone',
            value:'',
            event: 'onDefault'
          }
        ]
      }
    },
    mounted() {
      this.initData()
    },
    components: {
      BtnImg
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      // 退出
      onExit() {
        console.log('tui')
      },
      onDefault(){

      },
      // 函数转接
      clkCall(methodsWords) {
        this[methodsWords]()
      },
      // 推荐人
      onShowRecommender() {
        this.recommenderShow=true
      },
      // 绑定微信
      onShowWechat(){
        this.wechatShow=true
      },
      // 请求数据
      initData() {
        const params = {
          uid: '2'
        }
        seeReferrer(params)
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
.system{
  .wrapper{
    width: 6.933333rem;
    border-radius: 0.266666rem;
    background-color: $white-color;
    margin: -3.333333rem auto 0;
    position: relative;
    top: 50%;
    line-height: 0.64rem;
    color: #0d0d0d;
    text-align: center;
    font-size: $font-size14;
    padding: 0.506666rem 0 0.266666rem;
    .pop_mobile{
      color: $grey-color;
    }
    .pop_btn{
      width: 4.6rem;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
  }
  .wechat_wrap{
    height: 5.866666rem;
    background: url(../../../static/image/mine/bindwechat_bg.png) no-repeat center;
    background-size: cover;
    background-position: top;
    .pop_title{
      padding-top: 2.666666rem;
    }
    .pop_mobile{
       margin: 0.266666rem 0;
    }
    .pop_btn_box{
      @include  flexbox();
      padding:0 0.32rem;
      .btn{
        flex:1;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>
