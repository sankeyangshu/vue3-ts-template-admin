/*
 * @Description: 工具类中公共的函数
 * @Author: 王振
 * @Date: 2021-10-27 09:22:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 15:06:08
 */

import store from '@/store';

/**
 * 验证是否已登录
 * @returns Boolean类型，用来判断是否已登录
 */
export const checkLogin = () => {
  return store.getters.token !== '';
};
