/*
 * @Author: xuan
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-16 23:17:38
 * @LastEditTime: 2022-11-21 21:59:40
 * @FilePath: \gcuwomd-oa\src\api\login\Register.api.ts
 * @Description:
 */
import { AxiosResponse } from 'axios';
import { IResponse } from '../../types/commomResp';
import {
  IOrganization,
  IRegisterForm,
  IRegisterInfo,
} from '../../types/register';
import { baseAxios } from '../axiosInst';

const baseURL: string = 'http://127.0.0.1:4523/m1/1885531-0-default/';

/**
 * @description: 注册接口
 */
export const registerApi = (
  url: string,
  data: IRegisterForm
): Promise<AxiosResponse<IResponse>> => {
  return baseAxios.post(url, data, {
    baseURL,
  });
};

/**
 * @description: 获取组织列表
 */
export const getOrgListApi = (
  url: string
): Promise<AxiosResponse<IResponse<Array<IOrganization>>>> => {
  return baseAxios.get(url, { baseURL });
};

/**
 * @description: 根据学号查询姓名性别
 */
export const queryUserApi = (
  url: string,
  uid: string
): Promise<AxiosResponse<IResponse<IRegisterInfo>>> => {
  return baseAxios.get(url, { params: { uid }, baseURL });
};
