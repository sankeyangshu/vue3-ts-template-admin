/*
 * @Description: 路由配置文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-27 09:13:58
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue'),
  },
  {
    path: '/404',
    name: 'ErrorPage',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/ErrorPage/ErrorPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
