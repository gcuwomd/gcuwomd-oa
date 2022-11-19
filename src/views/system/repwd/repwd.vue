<script setup lang="ts">
import { ref } from 'vue';
import { FormInst, useMessage } from 'naive-ui';
import {
  repwdModel,
  repwdRules,
  handleRepwd,
  backlogin,
} from '../../../hooks/ui-hooks/repwd/index.ui.hooks';
const repwdForm = ref<FormInst | null>(null);
const message = useMessage();
</script>
<template>
  <div class="container">
    <div class="header-div">
      <img class="head-base" src="../../../assets/headbackground.svg" alt="" />
      <span class="span-top">Retrieve</span>
      <span class="span-bottom">password</span>
      <img class="background" src="../../../assets/repwdbg.svg" alt="" />
    </div>
    <div class="body-div">
      <n-form ref="repwdForm" :model="repwdModel" :rules="repwdRules">
        <n-form-item path="loginModel.uid">
          <template #label>
            <span class="org">所属组织：</span>
          </template>
          <n-input
            v-model:value="repwdModel.org"
            placeholder="请选择所属组织"
          />
        </n-form-item>
        <n-form-item style="margin-top: 6px" path="loginModel.password">
          <template #label>
            <span class="dept">所属部门：</span>
          </template>

          <n-input
            type="text"
            placeholder="请选择所属部门"
            v-model:value="repwdModel.dept"
          />
        </n-form-item>
        <n-form-item path="loginModel.uid">
          <template #label>
            <n-icon size="20">
              <ContactCardGroup20Regular />
            </n-icon>
            <span class="account">账号：</span>
          </template>
          <n-input
            v-model:value="repwdModel.uid"
            placeholder="请输入您的账号"
          />
        </n-form-item>
        <n-button
          class="btn-info"
          @click="handleRepwd(repwdForm as FormInst, message)"
        >
          找&nbsp;回
        </n-button>
        <span class="back-login" @click="backlogin">返回登录页</span>
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
    .span-top {
      position: absolute;
      width: 200px;
      height: 120px;
      right: 14px;
      top: 72px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 36px;
      line-height: 25px;
      color: #a87de1;
    }
    .span-bottom {
      position: absolute;
      right: 14px;
      top: 112px;

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
      width: 252px;
      height: 167px;
      right: 120px;
      top: 94px;
    }
  }
  .body-div {
    position: absolute;
    width: 320px;
    height: 434px;
    top: 306px;
    right: 30px;
    .org {
      position: absolute;
      width: 100px;
      height: 26px;
      top: 0;
      right: 218px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
    }
    .dept {
      position: absolute;
      width: 100px;
      height: 26px;
      top: 102px;
      right: 218px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
    }
    .account {
      position: absolute;
      width: 48px;
      height: 26px;
      top: 205px;
      right: 270px;

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

    .btn-info {
      width: 314px;
      height: 62px;
      margin-top: 30px;
      border-radius: 180px;
      box-shadow: 0px 4px 10px 0px rgba(4, 192, 237, 0.4);
      font-size: 18px;
      background-color: #04c0ed;
      border: none;
      color: #fff;
    }
    .back-login {
      position: absolute;
      width: 70px;
      right: 0;
      top: 410px;

      font-family: 'HarmonyOS_Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 25px;
      text-decoration: underline;
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
