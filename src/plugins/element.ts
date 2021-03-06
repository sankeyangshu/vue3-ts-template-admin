/*
 * @Description: element插件配置文件
 * @Author: 王振
 * @Date: 2022-03-15 13:45:35
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 18:42:50
 */
import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import * as ElIconModules from '@element-plus/icons-vue'; // 统一导入el-icon图标
import store from '@/store';

export default (app: App<Element>) => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn,
  });
  // 统一注册el-icon图标
  for (const iconName in ElIconModules) {
    app.component(iconName, (ElIconModules as any)[iconName]);
  }
};
