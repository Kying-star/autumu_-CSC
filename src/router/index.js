/*
 * @Author: your name
 * @Date: 2020-11-25 21:13:53
 * @LastEditTime: 2020-11-29 15:30:03
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
      path: "/", //在这里配置路由
      name: "login",
      component: () => import("../view/login"),
    },
    {
      path: "/index", //在这里配置路由
      name: "index",
      component: () => import("../view/index"),
    },
    {
      path: "/indexTopic", //在这里配置路由
      name: "index",
      component: () => import("../view/index_topic"),
    },
    {
      path: "/person", //在这里配置路由
      name: "person",
      component: () => import("../view/person"),
    },
    {
      path: "/register", //在这里配置路由
      name: "register",
      component: () => import("../view/register"),
    },
    {
      path: "/history", //在这里配置路由
      name: "history",
      component: () => import("../view/history"),
    },
    {
      path: "/tiezi", //在这里配置路由
      name: "tiezi",
      component: () => import("../view/tiezi"),
    },
    {
      path: "/follow", //在这里配置路由
      name: "follow",
      component: () => import("../view/follow"),
    },
    {
      path: "/updataCall", //在这里配置路由
      name: "updataCall",
      component: () => import("../view/updataCall"),
    },
    {
      path: "/updataFind", //在这里配置路由
      name: "updataFind",
      component: () => import("../view/updataFind"),
    },
  ],
});
