<template>
  <div class="caption">
    <div class="title">{{content}}</div>
    <div class="right_icon" @click="handleClick"><img src="../../static/image/mine/right_icon.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: 'Caption',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleClick(value) {
        this.$emit('click', value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .caption {
    @include flexbox;
    padding: 0.4rem 0.32rem;

    .title {
      font-size: 16px;
      color: #000000;
      font-weight: bold;
    }

    .right_icon {
      height: 0.453333rem;
      width: 0.453333rem;
      border: 50%;
      overflow: hidden;
    }
  }
</style>
