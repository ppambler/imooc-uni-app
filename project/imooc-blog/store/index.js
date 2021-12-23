/*
 * @Date: 2021-12-23 16:50:52
 * @LastEditTime: 2021-12-23 17:23:30
 * @FilePath: \imooc-blog\store\index.js
 */
// 1. 导入 Vue 和 Vuex
import Vue from "vue";
// uni-app 已默认安装，不需要重新下载
import Vuex from "vuex";

// 导入 search.js 暴露的对象
import search from "@/modules/search";

// 2. 安装 Vuex 插件
Vue.use(Vuex);
// 3. 创建 store 实例
const store = new Vuex.Store({
  modules: {
    search,
  },
});
export default store;
