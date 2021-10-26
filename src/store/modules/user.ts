/*
 * @Description: 用户相关的vuex文件
 * @Author: 王振
 * @Date: 2021-10-26 15:27:38
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 15:27:39
 */

const user = {
  state: {
    token: '', // 用户认证token
    userInfo: {}, // 用户基本信息
  },

  mutations: {
    // 保存用户token
    SET_TOKEN(state: any, value: string) {
      state.token = value;
    },
    // 保存用户基本信息
    SET_USERINFO(state: any, value: any) {
      state.userInfo = value;
    },
  },

  actions: {},
};

export default user;
