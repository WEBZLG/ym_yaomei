<template>
    <div class="dy_video">
      <div class="flex">
        <div class="flex_a">
          <div class="head"><img src="" alt=""></div>
          <div>
            <h3>官方作者</h3>
            <p>#5G播商#</p>
          </div>
        </div>
        <div>4次分享</div>
      </div>
      <div>
        <video src=""></video>
        <div class="thubm">
          <div class="thubn_scroll">
            <div class="item_thubm"><img src="../assets/logo.png" alt=""></div>
            <div class="item_thubm"><img src="../assets/logo.png" alt=""></div>
            <div class="item_thubm"><img src="../assets/logo.png" alt=""></div>
            <div class="item_thubm"><img src="../assets/logo.png" alt=""></div>
            <div class="item_thubm"><img src="../assets/logo.png" alt=""></div>
          </div>
        </div>
        <p>jieshao</p>
      </div>
      <div></div>
      <div>一天前</div>
      <div class="flex">
        <div class="flex_a">
          <div class="save_btn">
            <div class="c_icon"><img src="../../static/image/dynamic/save.png" alt=""></div>
            保存至相册
          </div>
          <div class="collect_btn">
            <div class="c_icon"><img src="../../static/image/dynamic/unCollection.png" alt=""></div>
            素材收藏
          </div>
        </div>
        <div class="flex share_box">
          <div>分享至：</div>
          <div class="c_icon"><img src="../../static/image/dynamic/wechat-moments.png" alt=""></div>
          <div class="c_icon"><img src="../../static/image/dynamic/weChat.png" alt=""></div>
        </div>
      </div>
      <div>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'DyVideo',
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
    .flex {
      @include flexbox()
    }

    .flex_a {
      @include flexbox($jc: '')
    }
    .dy_video {
      padding: 0.32rem;
      background-color: $white-color;
      margin-bottom: 0.266666rem;
      video{
        width: 100%;
        height: 3.76rem;
      }
      .c_icon {
        width: 0.36rem;
        display: inline-block;
        vertical-align: middle;

        img {
          width: 100%;
        }
      }

      .collect_btn {
        margin-left: 0.266666rem;
      }

      .share_box {
        flex: none;
        width: 2.933333rem;
      }
      .thubm{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        .thubn_scroll{
          display: flex;
        }
        .item_thubm{
          width: 5.866666rem;
          height: 7.2rem;
          margin-right: 0.4rem;
          img{
            width: 100%;
          }
        }
      }

    }
</style>
