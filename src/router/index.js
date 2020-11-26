/*
 * @Author: your name
 * @Date: 2020-11-25 21:13:53
 * @LastEditTime: 2020-11-25 21:15:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/router/index.js
 */
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",            //在这里配置路由
      name: "login",
      component: ()=>import('../view/login'),
    },
  ],
});