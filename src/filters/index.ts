/*
 * @Description: 过滤器
 * @Author: 王振
 * @Date: 2022-03-22 17:56:40
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 18:42:19
 */
import dayjs from 'dayjs';

/**
 * @description: 时间过滤器
 * @param {any} val 时间
 * @param {string} format 时间格式
 * @return {string} 格式化后的时间
 */
export const dateFilter = (val: any, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val);
  }

  return dayjs(val).format(format);
};
