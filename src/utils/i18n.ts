/*
 * @Description: 国际化工具函数
 * @Author: 王振
 * @Date: 2022-03-15 17:17:16
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 16:52:25
 */
import i18n from '@/i18n';
import store from '@/store';
import { watch } from 'vue';

/**
 * @description: 国际化-标题
 * @param {string} title 标题
 * @return {string} 国际化标题
 */
export const generateTitle = (title: string) => {
  return i18n.global.t('msg.route.' + title);
};

/**
 * @description: 监听语言变化，同时执行callback
 * @param {Function} cbs 回调函数们
 * @return {*}
 */
export const watchSwitchLang = (...cbs: Function[]) => {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language));
    }
  );
};
