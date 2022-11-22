/*
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-16 17:29:32
 * @LastEditTime: 2022-11-21 09:51:48
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
export interface Ioptions{
    label:string|null
    value:string|null
}