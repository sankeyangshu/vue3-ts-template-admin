/*
 * @Description: 用户相关的vuex文件
 * @Author: 王振
 * @Date: 2021-10-26 15:27:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 15:00:54
 */
import { postLoginAPI, loginParams } from '@/api/login';
import { TOKEN } from '@/constant';
import { setItem, getItem } from '@/utils/storage';

const state = {
  token: getItem(TOKEN) || '', // 用户认证token
  userInfo: {}, // 用户基本信息
  roles: [], // 权限角色
};

const mutations = {
  // 保存用户token
  SET_TOKEN(state: any, value: string) {
    state.token = value;
  },
  // 保存用户基本信息
  SET_USERINFO(state: any, value: any) {
    state.userInfo = value;
  },
  // 报存用户权限角色
  SET_ROLES: (state: any, value: any) => {
    state.roles = value;
  },
};

const actions = {
  /**
   * 用户登录
   */
  login({ commit }: any, userInfo: loginParams) {
    const { userName, password } = userInfo;
    return new Promise<void>((resolve, reject) => {
      postLoginAPI({ userName: userName.trim(), password: password })
        .then((res) => {
          const { data } = res;
          commit('SET_TOKEN', data.token); // 保存用户token
          setItem(TOKEN, data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
