/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-16 15:31:04
 * @LastEditTime: 2022-08-16 15:31:19
 * @LastEditors: Sun yinge
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;