<template>
  <div class="empty">
    <div class="title">{{content}}</div>
    <div class="right_icon" @click="handleClick"><img src="../../static/image/mine/right_icon.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: 'Empty',
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
  .empty {

  }
</style>
