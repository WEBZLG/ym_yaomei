<template>
  <div class="my_group">
    <van-nav-bar fixed title="我的团队" z-index="99"  left-arrow @click-left="onClickLeft" />
    <!-- 标签栏 -->
    <van-tabs color="#395467" sticky title-inactive-color="#282828" title-active-color="#3a576a">
      <van-tab v-for="(item,index) in tabList" :title="item+'(66)'" :key='index'></van-tab>
    </van-tabs>
    <!-- 列表 -->
    <div class="container">
      <van-cell-group>
        <van-cell center>
          <template #title>
            <div class="head"><img src="../../assets/logo.png" alt=""></div>
            <div class="infor">
              <div>
                <span class="name">我很自私</span>
                <span class="level"><img src="../../../static/image/mine/user_level0.png" alt=""></span>
              </div>
              <div>PH17644445555</div>
              <div>2019-09-09 09:34:45</div>
            </div>
          </template>
          <template #right-icon>
            <van-button type="default">Ta的团队</van-button>
          </template>
        </van-cell>
        <van-cell center>
          <template #title>
            <div class="head"><img src="../../assets/logo.png" alt=""></div>
            <div class="infor">
              <div>
                <span class="name">我很自私</span>
                <span class="level"><img src="../../../static/image/mine/user_level0.png" alt=""></span>
              </div>
              <div>PH17644445555</div>
              <div>2019-09-09 09:34:45</div>
            </div>
          </template>
          <template #right-icon>
            <van-button type="default">Ta的团队</van-button>
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
        tabList: ['全部', '用户', '会员', '代理商', '经销商', '合伙人']
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
  .my_group {
    .van-tab--active {
      font-weight: bold;
    }

    .van-cell__title {
        @include flexbox($jc:'')
    }

    .head {
      height: 1.066666rem;
      width: 1.066666rem;
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

        .van-button--normal {
          background-color: #395467;
          color: $white-color;
          font-size: $font-size14;
          height: 0.8rem;
          line-height: 0.8rem;
          border: none;
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
