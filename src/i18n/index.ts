/*
 * @Description: i18n 国际化 配置文件
 * @Author: 王振
 * @Date: 2022-03-15 15:13:06
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 17:31:14
 */

import { createI18n } from 'vue-i18n';
import zhLocale from './lang/zh';
import enLocale from './lang/en';
import store from '@/store';

const messages = {
  en: {
    msg: {
      ...enLocale,
    },
  },
  zh: {
    msg: {
      ...zhLocale,
    },
  },
};

/**
 * @description: 返回当前选中的语言
 * @param {*}
 * @return {*}
 */
function getLanguage() {
  return store && store.getters && store.getters.language;
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages,
});

export default i18n;
