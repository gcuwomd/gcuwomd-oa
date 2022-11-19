/*
 * @Author: error: git config user.name & please set dead value or install git
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @Date: 2022-11-19 16:02:33
 * @LastEditTime: 2022-11-19 17:21:50
 * @FilePath: \gcuwomd-oa\src\hooks\ui-hooks\repwd\index.ui.hooks.ts
 * @Description:
 */
import { FormInst, MessageApi } from 'naive-ui';
import { reactive, ref } from 'vue';
import router from '../../../router';
import { IRepwdModel } from '../../../types/repwd/repwd';
// import { repwdRequest } from '../../logic-hooks/repwd/index.logic.hooks';
export const repwdModel: IRepwdModel = reactive({
  org: null,
  dept: null,
  uid: null,
});

export const repwdRules = {
  repwdModel: {
    org: {
      require: true,
      message: '请填写组织',
      trigger: 'blur',
    },
    dept: {
      require: true,
      message: '请填写部门',
      trigger: 'blur',
    },
    uid: {
      require: true,
      message: '请填写账号',
      trigger: 'blur',
    },
  },
};
export const handleRepwd = (ref: FormInst, message: MessageApi): void => {
  // ref.validate((error) => {
  //   if (!error) {
  //     repwdRequest(repwdModel).then((res) => {
  //       if (res.data.success) {
  //         message.success(res.data.message);
  //       } else {
  //         message.error(res.data.message);
  //       }
  //     });
  //   }
  // });
};

export const backlogin = (): void => {
  router.push({ path: '/login' });
};
