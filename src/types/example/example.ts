/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-07 22:09:07
 * @LastEditTime: 2022-11-08 11:08:50
 * @FilePath: \gcuwomd-oa\src\types\example\example.ts
 * @Description: 
 */
export interface IExampleLoginForm{
  account: string | null;
  passwd: string | null;
  [key:string]:string | null;
}

export interface ILoginData{
  usrName:string | null;
  age:number | null;
  sex:boolean | null;
  isAdmin:boolean | string | null;
  hobby:Array<string> | null;
}