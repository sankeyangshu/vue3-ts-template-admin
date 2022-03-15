/*
 * @Description: 全局工具类的状态管理
 * @Author: 王振
 * @Date: 2022-03-15 09:08:49
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 15:22:34
 */
import { getItem, setItem } from '@/utils/storage';
import { LANG } from '@/constant';

const state = {
  sidebarOpened: true, // 控制左侧菜单展开和收缩
  language: getItem(LANG) || 'zh', // 国际化默认配置
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
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
