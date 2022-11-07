import { RouteRecordRaw,createRouter,createWebHashHistory } from "vue-router";

const index = () => import("../views/system/Index.vue");
const register = () => import("../views/system/register/Register.vue");
const policy = () => import("../views/system/Policy.vue");

const routes:Array<RouteRecordRaw> = [
  {
    path:"/",
    component:index,
    name:"Entrance",
    meta:{
      title:"网信委OA系统"
    }
  },
  {
    path:"/register",
    component:register,
    name:"Register"
  },
  {
    path:"/policy",
    component:policy,
    name:"Policy"
  }
]

const router = createRouter({
  routes,
  history:createWebHashHistory()
});

export default router;