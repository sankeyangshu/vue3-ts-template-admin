/*
 * @Description: eslint 配置文件
 * @Author: 王振
 * @Date: 2021-09-23 15:26:38
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-23 15:26:49
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
