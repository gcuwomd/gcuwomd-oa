/*
 * @Author: error: git config user.name & please set dead value or install git
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @Date: 2022-11-19 16:41:14
 * @LastEditTime: 2022-11-19 16:44:44
 * @FilePath: \gcuwomd-oa\src\api\repwd\index.api.ts
 * @Description:
 */
import { AxiosResponse } from 'axios';
import { IResponse } from '../../types/commomResp';
import { IRepwdModel } from '../../types/repwd/repwd';
import { baseAxios } from '../axiosInst';
const baseURL: string = 'http://127.0.0.1:4523/m1/1885531-0-default/';

export const repwdAPI = (
  url: string,
  data: IRepwdModel
): Promise<AxiosResponse<IResponse<IRepwdModel>>> => {
  return baseAxios.post(url, data, {
    baseURL,
  });
};
