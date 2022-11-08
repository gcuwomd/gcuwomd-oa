/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-08 10:56:05
 * @LastEditTime: 2022-11-08 11:05:27
 * @FilePath: \gcuwomd-oa\src\types\commomResp.d.ts
 * @Description: 
 */
export interface IResponse<T>{
  success:boolean;
  code:number;
  message:string;
  result?:T
}