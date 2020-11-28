/*
 * @Author: your name
 * @Date: 2020-11-25 21:13:53
 * @LastEditTime: 2020-11-28 15:02:38
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
      component: ()=>import('../view/login')
    },
    {
      path: "/index",            //在这里配置路由
      name: "index",
      component: ()=>import('../view/index')
    },
    {
      path: "/person",            //在这里配置路由
      name: "person",
      component: ()=>import('../view/person')
    }
  ]
});