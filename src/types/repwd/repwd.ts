/*
 * @Author: error: git config user.name & please set dead value or install git
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @Date: 2022-11-19 16:04:38
 * @LastEditTime: 2022-11-19 16:59:48
 * @FilePath: \gcuwomd-oa\src\types\repwd\repwd.ts
 * @Description:
 */

export interface IRepwdModel {
  org: string | null;
  dept: string | null;
  uid: string | null;
}

// export interface IRepwdnResponse {
//   success: boolean;
//   code: number;
//   message: string;
//   result?: {
//     user: {
//       uid: string;
//       userName: string;
//       sex: boolean;
//       orgName: string;
//       orgCode: string;
//       deptName: string;
//       deptCode: string;
//       admin: boolean;
//     };
//   };
// }
