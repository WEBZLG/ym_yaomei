<template>
  <div class="goods_apply">
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
      <div class="text_right">
        <div class="btn_apply" @click="onClick"><img src="../../static/image/mine/apply_img.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodApply',
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
      onClick(value){
        this.$emit('onclick',value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goods_apply {
    @include flexbox;
    background-color: $white-color;
    padding: 0.4rem 0.32rem;
    border-bottom: 1px solid #f5f5f5;
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
    .text_right{
      text-align: right;
      .btn_apply{
        display: inline-block;
        width: 2.266666rem;
        img{
          width: 100%;
        }
      }
    }

  }
</style>
