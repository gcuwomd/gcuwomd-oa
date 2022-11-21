/*
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-16 23:17:38
 * @LastEditTime: 2022-11-21 09:35:54
 * @FilePath: \gcuwomd-oa\src\api\login\Register.api.ts
 * @Description: 
 */
import { AxiosResponse } from "axios";
import { Iregister } from "../../types/register";
import { baseAxios } from "../axiosInst";

const baseURL: string = 'http://127.0.0.1:4523/m1/1885531-0-default/';

export const registerApi = (
    url:string,
    data: Iregister
):Promise<AxiosResponse>=>{
    return baseAxios.post(url,data,{
        baseURL
    })
};
export const regirteroptions = (
    geturl:string,
    // getdata:string
):Promise<AxiosResponse> =>{
    return baseAxios.get(geturl,{baseURL})
}