/*
 * @Description: 路由配置文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 16:14:34
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import layout from '@/layout/index.vue'; // 页面模版

/**
 * 私有路由表
 */
const privateRoutes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel',
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/UserManage/UserManage.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage',
        },
      },
      {
        path: '/user/role',
        component: () => import('@/views/RoleList/RoleList.vue'),
        meta: {
          title: 'roleList',
          icon: 'role',
        },
      },
      {
        path: '/user/permission',
        component: () => import('@/views/PermissionList/PermissionList.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission',
        },
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/UserInfo/UserInfo.vue'),
        meta: {
          title: 'userInfo',
        },
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/Import/index.vue'),
        meta: {
          title: 'excelImport',
        },
      },
    ],
  },
];

/**
 * 公开路由表
 */
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/',
    redirect: '/profile',
    component: layout,
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile/Profile.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user',
        },
      },
      // 404页面
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/ErrorPage/404.vue'),
      },
      // 401页面
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/ErrorPage/401.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes],
});

export default router;
