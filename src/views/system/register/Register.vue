<!--
 * @Author: xuan
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-10 13:32:32
 * @LastEditTime: 2022-11-22 17:01:15
 * @FilePath: \gcuwomd-oa\src\views\system\register\Register.vue
 * @Description: 
-->
<script setup lang="ts">
import { FormInst, FormItemRule, useMessage } from 'naive-ui';
import { onMounted, ref } from 'vue';
import {
  RegisterForm,
  RegisterFormRules,
  clearForm,
  handleRegister,
  orgList,
  departmentList,
  renderDepList,
  resModal,
  registerInfo,
  renderUserInfo,
} from '../../../hooks/ui-hooks/login/register.ui.hooks';
import { Organization20Regular, ContactCard20Regular } from '@vicons/fluent';
import { Phone } from '@vicons/tabler';
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
              <p class="namesytle">
                姓名 :
                {{ registerInfo.userName ? registerInfo.userName : '小樱' }}
              </p>
              <p class="gendersytle">
                性别 : {{ registerInfo.sex === 0 ? '女' : '男' }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <n-form :model="RegisterForm" :rules="RegisterFormRules" ref="FormRef">
          <n-form-item path="orgCode" :span="12">
            <template #label>
              <div class="label-container">
                <n-icon size="22">
                  <Organization20Regular />
                </n-icon>
                <span class="form-label">所属组织</span>
              </div>
            </template>
            <n-select
              size="large"
              placeholder="请选择组织"
              :options="orgList"
              label-field="orgName"
              value-field="orgCode"
              @update:value="renderDepList"
              v-model:value="RegisterForm.orgCode"
            >
              <template #arrow>
                <div class="select-arrow"></div>
              </template>
            </n-select>
          </n-form-item>
          <n-form-item label="所属部门" path="depCode">
            <template #label>
              <div class="label-container">
                <n-icon size="22">
                  <img src="../../../assets/icon/form-icon/Home.svg" alt="" />
                </n-icon>
                <span class="form-label">所属部门</span>
              </div>
            </template>
            <n-select
              size="large"
              placeholder="请选择部门"
              label-field="depName"
              value-field="depCode"
              :options="departmentList"
              v-model:value="RegisterForm.depCode"
            >
              <template #arrow>
                <div class="select-arrow"></div>
              </template>
            </n-select>
          </n-form-item>
          <n-form-item path="uid">
            <template #label>
              <div class="label-container">
                <n-icon size="22">
                  <ContactCard20Regular />
                </n-icon>
                <span class="form-label">学号</span>
              </div>
            </template>
            <n-input
              size="large"
              placeholder="请输入账号"
              v-model:value="RegisterForm.uid"
              @blur="renderUserInfo(message)"
            />
          </n-form-item>
          <n-form-item label="联系电话" path="phone">
            <template #label>
              <div class="label-container">
                <n-icon size="22">
                  <Phone />
                </n-icon>
                <span class="form-label">联系电话</span>
              </div>
            </template>
            <n-input
              size="large"
              placeholder="请输入联系电话"
              v-model:value="RegisterForm.phone"
            />
          </n-form-item>
        </n-form>
        <n-button
          type="info"
          class="button"
          @click="handleRegister(FormRef as FormInst, message)"
        >
          激活账号
        </n-button>
      </div>
      <div class="footer">
        <img src="../../../assets/底部底子.png" alt="" />
        <div class="footword">已有帐号 ? 去登录吧 !</div>
      </div>
    </div>
  </div>
  <n-modal v-model:show="resModal">
    <n-card class="res-card">
      <img src="../../../assets/haha.png" alt="" />
      <p calss="res-text">账号激活成功</p>
      <p>正在自动登录中……</p>
    </n-card>
  </n-modal>
</template>
<style scoped lang="scss">
.contaiter {
  font-weight: normal;
  font-family: 'Abhaya Libre ExtraBold';
}

.headbase {
  position: absolute;
  right: 0px;
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
  .label-container {
    display: flex;
    align-items: center;
    gap: 10px;
    .form-label {
      line-height: 25px;
      color: #000;
      font-weight: 600;
      font-size: 16px;

    }
  }
  .n-input {
    border-radius: 9px;
  }
  :deep(.n-base-selection){
    border-radius: 9px;
  }
  .select-arrow {
    position: absolute;
    top: 5px;
    width: 0px;
    height: 0px;
    border-right: 5px solid transparent;
    border-top: 5px solid #9e9e9e;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
}
.footer {
  position: absolute;
  background-color: transparent;
  bottom: 0px;
  width: 406px;
  height: 320px;
  z-index: -1;
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

.res-card {
  width: 314px;
  height: 244px;
  border-radius: 12px;
  :deep(.n-card__content) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p:not(:last-child) {
    margin: 17px 0 11px 0;
  }
}
</style>
