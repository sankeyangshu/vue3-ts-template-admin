/*
 * @Description: 全局工具类的状态管理
 * @Author: 王振
 * @Date: 2022-03-15 09:08:49
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 18:16:56
 */
import { getItem, setItem } from '@/utils/storage';
import { LANG, MAIN_COLOR, DEFAULT_COLOR, TAGS_VIEW } from '@/constant';
import variables from '@/styles/variables.module.scss';

const state = {
  sidebarOpened: true, // 控制左侧菜单展开和收缩
  language: getItem(LANG) || 'zh', // 国际化默认配置
  mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR, // 主题色
  variables: variables, // 主题样式表
  tagsViewList: getItem(TAGS_VIEW) || [], // tagsView 快捷标签
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
  // 设置快捷标签，添加快捷标签
  SET_TAGSVIEWLIST(state: any, tag: any) {
    const isFind = state.tagsViewList.find((item: any) => {
      return item.path === tag.path;
    });
    // 处理重复的标签
    if (!isFind) {
      state.tagsViewList.push(tag);
      setItem(TAGS_VIEW, state.tagsViewList);
    }
  },
  // 设置快捷标签，为指定的tag修改title
  SET_CHANGETAGSVIEW(state: any, { index, tag }: { index: number; tag: any }) {
    state.tagsViewList[index] = tag;
    setItem(TAGS_VIEW, state.tagsViewList);
  },
  /**
   * @description: 设置快捷标签，移除标签
   * @param {any} state
   * @param {object} payload 载荷
   */
  SET_REMOVETAGSVIEW(state: any, payload: { type: 'other' | 'right' | 'index'; index: number }) {
    if (payload.type === 'index') {
      // 删除指定标签
      state.tagsViewList.splice(payload.index, 1);
    } else if (payload.type === 'other') {
      // 删除其他标签
      state.tagsViewList.splice(payload.index + 1, state.tagsViewList.length - payload.index + 1);
      state.tagsViewList.splice(0, payload.index);
    } else if (payload.type === 'right') {
      // 删除右侧标签
      state.tagsViewList.splice(payload.index + 1, state.tagsViewList.length - payload.index + 1);
    }
    setItem(TAGS_VIEW, state.tagsViewList);
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
