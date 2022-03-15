/*
 * @Description: element插件配置文件
 * @Author: 王振
 * @Date: 2022-03-15 13:45:35
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 13:58:46
 */
import { App } from 'vue';
// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons-vue';

export default (app: App) => {
  // 统一注册el-icon图标
  for (const iconName in ElIconModules) {
    app.component(iconName, (ElIconModules as any)[iconName]);
  }
};
