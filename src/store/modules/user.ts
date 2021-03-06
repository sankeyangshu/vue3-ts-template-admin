/*
 * @Description: 用户相关的vuex文件
 * @Author: 王振
 * @Date: 2021-10-26 15:27:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 15:23:03
 */
import { postLoginAPI, loginParams, getUserInfoAPI } from '@/api/login';
import { TOKEN } from '@/constant';
import { setItem, getItem, removeAllItem } from '@/utils/storage';
import { setTimeStamp } from '@/utils/auth';
import router from '@/router';

const state = {
  token: getItem(TOKEN) || '', // 用户认证token
  userInfo: {}, // 用户基本信息
  roles: [], // 权限角色
};

const mutations = {
  // 保存用户token
  SET_TOKEN(state: any, token: string) {
    state.token = token;
  },
  // 保存用户基本信息
  SET_USERINFO(state: any, userInfo: any) {
    state.userInfo = userInfo;
  },
  // 报存用户权限角色
  SET_ROLES: (state: any, roles: any) => {
    state.roles = roles;
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
          setTimeStamp(); // 保存登录时间
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  /**
   * 获取用户信息
   */
  async getUserInfo({ commit }: any) {
    const res = await getUserInfoAPI();
    commit('SET_USERINFO', res);
    return res;
  },
  /**
   * 用户退出登录
   */
  logout({ commit }: any) {
    commit('SET_TOKEN', '');
    commit('SET_USERINFO', {});
    removeAllItem();
    router.push('/login');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
