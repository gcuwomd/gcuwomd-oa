export interface ILoginModel {
  uid: string | null;
  password: string | null;
  keepLogin: boolean | null;
  [key: string]: string | boolean | null;
}

export interface ILoginResponse {
  success: boolean;
  code: number;
  message: string;
  result?: {
    user: {
      uid: string;
      userName: string;
      sex: boolean;
      orgName: string;
      orgCode: string;
      deptName: string;
      deptCode: string;
      admin: boolean;
    };
  };
}
