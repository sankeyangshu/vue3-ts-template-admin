/*
 * @Description: 登录注册功能接口管理
 * @Author: 王振
 * @Date: 2021-10-26 15:24:33
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 15:24:34
 */

// 导入http
import http from '@/utils/http';
import { CustomSuccessData } from '@/types';

// 登录请求参数类型
interface loginParams {
  userName: string;
  passWord: string;
}

/**
 * @description: 用户登录
 * @param {loginParams} params 登录参数
 * @return {*} 返回请求登录接口的结果
 */
export async function postLoginAPI(params: loginParams): Promise<CustomSuccessData<any>> {
  return await http.post('/api/user/login', params);
}
