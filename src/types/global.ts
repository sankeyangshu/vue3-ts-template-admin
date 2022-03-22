/*
 * @Description: 全局的类型推断
 * @Author: 王振
 * @Date: 2022-03-22 20:13:03
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 20:15:25
 */

/**
 * 全局字符串对象类型
 */
export type CommonObject<T = any> = Record<string, T>;
