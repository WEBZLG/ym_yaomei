<template>
  <div class="service">
    <!-- <van-nav-bar fixed title="客服服务" z-index="99"  left-arrow @click-left="onClickLeft" /> -->
    <!-- banner -->
    <div class="banner">
       <img src="../../../static/image/mine/service_bg.png" alt="">
    </div>
    <!-- 列表 -->
    <div class="container">
      <van-cell-group>
        <van-cell center>
          <template #title>
            <div class="head"><img src="../../../static/image/mine/online_img.png" alt=""></div>
            <div class="infor">
              <div>
                <span class="name">客服在线时间</span>
              </div>
              <div>周一到周五：9:00~18:00</div>
            </div>
           </template>
        </van-cell>
        <van-cell center>
          <template #title>
            <div class="head"><img src="../../../static/image/mine/wechat_service.png" alt=""></div>
            <div class="infor">
              <div>
                <span class="name">微信客服</span>
              </div>
              <div>PH17644445555</div>
            </div>
          </template>
          <template #right-icon>
            <div class="btn_img"><img src="../../../static/image/mine/copy_btn_img.png" alt=""></div>
          </template>
        </van-cell>
        <van-cell center>
          <template #title>
            <div class="head"><img src="../../../static/image/mine/phone_img.png" alt=""></div>
            <div class="infor">
              <div>
                <span class="name">联系电话</span>
              </div>
              <div>PH17644445555</div>
            </div>
          </template>
          <template #right-icon>
             <div class="btn_img"><img src="../../../static/image/mine/call_img.png" alt=""></div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      onClickLeft(){
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="scss">
  .service {
    .banner{
      height: 4.466666rem;
      img{
        width: 100%;
      }
    }
    .van-cell__title {
        @include flexbox($jc:'');
        line-height: 22px;
    }

    .head {
      width: 1.133333rem;
      height: 1.133333rem;
      border-radius: 50%;
      margin-right: 0.32rem;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .container {
      margin: 0.32rem;

      .van-cell-group {
        background-color: inherit;
      }

      .van-cell {
        margin-bottom: 0.266666rem;
        border-radius: 0.133333rem;
        overflow: hidden;
        line-height: inherit;

       .btn_img{
          width: 1.8rem;
          img{
            width: 100%;
          }
       }
      }
    }

    .infor {
      font-size: 12px;
      color: $grey-color;

      .name {
        font-size: $font-size14;
        color: $font-color;
        font-weight: bold;
      }

      .level {
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.106666rem;
        height: 19px;
        img {
          height: 100%;
        }
      }
    }
  }
</style>
