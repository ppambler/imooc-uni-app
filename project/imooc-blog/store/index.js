/*
 * @Date: 2021-12-23 16:50:52
 * @LastEditTime: 2021-12-23 16:50:55
 * @FilePath: \imooc-blog\store\index.js
 */
// 1. 导入 Vue 和 Vuex
import Vue from "vue";
// uni-app 已默认安装，不需要重新下载
import Vuex from "vuex";

// 2. 安装 Vuex 插件
Vue.use(Vuex);
// 3. 创建 store 实例
const store = new Vuex.Store({});
export default store;
