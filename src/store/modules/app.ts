/*
 * @Description: 全局工具类的状态管理
 * @Author: 王振
 * @Date: 2022-03-15 09:08:49
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 13:04:14
 */
import { getItem, setItem } from '@/utils/storage';
import { LANG, MAIN_COLOR, DEFAULT_COLOR } from '@/constant';
import variables from '@/styles/variables.module.scss';

const state = {
  sidebarOpened: true, // 控制左侧菜单展开和收缩
  language: getItem(LANG) || 'zh', // 国际化默认配置
  mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR, // 主题色
  variables: variables, // 主题样式表
};

const mutations = {
  // 保存左侧菜单是否收缩状态
  SET_SIDEBAROPENED(state: any) {
    state.sidebarOpened = !state.sidebarOpened;
  },
  // 设置国际化
  SET_LANGUAGE(state: any, lang: any) {
    setItem(LANG, lang);
    state.language = lang;
  },
  // 设置主题色
  SET_MAINCOLOR(state: any, newColor: any) {
    setItem(MAIN_COLOR, newColor);
    state.mainColor = newColor;
    state.variables.menuBg = newColor;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
