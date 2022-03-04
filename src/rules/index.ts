/*
 * @Description: 表单校验规则
 * @Author: 王振
 * @Date: 2022-03-04 11:15:42
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 14:17:40
 */

/**
 * @description: 登录密码校验规则
 * @param {any} rule 校验规则
 * @param {any} value 密码
 * @param {any} callback 回调函数
 * @return {*} 是否通过校验
 */
export const validatePassword = (rule: any, value: any, callback: any) => {
  if (value.length < 6) {
    callback(new Error('密码不能少于6位'));
  } else {
    callback();
  }
};
