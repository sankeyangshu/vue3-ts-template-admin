/*
 * @Description: getters文件 - vuex快捷访问文件
 * @Author: 王振
 * @Date: 2021-10-26 15:26:30
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 16:55:58
 */
import { getItem } from '@/utils/storage';
import { generateColors } from '@/utils/theme';
import { MAIN_COLOR } from '@/constant';

const getters = {
  token: (state: any) => state.user.token, // 用户唯一标识token
  roles: (state: any) => state.user.roles, // 用户权限列表
  cssVar: (state: any) => ({ ...state.app.variables, ...generateColors(getItem(MAIN_COLOR)) }), // 全局css样式变量
  sidebarOpened: (state: any) => state.app.sidebarOpened, // 左侧菜单收缩状态
  language: (state: any) => state.app.language, // 国际化-选中语言
  mainColor: (state: any) => state.app.mainColor, // 主题色
  tagsViewList: (state: any) => state.app.tagsViewList, // 快捷标签
};

export default getters;
