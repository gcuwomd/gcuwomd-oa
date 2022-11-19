/*
 * @Author: taozhiyaoyao
 * @LastEditors: kifor
 * @Date: 2022-11-06 15:33:50
 * @LastEditTime: 2022-11-19 17:33:25
 * @FilePath: \gcuwomd-oa\src\router\index.ts
 * @Description:
 */
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const index = () => import('../views/system/Index.vue');
const register = () => import('../views/system/register/Register.vue');
const policy = () => import('../views/system/Policy.vue');
const example = () => import('../views/example/Index.vue');
const login = () => import('../views/system/login/Login.vue');
const repwd = () => import('../views/system/repwd/repwd.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: index,
    name: 'Entrance',
    meta: {
      title: '网信委OA系统',
    },
  },
  {
    path: '/register',
    component: register,
    name: 'Register',
  },
  {
    path: '/policy',
    component: policy,
    name: 'Policy',
  },
  {
    path: '/example',
    component: example,
  },
  {
    path: '/login',
    component: login,
    name: 'Login',
  },
  {
    path: '/repwd',
    component: repwd,
    name: 'repwd',
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
