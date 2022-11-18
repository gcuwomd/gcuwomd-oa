import { AxiosResponse } from 'axios';
import { IResponse } from '../../types/commomResp';
import { ILoginModel } from '../../types/login/login';
import { baseAxios } from '../axiosInst';
const baseURL: string = 'http://127.0.0.1:4523/m1/1885531-0-default/';

export const loginAPI = (
  url: string,
  data: ILoginModel
): Promise<AxiosResponse<IResponse<ILoginModel>>> => {
  return baseAxios.post(url, data, {
    baseURL,
  });
};
