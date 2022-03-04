/*
 * @Description: 登录注册功能接口管理
 * @Author: 王振
 * @Date: 2021-10-26 15:24:33
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 17:05:50
 */

// 导入http
import http from '@/utils/http';
import { CustomSuccessData } from '@/types';

// api接口
const api = {
  login: '/api/user/login',
  userInfo: '/api/get/userInfo',
};

/**
 * 登录请求参数类型
 */
export type loginParams = {
  userName: string;
  password: string;
};

/**
 * @description: 用户登录
 * @param {loginParams} params 登录参数
 * @return {*} 返回请求登录接口的结果
 */
export async function postLoginAPI(params: loginParams): Promise<CustomSuccessData<any>> {
  return await http.post(api.login, params);
}

/**
 * @description: 获取用户信息
 * @return {*} 返回用户信息
 */
export async function getUserInfoAPI(): Promise<CustomSuccessData<any>> {
  return await http.get(api.userInfo);
}
