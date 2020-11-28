<template>
  <div class="go_home">
    <div class="" @click="handleClick"><img src="" alt=""></div>
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
  .go_home {
    
  }
</style>
