/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-07 21:18:11
 * @LastEditTime: 2022-11-08 11:51:31
 * @FilePath: \gcuwomd-oa\src\hooks\logic-hooks\example\example.logic.hooks.ts
 * @Description:
 */
import { AxiosResponse } from 'axios';
import { loginAPI } from '../../../api/mock/index.api.mock';
import { IExampleLoginForm, ILoginData } from '../../../types/example/example';

/**
 * @description: 发送登录请求
 * @return {*}
 */
export const login = (
  formData: IExampleLoginForm,
  result: ILoginData
) => {
  return loginAPI('/test/post', formData).then((res) => {
    Object.assign(result, res.data.result);
  });
};
