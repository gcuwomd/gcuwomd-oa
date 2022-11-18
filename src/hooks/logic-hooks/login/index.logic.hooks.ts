import { formDark } from 'naive-ui';
import { loginAPI } from '../../../api/login/index.api';
import { ILoginData } from '../../../types/example/example';
import { ILoginModel, ILoginResponse } from '../../../types/login/login';

export const loginRequest = (FormData: ILoginModel) => {
  return loginAPI('/sys/login', FormData)
};
