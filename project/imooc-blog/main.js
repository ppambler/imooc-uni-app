/*
 * @Date: 2021-12-15 18:57:48
 * @LastEditTime: 2021-12-23 16:51:55
 * @FilePath: \imooc-blog\main.js
 */
// #ifndef VUE3
import Vue from "vue";
import App from "./App";

// 导入 vuex 实例
import store from "@/store";

// 通用样式
import "./styles/global.scss";

// 注册过滤器的最佳实践
import * as filters from "./filters";
// console.log(filters); // { hotNumber: ƒ hotNumber(val) }
// console.log(Object.keys(filters)); // ["hotNumber"]
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  store, // 挂载实例对象
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
