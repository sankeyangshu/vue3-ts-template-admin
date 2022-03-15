/*
 * @Description: vuex的入口文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 09:13:50
 */
import { createStore } from 'vuex';
import user from './modules/user';
import app from './modules/app';
import getters from './getters';

export default createStore({
  modules: {
    user,
    app,
  },
  getters,
});
