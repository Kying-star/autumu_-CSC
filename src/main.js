/*
 * @Author: your name
 * @Date: 2020-11-25 15:06:27
 * @LastEditTime: 2020-11-29 20:07:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/main.js
 */
import Vue from 'vue';
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router/index.js";
import store from "./store/index.js"
Vue.use(ElementUI);
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});