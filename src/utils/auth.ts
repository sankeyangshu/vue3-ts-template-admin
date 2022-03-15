/*
 * @Description: 工具类中公共的函数
 * @Author: 王振
 * @Date: 2021-10-27 09:22:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 09:49:29
 */

import store from '@/store';
import { getItem, setItem } from './storage';
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant';

/**
 * 验证是否已登录
 * @returns Boolean类型，用来判断是否已登录
 */
export const checkLogin = () => {
  return store.getters.token !== '';
};

/**
 * @description: 获取时间戳
 * @return 时间戳
 */
export const getTimeStamp = () => {
  return getItem(TIME_STAMP);
};

/**
 * @description: 设置时间戳
 */
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now());
};

/**
 * @description: 判断是否超时
 */
export const isCheckTimeout = () => {
  // 当前时间
  const currentTime = Date.now();
  // 缓存时间
  const timeStamp = getTimeStamp();
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
};

/**
 * @description: 判断是否为外部资源
 * @param {string} path 资源路径
 * @return {*} 判断结果
 */
export const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
