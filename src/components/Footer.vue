<template>
  <div class="footer">
    <div class="flex">
      <div class="f_icon"><img src="../../static/image/footer_logo.png" alt=""></div>
      <div>千耀传媒科技提供技术支持</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    props: {

      data: {

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
  .footer {
    text-align: center;
    font-size: 14px;
    color: #dbdbdb;
    padding: 0.666666rem 0;
    .flex {
      display: inline-flex;
      align-items: center;
      .f_icon{
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.133333rem;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
