<script setup lang="ts">
import { ContactCardGroup20Regular } from '@vicons/fluent';
import { Password } from '@vicons/carbon';
import { ref } from 'vue';
import { FormInst, useMessage } from 'naive-ui';
import {
  loginModel,
  loginRules,
  handleLogin,
} from '../../../hooks/ui-hooks/login/index.ui.hooks';
const loginForm = ref<FormInst | null>(null);
const message = useMessage();
</script>
<template>
  <div class="container">
    <div class="header-div">
      <img class="back-button" src="../../../assets/backbutton.svg" alt="" />
      <img class="head-base" src="../../../assets/headbackground.svg" alt="" />
      <span>Login in</span>
      <img class="background" src="../../../assets/background.svg" alt="" />
    </div>
    <div class="body-div">
      <n-form ref="loginForm" :model="loginModel" :rules="loginRules">
        <n-form-item path="loginModel.uid">
          <template #label>
            <n-icon size="20">
              <ContactCardGroup20Regular />
            </n-icon>
            <span class="account">账号：</span>
          </template>
          <n-input
            v-model:value="loginModel.uid"
            placeholder="请输入您的账号"
          />
        </n-form-item>
        <n-form-item style="margin-top: 24px" path="loginModel.password">
          <template #label>
            <n-icon size="20">
              <Password />
            </n-icon>
            <span class="password">密码:</span>
          </template>

          <n-input
            type="text"
            placeholder="请输入您的密码"
            v-model:value="loginModel.password"
          />
        </n-form-item>
        <n-checkbox
          class="checkbox"
          size="large"
          v-model:checked="loginModel.keepLogin"
        />
        <span class="checkbox-text">记住登录状态</span>
        <span class="forget">忘记密码?</span>
        <n-button
          class="btn-info"
          @click="handleLogin(loginForm as FormInst, message)"
        >
          登录
        </n-button>
      </n-form>
    </div>
    <div class="footer-div">
      <img class="foot-base" src="../../../assets/footer.svg" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;

  .header-div {
    position: absolute;
    top: 0;
    right: 0;
    span {
      position: absolute;
      right: 36px;
      top: 82px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 36px;
      line-height: 25px;
      color: #a87de1;
    }
    .head-base {
      height: 232px;
      width: 233px;
    }
    .background {
      position: absolute;
      width: 201px;
      height: 146px;
      right: 169px;
      top: 105px;
    }
    .back-button {
      position: absolute;
      width: 56px;
      height: 56px;
      right: 311px;
      top: 26px;
    }
  }
  .body-div {
    position: absolute;
    width: 320px;
    height: 434px;
    top: 306px;
    right: 30px;
    .account {
      position: absolute;
      width: 48px;
      height: 26px;
      top: 0;
      right: 242px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
    }
    .password {
      position: absolute;
      width: 48px;
      height: 26px;
      top: 123px;
      right: 242px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
    }
    .n-input {
      box-sizing: border-box;
      width: 314px;
      height: 48px;
      border-radius: 9px;
      background: #ffffff;
      border: 1px solid #9e9e9e;
      input {
        height: 21px;
        font-size: 16px;
        line-height: 25px;
        padding: 13px 0 14px 0;
      }
      ::v-deep .n-input__input {
        display: flex;
        align-items: center;
      }
      ::v-deep .n-input--focus {
        --n-border: 1px solid #9e9e9e !important;
        --n-border-focus: 1px solid #9e9e9e !important;
      }
    }
    .checkbox {
      position: absolute;
      top: 225px;
      right: 303px;
      height: 15px;
      width: 16px;
    }
    .checkbox-text {
      position: absolute;
      width: 79px;
      height: 26px;
      top: 224px;
      right: 216px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 12px;
      line-height: 25px;
    }
    .forget {
      position: absolute;
      top: 226px;
      right: 0;
      width: 64px;
      height: 17px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 12px;
      line-height: 17px;
      color: #9e9e9e;
    }
    .btn-info {
      width: 314px;
      height: 62px;
      margin-top: 105px;
      border-radius: 180px;
      box-shadow: 0px 4px 10px 0px rgba(4, 192, 237, 0.4);
      font-size: 18px;
      background-color: #04c0ed;
      border: none;
      color: #fff;
    }
  }
  .footer-div {
    position: absolute;
    height: 320px;
    bottom: 0;
    right: 0;
    z-index: -1;
    img {
      height: 100%;
    }
    .foot-base {
      width: 406px;
      height: 320px;
    }
  }
}
</style>
