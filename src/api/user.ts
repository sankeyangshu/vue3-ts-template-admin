/*
 * @Description: 用户模块接口文件管理
 * @Author: 王振
 * @Date: 2022-03-22 16:56:30
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 20:27:51
 */

// 导入http
import http from '@/utils/http';
import { CommonObject, CustomSuccessData } from '@/types';

// api接口
const api = {
  userManageList: '/api/user-manage/list',
  userManageBatch: '/user-manage/batch/import',
};

/**
 * 用户管理-员工列表参数数据类型
 */
export type userManageListParams = {
  page: number;
  size: number;
};

/**
 * @description: 获取员工列表
 * @param {userManageListParams} params 分页数据
 * @return {*} 返回员工列表数据
 */
export async function getUserManageListAPI(
  params: userManageListParams
): Promise<CustomSuccessData<any>> {
  return await http.get(api.userManageList, params);
}

/**
 * @description: 上传Excel表格数据
 * @param {CommonObject<string>} 表格数据
 * @return {*} 上传结果
 */
export async function postuserBatchImportAPI(
  params: CommonObject<string>[]
): Promise<CustomSuccessData<any>> {
  return await http.post(api.userManageBatch, params);
}
