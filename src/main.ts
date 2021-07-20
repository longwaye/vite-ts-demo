/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-14 13:45:30
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-15 10:35:27
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import filters from './utils/filters';

import './assets/styles/reset.css';
import './assets/styles/common.css';
import './assets/fonts/iconfont/iconfont.css';

const app = createApp(App);

// 全局过滤器
app.config.globalProperties.$filters = filters;

app.use(router)
app.mount('#app')
