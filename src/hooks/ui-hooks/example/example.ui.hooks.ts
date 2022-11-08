/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-07 21:18:36
 * @LastEditTime: 2022-11-08 11:53:02
 * @FilePath: \gcuwomd-oa\src\hooks\ui-hooks\example\example.ui.hooks.ts
 * @Description:
 */
import { reactive, ref } from 'vue';
import { FormInst, MessageApi } from 'naive-ui';
import { IExampleLoginForm, ILoginData } from '../../../types/example/example';
import { login } from '../../logic-hooks/example/example.logic.hooks';

export const showLogin = ref<boolean>(false);
export const showUserInfo = ref<boolean>(false);

// 登录表单验证规则
export const loginFormRules = {
  account: {
    required: true,
    message: '请输入账号',
    trigger: 'blur',
  },
  passwd: {
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  },
};

// 登录表单
export const loginForm: IExampleLoginForm = reactive({
  account: null,
  passwd: null,
});

export const userInfo: ILoginData = reactive({
  usrName: null,
  age: null,
  sex: null,
  isAdmin: null,
  hobby: null,
});

/**
 * @description: 初始化表单
 * @return 无
 */
export const clearForm = (): void => {
  Object.keys(loginForm).map((key: string) => {
    loginForm[key] = null;
  });
};

/**
 * @description: 校验表单信息，发送登录请求
 * @param {IExampleLoginForm} form 表单内容
 * @param {FormInst} ref n-form 实例
 * @param {MessageApi} message messageBox 实例
 * @return 无
 */
export const handleLogin =  (ref: FormInst, message: MessageApi): void => {
  ref?.validate(async(errors) => {
    if (!errors) {
      login(loginForm,userInfo).then(() => {
        message.success("登录成功")
        showLogin.value = false;
      })
    } else {
      message.error('请把表单信息填写完整');
    }
  });
};
