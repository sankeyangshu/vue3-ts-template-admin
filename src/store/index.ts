/*
 * @Description: vuex的入口文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 15:26:08
 */
import { createStore } from 'vuex';
import { user } from './modules';
import getters from './getters';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
  getters,
});
