/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-08 10:56:05
 * @LastEditTime: 2022-11-21 16:57:28
 * @FilePath: \gcuwomd-oa\src\types\commomResp.d.ts
 * @Description:
 */
export interface IResponse<T = any> {
  success: boolean;
  code: number;
  message: string;
  result?: T;
}