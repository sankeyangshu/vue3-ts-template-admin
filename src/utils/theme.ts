/*
 * @Description: 主题色工具函数
 * @Author: 王振
 * @Date: 2022-03-16 11:26:54
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 12:49:08
 */
import formula from '@/constant/formula.json';
import rgbHex from 'rgb-hex';
import color from 'css-color-function';
import axios from 'axios';

/**
 * @description: 把生成的样式表写入到 style 中
 * @param {any} newStyle 新的样式表
 */
export const writeNewStyle = (newStyle: any) => {
  const style = document.createElement('style');
  style.innerText = newStyle;
  document.head.appendChild(style);
};

/**
 * @description: 根据主题色，生成最新的样式表
 * @param {any} parimaryColor 主题色
 * @return {*} 样式表
 */
export const generateNewStyle = async (parimaryColor: any) => {
  // 1. 根据主题色生成色值表
  const colors = generateColors(parimaryColor);

  // 2. 获取当前 element-plus 的默认样式表，并且把需要进行替换的色值打上标记
  let cssText = await getOriginalStyle();

  // 3. 遍历生成的色值表，在默认样式表中进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + colors[key]);
  });

  // 4. 返回处理完成的样式表
  return cssText;
};

/**
 * @description: 根据主题色生成色值表
 * @param {any} primary 主题色
 * @return {*} 色值表
 */
export const generateColors = (primary: any) => {
  // 如果主题色不存在，直接返回
  if (!primary) return;

  // 色值表
  const colors: any = {
    primary,
  };

  // 生成色值表
  Object.keys(formula).forEach((key) => {
    const value = (formula as any)[key].replace(/primary/g, primary);
    colors[key] = '#' + rgbHex(color.convert(value));
  });

  return colors;
};

/**
 * @description: 获取当前 element-plus 的默认样式表
 */
const getOriginalStyle = async () => {
  // https://unpkg.com/element-plus@2.1.3/dist/index.css  element样式
  const version = require('element-plus/package.json').version;
  const url = `https://unpkg.com/element-plus@${version}/dist/index.css`;
  const { data } = await axios(url);

  // 把获取到的数据筛选为原样式模板
  return getStyleTemplate(data);
};

/**
 * @description: 把需要进行替换的色值打上标记
 */
const getStyleTemplate = (data: any) => {
  // element-plus 默认色值
  const colorMap: any = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9',
  };

  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key];
    data = data.replace(new RegExp(key, 'ig'), value);
  });

  return data;
};
