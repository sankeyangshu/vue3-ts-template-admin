/*
 * @Description: 路由鉴权配置文件
 * @Author: 王振
 * @Date: 2022-03-04 15:04:01
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 17:27:47
 */

import router from '@/router';
import store from '@/store';
// import { ElMessage } from 'element-plus';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; // 进度条样式
import { checkLogin } from '@/utils/auth';

NProgress.configure({ showSpinner: false }); // 进度条配置

const whiteList = ['/login']; // 白名单-不需要权限验证

/**
 * @description: 路由前置守卫
 * @param {*} to 要到哪里去
 * @param {*} from 从哪里来
 * @param {*} next 是否要去
 */
router.beforeEach((to, from, next) => {
  NProgress.start(); // 进度条开始
  const isLogin = checkLogin(); // 获取用户是否登录状态
  if (isLogin) {
    // 用户登录
    if (to.path === '/login') {
      // 如果已登录，重定向到主页
      next({ path: '/' });
      NProgress.done();
    } else {
      // 确定用户是否已通过getInfo获得其权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        // TODO: 此处代码等待完善，功能未开发完成
        // ElMessage({
        //   message: '出现错误，请重新登录',
        //   type: 'error',
        //   duration: 5 * 1000,
        // });
        // 未获得，重定向到错误页
        // next(`/404?redirect=${to.path}`);
        next();
        NProgress.done();
      }
    }
  } else {
    // 用户未登录
    if (whiteList.indexOf(to.path) > -1) {
      // 在免登录白名单中，直接进入
      next();
    } else {
      // 没有访问权限的其他页面将重定向到登录页面
      next('/login');
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // 进度条结束
  NProgress.done();
});
