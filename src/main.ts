/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-27 09:41:53
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import './styles/base.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './config/permission';

const app = createApp(App); // 创建实例

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
