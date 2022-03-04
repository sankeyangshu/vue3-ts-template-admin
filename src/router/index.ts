/*
 * @Description: 路由配置文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 14:59:37
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

/**
 * 公开路由表
 */
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export default router;
