/*
 * @Date: 2021-12-15 18:57:48
 * @LastEditTime: 2021-12-19 15:15:56
 * @FilePath: \imooc-blog\main.js
 */
// #ifndef VUE3
import Vue from "vue";
import App from "./App";

// 通用样式
import "./styles/global.scss";

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
