/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 10:42:13
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import i18n from '@/i18n'; // 国际化
import installIcons from '@/icons'; // 导入svg Icon
import installElement from '@/plugins/element'; // 导入element
import './styles/index.scss'; // 全局css
import './config/permission'; // 导入路由鉴权

const app = createApp(App); // 创建实例

installIcons(app); // 全局注册svg图标
installElement(app); // 导入element和全局注册element 图标

app.use(store);
app.use(router);
app.use(i18n);
app.mount('#app');
