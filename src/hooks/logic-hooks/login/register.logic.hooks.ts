/*
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-16 17:26:36
 * @LastEditTime: 2022-11-18 14:44:02
 * @FilePath: \gcuwomd-oa\src\hooks\logic-hooks\login\register.logic.hooks.ts
 * @Description: 
 */
import { AxiosResponse } from "axios";
import { registerApi } from "../../../api/login/Register.api";
import { Iregister } from "../../../types/register";

export const register = (
    FormData:Iregister
)=>{
    return registerApi('sys/register',FormData).then((res)=>{
        console.log('1');
        
    })
}
    