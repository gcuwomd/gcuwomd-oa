/*
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-16 17:29:32
 * @LastEditTime: 2022-11-18 18:05:25
 * @FilePath: \gcuwomd-oa\src\types\register.ts
 * @Description: 
 */
export interface Iregister{
    organization:string|null
    department:string|null
    uid:string|null
    phone:string|null
    [key:string]:string|null;
}