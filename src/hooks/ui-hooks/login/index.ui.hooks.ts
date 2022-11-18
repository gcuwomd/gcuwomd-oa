/*
 * @Author: error: git config user.name & please set dead value or install git
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @Date: 2022-11-15 16:46:58
 * @LastEditTime: 2022-11-18 15:54:52
 * @FilePath: \gcuwomd-oa\src\hooks\ui-hooks\login\index.ui.hooks.ts
 * @Description:
 */
import { FormInst, MessageApi } from 'naive-ui';
import { reactive, ref } from 'vue';
import { ILoginModel } from '../../../types/login/login';
import { loginRequest } from '../../logic-hooks/login/index.logic.hooks';
export const loginModel: ILoginModel = reactive({
  uid: null,
  password: null,
  keepLogin: null,
});

//表单验证规则
export const loginRules = {
  loginModel: {
    uid: {
      require: true,
      message: '请输入账号',
      trigger: 'blur',
    },
    password: {
      require: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  },
};
export const handleLogin = (ref: FormInst, message: MessageApi): void => {
  ref.validate((error) => {
    if (!error) {
      loginRequest(loginModel).then((res) => {
        if (res.data.success) {
          message.success(res.data.message);
        } else {
          message.error(res.data.message);
        }
      });
    }
  });
};
