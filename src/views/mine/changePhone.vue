<template>
  <div class="change_phone">
    <van-nav-bar fixed title="修改手机号" z-index="99" left-arrow @click-left="onClickLeft" />
    <div>
      <van-cell-group>
        <van-field v-model="oldPhone" type="tel" placeholder="请输入原手机号" />
        <van-field v-model="newPhone" type="tel" placeholder="请输入新手机号" />
        <van-field v-model="sms" center clearable type="number" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary" :disabled="isDisabled" @click="sendSMSCode">{{cutDownTime}}</van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        oldPhone: '18845729909',
        newPhone: '18845729909',
        sms: '',
        cutDownTime: '发送验证码',
        isDisabled:false
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      sendSMSCode() {
        let pattern =/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/; //正则表达式，验证手机号格式
        if (this.oldPhone.length != 11 || !pattern.test(this.oldPhone)) return this.$toast('请输入正确的手机号')
        if (this.newPhone.length != 11 || !pattern.test(this.newPhone)) return this.$toast('请输入正确的手机号')
        if (this.sms=='') return this.$toast('请输入短信验证码')
        // let res = await ajax.sendSMSCode(this.oldPhone);
        this.isDisabled=true;
        this.cutDownTime = 60;
        let timer = setInterval(() => { //
          this.cutDownTime--;
          if (this.cutDownTime <= 0) {
            this.cutDownTime = '发送验证码';
             this.isDisabled=false;
          }
        }, 1000)
      },
    }
  }
</script>

<style lang="scss">

</style>
