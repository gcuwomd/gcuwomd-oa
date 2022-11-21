/*
 * @Author: xuan
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-16 17:29:32
 * @LastEditTime: 2022-11-21 21:28:45
 * @FilePath: \gcuwomd-oa\src\types\register.d.ts
 * @Description:
 */
export interface IRegisterForm {
  orgCode: string | null;
  depCode: string | null;
  uid: string | null;
  phone: string | null;
  [key: string]: string | null;
}
export interface Ioptions {
  label: string | null;
  value: string | null;
}

export interface IDepartment {
  depName: string;
  depCode: string;
  [key: string]: string;
}
export interface IOrganization {
  orgName: string;
  orgCode: string;
  departments?: Array<IDepartment>;
}

export interface IRegisterInfo {
  userName: string | null;
  sex: number;
}
