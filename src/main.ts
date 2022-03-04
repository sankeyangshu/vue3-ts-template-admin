/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 15:53:32
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import './styles/index.scss'; // 全局css
import './config/permission'; // 导入路由鉴权

const app = createApp(App); // 创建实例

app.use(store);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');
