/*
 * @Description: 封装axios
 * @Author: 王振
 * @Date: 2022-03-04 12:22:43
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-08 17:05:04
 */

// 导入axios
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// 导入vuex，获取token
import store from '@/store';
// element提示框组件
import { ElMessage } from 'element-plus';
import { isCheckTimeout } from './auth';

// 1. 创建新的axios实例
const instance = axios.create({
  // 公共接口
  baseURL: process.env.VUE_APP_BASE_URL,
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5000,
});

// 2. 配置请求头，全局的 axios 默认值
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 流程组件 content-type
instance.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8'; // 流程组件 content-type

// 3.添加一个请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
    // 每次发送请求之前判断vuex中是否存在token,如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    const token = store.getters.token;
    if (token) {
      // 判断用户token是否超时
      if (isCheckTimeout()) {
        // 退出操作
        store.dispatch('user/logout');
        return Promise.reject(new Error('token 失效'));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 数据转换,判断数据格式为formdata还是json格式
    // json格式
    config.data = JSON.stringify(config.data);
    return config;
  },
  (error) => {
    // 出现请求错误，清除toast
    ElMessage({
      message: '请求错误，请稍后再试',
      type: 'warning',
      duration: 5 * 1000,
    });
    console.info('error: ');
    console.info(error);
    return Promise.reject(error);
  }
);

// 4. 添加一个响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    if (status === 200) {
      // 接口网络请求成功，关闭等待提示
      if (data.code === 0) {
        // 接口请求结果正确
        return data;
      } else {
        ElMessage({
          message: data.message || 'Error',
          type: 'error',
          duration: 5 * 1000,
        });
        return Promise.reject(data);
      }
    }
  },
  (error: AxiosError) => {
    // 响应失败，关闭等待提示
    // token超时处理
    if (error.response && error.response.data && error.response.data.code === 401) {
      // token超时
      store.dispatch('user/logout');
    }
    // 提示错误信息
    if (JSON.stringify(error).includes('Network Error')) {
      ElMessage({
        message: '网络超时',
        type: 'error',
        duration: 5 * 1000,
      });
    } else {
      ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
      });
    }
    console.info(error);
    return Promise.reject(error);
  }
);

// 5. 导出文件
export default instance;
