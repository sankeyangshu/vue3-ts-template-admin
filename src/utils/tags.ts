/*
 * @Description: 快捷标签工具函数
 * @Author: 王振
 * @Date: 2022-03-16 16:34:23
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 16:39:02
 */

/**
 * 不用保存的路由白名单
 */
const whiteList = ['/login', '/404', '/401'];

/**
 * @description: 是否需要被保存
 * @param {string} path 路由路径
 * @return {boolean} 判断结果
 */
export const isTags = (path: string) => {
  return !whiteList.includes(path);
};
