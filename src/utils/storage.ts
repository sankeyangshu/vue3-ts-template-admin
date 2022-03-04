/*
 * @Description: storage操作方法
 * @Author: 王振
 * @Date: 2022-03-04 14:31:21
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 14:40:10
 */

/**
 * @description: 缓存数据
 * @param {string} key 数据名称
 * @param {any} value 数据值
 */
export const setItem = (key: string, value: any) => {
  // 判断value的数据类型
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  // 缓存数据
  localStorage.setItem(key, value);
};

/**
 * @description: 获取数据
 * @param {string} key 数据名称
 * @return {*} 数据值
 */
export const getItem = (key: string) => {
  const data = localStorage.getItem(key) as string;
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

/**
 * @description: 删除指定数据
 * @param {string} key
 */
export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * @description: 删除所有数据
 */
export const removeAllItem = () => {
  localStorage.clear();
};
