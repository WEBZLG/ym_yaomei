<template>
  <div class="goodsInfo" @click="onclick(content.goods_id)">
    <div>
      <van-image height="100" width="100" lazy-load :src="content.goodsimg||content.thumb_square">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div class="parameter">
      <h3 class="title">{{content.goodsname||content.name}}</h3>
      <div>￥<span>{{content.money}}</span></div>
      <div v-if="content.size_name||content.defaultsize">规格：<span>{{content.size_name||content.defaultsize}}</span></div>
      <div v-if="content.buy_num">数量：<span>{{content.buy_num}}</span></div>
      <div v-if="content.stock||content.stock==0">自有库存数：<span>{{content.stock}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsInfo',
    props: {
      content: {
        type: Object,
        default: Object
      }
    },
    data() {
      return {

      }
    },
    methods: {
      onclick(value){
        this.$emit('onclick',value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goodsInfo {
    @include flexbox();
    background-color: $white-color;
    padding: 0.4rem 0.32rem;
    border-bottom: 1px solid #f2f2f2;
    .parameter{
      flex: 1;
      line-height: 22px;
      margin-left: 0.32rem;
    }
    .title {
      font-size: $font-size14;
      color: $black-color;
      font-weight: bold;
      margin: 0;
      min-height: 1.173333rem;
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
