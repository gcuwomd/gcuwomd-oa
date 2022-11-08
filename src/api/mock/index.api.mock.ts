/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-08 10:38:34
 * @LastEditTime: 2022-11-08 11:35:26
 * @FilePath: \gcuwomd-oa\src\api\mock\index.api.mock.ts
 * @Description: mock接口测试示例
 */
import { AxiosResponse } from 'axios';
import { IResponse } from '../../types/commomResp';
import { IExampleLoginForm, ILoginData } from '../../types/example/example';
import { baseAxios } from '../axiosInst';

const baseURL: string = 'http://127.0.0.1:4523/m1/1885531-0-default/';

/**
 * @description: 登录接口
 * @param {string} url 接口url
 * @param {IExampleLoginForm} data 登录表单信息
 * @return {Promise<AxiosResponse>} AxiosResponse
 */
export const loginAPI = (
  url: string,
  data: IExampleLoginForm
): Promise<AxiosResponse<IResponse<ILoginData>>> => {
  return baseAxios.post(url, data,{
    baseURL
  });
};
