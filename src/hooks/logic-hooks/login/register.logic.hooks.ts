/*
 * @Author: xuan
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-16 17:26:36
 * @LastEditTime: 2022-11-21 21:59:49
 * @FilePath: \gcuwomd-oa\src\hooks\logic-hooks\login\register.logic.hooks.ts
 * @Description:
 */
import { AxiosResponse } from 'axios';
import { MessageApi } from 'naive-ui';
import {
  registerApi,
  getOrgListApi,
  queryUserApi,
} from '../../../api/login/Register.api';
import { IResponse } from '../../../types/commomResp';
import {
  IOrganization,
  IRegisterForm,
  IRegisterInfo,
} from '../../../types/register';

export const register = async (FormData: IRegisterForm): Promise<IResponse> => {
  const res = await registerApi('sys/register', FormData);
  return res.data;
};
export const loadOrgOptions = async (orgList: Array<IOrganization>) => {
  const res = await getOrgListApi('sys/getOrgList');
  Object.assign(orgList, res.data.result);
};

export const loadUserInfo = async (
  uid: string,
  user: IRegisterInfo,
  message: MessageApi
) => {
  const res = await queryUserApi('/sys/getUserInfoById', uid);
  if (res.data.success) {
    Object.assign(user, res.data.result);
  } else {
    Object.assign(user, { userName: '小樱', sex: 0 });
    message.error(res.data.message);
  }
};
