/*
 * @Author: your name
 * @Date: 2021-12-17 11:10:01
 * @LastEditTime: 2021-12-17 15:26:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./plugins/http/index";
import "./assets/styles/style.css";
createApp(App).use(store).use(router).use(http).mount("#app");
