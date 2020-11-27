<template>
  <div class="income_list">
    <van-nav-bar fixed title="收益明细" z-index="99"  left-arrow @click-left="onClickLeft" />
    <!-- 列表 -->
    <div class="container">
      <van-cell-group>
        <van-cell center>
          <template #title>
            <div class="head"><img src="../../assets/logo.png" alt=""></div>
            <div class="infor">
              <div>
                <span class="name">我很自私</span>
              </div>
              <div>收益类型：购买礼包</div>
              <div>2019-09-09 09:34:45</div>
            </div>
          </template>
          <template #right-icon>
            <div class="money">+100元</div>
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
  .income_list {
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
        .money{
          color: $gold-color;
          font-size: 18px;
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
