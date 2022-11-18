<!--
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-10 13:32:32
 * @LastEditTime: 2022-11-18 21:32:54
 * @FilePath: \gcuwomd-oa\src\views\system\register\Register.vue
 * @Description: 
-->
<script setup lang="ts">
import { FormInst, FormItemRule, useMessage } from 'naive-ui';
import { ref } from 'vue';
import {
  RegisterForm,
  RegisterFormRules,
  clearForm,
  handleregister,
  orgOptions,
  dptOptions,
} from '../../../hooks/ui-hooks/login/register.ui.hooks';
const message = useMessage();
const FormRef = ref<FormInst | null>(null);
</script>
<template>
  <div>
    <div class="contaiter">
      <div class="header">
        <div class="headbase">
          <img src="../../../assets/头部底子.png" alt="" class="topbase" />
          <p class="join">Join Us</p>
        </div>
        <div class="head">
          <div class="return">
            <router-link to="/">
              <img src="../../../assets/返回按钮.png" alt="" />
            </router-link>
          </div>
          <div class="portrait">
            <img src="../../../assets/头像.png" alt="" />
            <div class="name">
              <p class="namesytle">姓名 : 小樱</p>
              <p class="gendersytle">性别 : 女</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <img src="../../../assets/底部底子.png" alt="" />
        <div class="footword">已有帐号 ? 去登录吧 !</div>
      </div>
      <div class="content">
        <n-form :model="RegisterForm" :rules="RegisterFormRules" ref="FormRef">
          <n-form-item label="所属组织" path="organization" :span="12">
            <n-select
              size="large"
              placeholder="请选择组织"
              :options="orgOptions"
              v-model:value="RegisterForm.organization"
            />
          </n-form-item>
          <n-form-item label="所属部门" path="deparment">
            <n-select
              size="large"
              placeholder="请选择部门"
              :options="dptOptions"
              v-model:value="RegisterForm.department"
            />
          </n-form-item>
          <n-form-item label="学号" path="uid">
            <n-input
              size="large"
              placeholder="请输入账号"
              v-model:value="RegisterForm.uid"
            />
          </n-form-item>
          <n-form-item label="联系电话" path="phone">
            <n-input
              size="large"
              placeholder="请输入联系电话"
              v-model:value="RegisterForm.phone"
            />
          </n-form-item>
        </n-form>
        <n-button type="info" class="button" @click="handleregister">
          激活账号
        </n-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contaiter {
  font-weight: normal;
  font-family: 'Abhaya Libre ExtraBold';
}
/* .header {

} */
.headbase {
  position: absolute;
  right: 0px;
  /* display: inline-block; */
  width: 233px;
  height: 232px;

  font-size: 30px;
  font-style: normal;
  line-height: 20px;
  font-weight: 500;
  color: #a87de1;
  background-color: transparent;
}
.topbase {
  position: absolute;
}
.join {
  position: absolute;
  right: 34px;
  top: 82px;
}
.head {
  background-color: transparent;
  position: absolute;
  top: 26px;
  left: 26px;
}
.portrait {
  margin-top: 41px;
  margin-left: 17px;
  display: flex;
}
.name {
  padding-top: 20px;
  margin-left: 16px;
  line-height: 25px;
}
.namesytle {
  font-weight: 600;
  font-size: 20px;
}
.gendersytle {
  font-size: 12px;
  transform: scale(0.9);
}
.content {
  position: relative;
  top: 257px;
  width: 314px;
  height: 365px;
  margin: auto;
}
.footer {
  position: absolute;
  background-color: transparent;
  bottom: 0px;
  width: 406px;
  height: 320px;
}
.inputsize {
  width: 314px;
  height: 48px;
  border: 1px solid #9e9e9e;
  border-radius: 9px;
}
.button {
  width: 314px;
  height: 62px;
  border-radius: 50px;
  background-color: #04c0ed;
  margin-top: 35px;
}
.footword {
  position: absolute;
  background-color: transparent;
  width: 140px;
  height: 17px;
  top: 223px;
  transform: scale(0.8);
  right: 143px;
}
</style>
