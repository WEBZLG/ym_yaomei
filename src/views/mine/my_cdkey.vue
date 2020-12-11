<template>
  <div class="my_sdkey">
    <!-- <van-nav-bar fixed title="我的兑换码" z-index="99" left-arrow @click-left="onClickLeft" /> -->
    <div>
      <div class="banner">
        <div class="number">当前库存{{resData.startnum || 0}}张</div>
        <div class="build" @click="onChoose">生成兑换码</div>
      </div>
      <div>
        <van-tabs @click="onClick" title-active-color='#333333' title-inactive-color='#878787' line-width='52px' color="#f4c89b"
          background="#f5f5f5" sticky>
          <van-tab :title="'未使用('+resData.wsynum+')'" :disabled="isDisable">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
                <div class="code-list">
                  <div class="code-item" v-for="(item,index) in codeList" :key="index">
                    <div class="left-code">
                      <div class="title">我的兑换码<span class="copy-num">(已复制{{item.ctrlcnum}}次)</span></div>
                      <div class="code">{{item.cdkey}}</div>
                    </div>
                    <div :class="'copy-btn copybtn'+item.id" :data-clipboard-text="item.cdkey" @click="handleCopyClick(item.id)">复制兑换码</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>

          </van-tab>
          <van-tab :title="'已使用('+resData.ysynum+')'" :disabled="isDisable">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="initData">
                <div class="code-list">
                  <div class="code-item" v-for="(item,index) in dataList" :key="index">
                    <div class="left-code">
                      <div class="title">我的兑换码</div>
                      <div class="code">{{item.cdkey}}</div>
                    </div>
                    <div class="user-btn">已使用</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>

          </van-tab>
        </van-tabs>
      </div>
      <!-- 兑换数量 -->
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="icon-img">
            <img src="../../../static/image/mine/cdk_img.png">
          </div>
          <div class="caption">选择兑换数量</div>
          <div>
            <van-stepper v-model="numValue" min="1" integer input-width="90px" button-size="34px" />
          </div>
          <div class="submit" @click="onBuild">确定兑换</div>
        </div>
      </van-overlay>
      <!-- 兑换成功 -->
      <van-overlay :show="showSuccess">
        <div class="wrapper-success" @click.stop>
          <div class="icon-img">
            <img src="../../../static/image/mine/cdk_success.png">
          </div>
          <div class="caption">兑换成功</div>
          <div class="submit" @click="onSuccess">完成</div>
        </div>
      </van-overlay>
      <!-- 兑换失败 -->
      <van-overlay :show="showFail" @click="showFail = false">
        <div class="wrapper-success" @click.stop>
          <div class="icon-img">
            <img src="../../../static/image/mine/cdk_img.png">
          </div>
          <div class="caption">当前库存不足</div>
          <div class="submit" @click="onCard">去补卡</div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {
    cdkeyList,
    buyCdkey
  } from '@/api/user.js'
  export default {
    data() {
      return {
        resData: '',
        dataList: [],
        show: false,
        showSuccess: false,
        showFail: false,
        loading: false,
        finished: false,
        refreshing: false,
        status: 0,
        page: 1,
        stock: null,
        codeList: [], //兑换码列表
        numValue: '1', //选择数量
        finishedText: '',
        isDisable: false
      }
    },
    mounted() {

    },
    components: {

    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      initData() {
        const params = {
          uid: '2',
          status: this.status,
          page: this.page
        }
        cdkeyList(params)
          .then((res) => {
            console.log(res)
            this.resData = res.data
            if (this.refreshing) {
              this.codeList = [];
              this.dataList = [];
              this.refreshing = false;
            }
            if (res.data.list.length > 0) {
              for (let item of res.data.list) {
                if (item.status == 0) {
                  this.codeList.push(item)
                } else {
                  this.dataList.push(item)
                }
              }
              this.page++

            } else {
              this.finished = true
            }
            if (this.codeList.length > 0 || this.dataList.length > 0) {
              this.finishedText = '没有更多了'
            }
            this.loading = false;
            this.isDisable = false
            // this.getStockList()
          })
          .catch((err) => {
            Toast(err.msg)
          })
      },
      // tab切换
      onClick(name, title) {
        if (this.status == name) {
          return false;
        }
        this.status = name
        this.isDisable = true
        this.onRefresh()
      },
      // 生成兑换码
      onChoose() {
        this.show = true
      },
      // 确定兑换
      onBuild() {

        let _this = this
         let  params= {
            uid: '2',
            num: this.numValue
          }
        buyCdkey(params).then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.show = false
            this.showSuccess = true;
            _this.onRefresh()
          } else {
            this.show = false
            this.showFail = true;

          }
        })

      },
      // 完成
      onSuccess() {
        this.showSuccess = false
      },
      // 复制邀请码
      handleCopyClick(id) {
        let clipboard = new this.clipboard('.copybtn' + id);
        //成功回调
        clipboard.on('success', function(e) {
          Toast('复制成功');
          e.clearSelection()
        });
        //失败回调
        clipboard.on('error', function(e) {
          Toast('复制失败');
        });
      },
      // 补卡
      onCard() {

      },
      // 获取库存
      getStockList() {

      },
      onRefresh() {
        // 清空列表数据
        this.page = 1
        this.codeList = [];
        this.dataList = [];
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.initData();
      },
    }
  }
