<!--
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-07 21:17:26
 * @LastEditTime: 2022-11-08 11:49:58
 * @FilePath: \gcuwomd-oa\src\views\example\Index.vue
 * @Description: 
-->
<script setup lang="ts">
import {
  showLogin,
  loginFormRules,
  loginForm,
  clearForm,
  handleLogin,
  userInfo,
  showUserInfo,
} from '../../hooks/ui-hooks/example/example.ui.hooks';
import { FormInst, useMessage } from 'naive-ui';
import { ref } from 'vue';
const formRef = ref<FormInst | null>(null);
const message = useMessage();
</script>
<template>
  <div class="container">
    <n-space>
      <n-button type="primary" secondary @click="showLogin = true"
        >登录</n-button
      >
      <n-button type="primary" secondary @click="showUserInfo = true"
        >查看登录信息</n-button
      >
    </n-space>
  </div>
  <n-modal v-model:show="showLogin" @after-leave="clearForm">
    <n-card title="用户登录">
      <n-form :model="loginForm" :rules="loginFormRules" ref="formRef">
        <n-form-item label="账号" path="account">
          <n-input placeholder="请输入账号" v-model:value="loginForm.account" />
        </n-form-item>
        <n-form-item label="密码" path="passwd">
          <n-input
            type="password"
            placeholder="请输入密码"
            v-model:value="loginForm.passwd"
          />
        </n-form-item>
        <n-space justify="center">
          <n-button
            type="primary"
            @click="handleLogin(formRef as FormInst, message)"
            >登录</n-button
          >
        </n-space>
      </n-form>
    </n-card>
  </n-modal>
  <n-modal v-model:show="showUserInfo">
    <n-card title="用户信息">
      <n-empty v-if="userInfo.usrName === null"></n-empty>
      <n-descriptions :column="1" v-else>
        <n-descriptions-item label="姓名">{{
          userInfo.usrName
        }}</n-descriptions-item>
        <n-descriptions-item label="性别">{{
          userInfo.sex ? '男' : '女'
        }}</n-descriptions-item>
        <n-descriptions-item label="年龄">{{
          userInfo.age
        }}</n-descriptions-item>
        <n-descriptions-item label="是否为管理员">{{
          userInfo.isAdmin ? '是' : '否'
        }}</n-descriptions-item>
        <n-descriptions-item label="爱好">
          <n-space>
            <n-tag type="info" v-for="(item, index) in userInfo.hobby" :key="index">
              {{ item }}
            </n-tag>
          </n-space>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </n-modal>
</template>
<style scoped lang="scss">
.container {
  padding: 20px;
}
.n-card {
  width: 80vw;
  border-radius: 20px;
}
</style>
