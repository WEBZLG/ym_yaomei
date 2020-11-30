<template>
  <div class="dot">
    <div v-if="content.type==0" class="type_1"></div>
    <div v-if="content.type==1" class="type_2">{{content.num}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Dot',
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
      handleClick(value) {
        this.$emit('click', value)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .dot {
    position: absolute;
    right: 0;
    top: 0;
    .type_1{
      height: 0.16rem;
      width: 0.16rem;
      border-radius: 50%;
      background-color: #ff0000;
    }
    .type_2{
      height: 10px;
      min-width: 10px;
      border-radius: 10px;
      background-color: #ff0000;
      font-size: 10px;
      color: #ffffff;
      text-align: center;
      line-height: 10px;
    }
  }
</style>
