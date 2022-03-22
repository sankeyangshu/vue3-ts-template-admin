/*
 * @Description: Excel导入组件工具函数
 * @Author: 王振
 * @Date: 2022-03-22 19:49:32
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 20:14:32
 */
import { CommonObject } from '@/types';

/**
 * 导入数据对应表
 */
export const USER_RELATIONS: CommonObject<string> = {
  姓名: 'username',
  联系方式: 'mobile',
  角色: 'role',
  开通时间: 'openTime',
};

/**
 * @description: 解析 excel 导入的时间格式
 * @param {number} numb 时间
 * @return {string} 格式化后的时间字符串
 */
export const formatDate = (numb: number) => {
  const time = new Date((numb - 1) * 24 * 3600000 + 1);
  // setYear()从 ECMAScript v3 起，JavaScript 实现不再要求使用该函数，而使用 setFullYear() 函数代替它。
  time.setFullYear(time.getFullYear() - 70);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate() - 1;
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date);
};
