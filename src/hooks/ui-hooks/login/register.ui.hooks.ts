/*
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-16 17:26:12
 * @LastEditTime: 2022-11-21 14:42:44
 * @FilePath: \gcuwomd-oa\src\hooks\ui-hooks\login\register.ui.hooks.ts
 * @Description:
 */
import { onMounted, reactive, ref } from 'vue';
import { FormInst, MessageApi } from 'naive-ui';
import { Ioptions, Iregister } from '../../../types/register';
import {
  register,
  registerget,
} from '../../logic-hooks/login/register.logic.hooks';
import { Value } from 'sass';

export const org: any = ref<object>({
  label: null,
  value: null,
});
export const dpt = ref<object>();

export const orgOptions = 
  registerget().then((res:any) => {
    console.log(res.data);
    org.value = res.data.result.map((item: { orgName: any; orgCode: any }) => ({
      label: item.orgName,
      value: item.orgCode,
    }));
    console.log(org.value);
    
  
  });



export const dptOptions = [
  {
    label: 'xzmsb',
    value: 'xzmsb',
  },
  {
    label: 'wlywb',
    value: 'wlywb',
  },
  {
    label: 'wzywb',
    value: 'wzywb',
  },
  {
    label: 'xxh',
    value: 'xxh',
  },
];

export const RegisterFormRules = {
  organization: {
    require: true,
    message: '请选择组织',
    trigger: ['blur', 'change'],
  },
  department: {
    type: 'array',
    require: true,
    message: '请选择部门',
    trigger: ['blur', 'change'],
  },
  uid: {
    require: true,
    message: '请输入学号',
    trigger: 'blur',
  },
  phone: {
    require: true,
    message: '请输入联系电话',
    trigger: 'blur',
  },
};
export const RegisterForm: Iregister = reactive({
  organization: null,
  department: null,
  uid: null,
  phone: null,
});
export const clearForm = (): void => {
  Object.keys(RegisterForm).map((key: string) => {
    RegisterForm[key] = null;
  });
};

export const handleregister = (ref: FormInst, message: MessageApi): void => {
  ref?.validate(async (errors) => {
    if (!errors) {
      register(RegisterForm).then(() => {
        message.success('注册成功');
      });
    } else {
      message.error('11111');
    }
  });
};
