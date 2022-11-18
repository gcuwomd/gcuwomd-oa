import { reactive, ref } from 'vue';
import { FormInst, MessageApi } from 'naive-ui';
import { Iregister } from '../../../types/register';
import { register } from '../../logic-hooks/login/register.logic.hooks';
import { Value } from 'sass';

export const orgOptions = [
  {
    label: 'wxw',
    value: 'wxw',
  },
  {
    label: '111',
    value: '111',
  },
  {
    label: '222',
    value: '222',
  },

];

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
  ref?.validate(async (error) => {
    if (!error) {
      register(RegisterForm).then(() => {
        message.success('注册成功');
      });
    } else {
      message.error('11111');
    }
  });
};
