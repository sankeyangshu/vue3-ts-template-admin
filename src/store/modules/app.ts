/*
 * @Description: 全局工具类的状态管理
 * @Author: 王振
 * @Date: 2022-03-15 09:08:49
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 09:12:09
 */
const state = {
  sidebarOpened: true, // 控制左侧菜单展开和收缩
};

const mutations = {
  // 保存左侧菜单是否收缩状态
  SET_SIDEBAROPENED(state: any) {
    state.sidebarOpened = !state.sidebarOpened;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
