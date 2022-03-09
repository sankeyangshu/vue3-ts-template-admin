/*
 * @Description: getters文件 - vuex快捷访问文件
 * @Author: 王振
 * @Date: 2021-10-26 15:26:30
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-09 12:14:33
 */
import variables from '@/styles/variables.scss';

const getters = {
  token: (state: any) => state.user.token, // 用户唯一标识token
  roles: (state: any) => state.user.roles, // 用户权限列表
  cssVar: (state: any) => variables,
};

export default getters;
