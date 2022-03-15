/*
 * @Description: 国际化工具函数
 * @Author: 王振
 * @Date: 2022-03-15 17:17:16
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 17:19:19
 */
import i18n from '@/i18n';

/**
 * @description: 国际化-标题
 * @param {string} title
 * @return {*}
 */
export const generateTitle = (title: string) => {
  return i18n.global.t('msg.route.' + title);
};
