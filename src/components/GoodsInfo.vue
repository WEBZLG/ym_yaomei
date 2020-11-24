<template>
  <div class="goodsInfo">
    <div>
      <van-image height="100" width="100" lazy-load :src="content.thumb">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div class="parameter">
      <h3 class="title">{{content.name}}</h3>
      <div>￥<span>{{content.money}}</span></div>
      <div>规格：<span>{{content.size_name}}</span></div>
      <div>数量：<span>{{content.buy_num}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsInfo',
    props: {
      content: {
        type: Object,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goodsInfo {
    @include flexbox;
    background-color: $white-color;
    padding: 0.4rem 0.32rem;
    .parameter{
      line-height: 22px;
      margin-left: 0.32rem;
    }
    .title {
      font-size: $font-size14;
      color: $black-color;
      font-weight: bold;
      margin: 0;
      min-height: 0.48rem;
      @include textoverflow($clamp: 2);
    }

    .parameter div {
      font-size: $font-size14;
      color: #979797;
    }

    .parameter span {
      color: #282828;
    }

  }
</style>
