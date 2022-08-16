/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-16 15:27:10
 * @LastEditTime: 2022-08-16 15:45:02
 * @LastEditors: Sun yinge
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



createApp(App).use(router).use(ElementPlus).mount('#app')