/*
 * @Author: xuan
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-16 17:26:12
 * @LastEditTime: 2022-11-21 21:49:54
 * @FilePath: \gcuwomd-oa\src\hooks\ui-hooks\login\register.ui.hooks.ts
 * @Description:
 */
import { onMounted, reactive, ref } from 'vue';
import { FormInst, MessageApi } from 'naive-ui';
import {
  IDepartment,
  Ioptions,
  IOrganization,
  IRegisterForm,
  IRegisterInfo,
} from '../../../types/register';
import {
  register,
  loadOrgOptions,
  loadUserInfo,
} from '../../logic-hooks/login/register.logic.hooks';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';

export const org: any = ref<object>({
  label: null,
  value: null,
});
export const dpt = ref<object>();

export const orgList: Array<IOrganization> = reactive([]);

/**
 * @description: 加载组织列表
 */
loadOrgOptions(orgList);

export const departmentList = ref<Array<IDepartment>>();

export const renderDepList = (orgCode: string): void => {
  RegisterForm.depCode = null;
  orgList.map((org) => {
    if (org.orgCode === orgCode) {
      departmentList.value = org.departments;
    }
  });
};

export const RegisterFormRules = {
  orgCode: {
    required: true,
    message: '请选择组织',
    trigger: ['blur', 'change'],
  },
  depCode: {
    required: true,
    message: '请选择部门',
    trigger: ['blur', 'change'],
  },
  uid: {
    required: true,
    message: '请输入学号',
    trigger: 'blur',
  },
  phone: {
    required: true,
    message: '请输入联系电话',
    trigger: 'blur',
  },
};
export const RegisterForm: IRegisterForm = reactive({
  orgCode: null,
  depCode: null,
  uid: null,
  phone: null,
});
export const clearForm = (): void => {
  Object.keys(RegisterForm).map((key: string) => {
    RegisterForm[key] = null;
  });
};

export const handleRegister = (ref: FormInst, message: MessageApi): void => {
  ref.validate((errors) => {
    if (!errors) {
      register(RegisterForm).then((res) => {
        console.log(res);
      });
    } else {
      message.error('请把表单信息填写完整');
    }
  });
};

export const resModal = ref<boolean>(false);

export const registerInfo: IRegisterInfo = reactive({
  userName: null,
  sex: 0,
});

export const renderUserInfo = (message: MessageApi): void => {
  loadUserInfo(RegisterForm.uid as string, registerInfo, message);
};
