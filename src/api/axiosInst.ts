/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-08 00:48:10
 * @LastEditTime: 2022-11-08 10:45:21
 * @FilePath: \gcuwomd-oa\src\api\axiosInst.ts
 * @Description: 
 */
import axios from "axios";



export const baseAxios = axios.create({
  headers:{
    "Content-Type":"application/json"
  },
  timeout:5000
})