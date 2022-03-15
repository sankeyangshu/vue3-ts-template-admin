/*
 * @Description: getters文件 - vuex快捷访问文件
 * @Author: 王振
 * @Date: 2021-10-26 15:26:30
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 17:28:11
 */
import variables from '@/styles/variables.module.scss';

const getters = {
  token: (state: any) => state.user.token, // 用户唯一标识token
  roles: (state: any) => state.user.roles, // 用户权限列表
  cssVar: (state: any) => variables, // 全局css样式变量
  sidebarOpened: (state: any) => state.app.sidebarOpened, // 左侧菜单收缩状态
  language: (state: any) => state.app.language, // 国际化-选中语言
};

export default getters;