</script>

<style lang="scss">
  .my_sdkey {
    .banner {
      background: url(../../../static/image/mine/cdkey_bg.png) no-repeat center;
      height: 2.88rem;
      border-radius: 10px;
      text-align: center;
      font-size: 18px;
      margin: 0.266666rem 0.32rem;
      background-size: cover;
    }

    .number {
      font-weight: bold;
      color: #ffffff;
      padding: 0.8rem 0 0.346666rem;
    }

    .build {
      font-size: 14px;
      color: #4c7a92;
      font-weight: bold;
      /* padding: 0.186666rem 0; */
      height: 30px;
      line-height: 30px;
      background-color: #ffffff;
      border-radius: 0.826666rem;
      width: 2.88rem;
      margin: 0 auto;
    }

    .code-list {
      padding: 0.4rem 0;
      margin: 0 0.32rem;
    }

    .code-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1.813333rem;
      border-radius: 8px;
      box-shadow: 0px 0px 4px 0px #dddddd;
      margin-bottom: 0.24rem;
      padding: 0 0.266666rem;

    }

    .left-code {
      font-size: 14px;
      color: #4c7a92;
      line-height: 22px;
    }

    .title {
      color: #333333;
    }

    .copy-num {
      font-size: 10px;
      font-weight: initial;
      color: #b9b9b9;
    }

    .user-btn {
      width: 2.4rem;
      /* padding: 0.213333rem 0; */
      height: 26px;
      line-height: 26px;
      font-size: 12px;
      color: #f4c89b !important;
      border: 1px solid #f4c89b;
      border-radius: 56px;
      text-align: center;
    }

    .copy-btn {
      width: 2.506666rem;
      /* padding: 0.213333rem 0; */
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      color: #f4c89b;
      background-color: #4c7a92;
      border-radius: 56px;
      text-align: center;
    }

    .wrapper,
    .wrapper-success {
      text-align: center;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0.4rem;
      width: 6.64rem;
      position: relative;
      border-radius: 10px;
      top: 50%;
      left: 50%;
      margin: -91px -124.5px;
    }

    .wrapper {
      margin-top: -115px;
    }

    .icon-img {
      height: 2.266666rem;
      width: 2.933333rem;
      margin: 0 auto;
    }

    .icon-img img {
      height: 100%;
      width: 100%;
    }

    .caption {
      font-size: 16px;
      color: #333333;
      margin-bottom: 0.373333rem;
    }

    .van-stepper__input {
      margin: 0;
    }

    .van-stepper__minus {
      border-top-left-radius: 34px;
      border-bottom-left-radius: 34px;
    }

    .van-stepper__plus {
      border-top-right-radius: 34px;
      border-bottom-right-radius: 34px;
    }

    .submit {
      width: 4.213333rem;
      /* padding: 0.253333rem 0; */
      height: 34px;
      line-height: 34px;
      color: #f4c89b;
      font-size: 14px;
      border-radius: 34px;
      margin: 0.4rem auto 0;
      background: linear-gradient(#4b7b92, #283745);

    }

    .van-empty {
      padding-top: 30%;
    }

    .van-empty__image {
      height: 1.8rem;
      width: 3.266666rem;
    }

    .van-empty__description {
      color: #2a3a42;
    }
  }
</style>
