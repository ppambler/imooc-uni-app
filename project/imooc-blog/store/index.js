/*
 * @Date: 2021-12-23 16:50:52
 * @LastEditTime: 2021-12-27 22:49:13
 * @FilePath: \imooc-blog\store\index.js
 */
// 1. 导入 Vue 和 Vuex
import Vue from "vue";
// uni-app 已默认安装，不需要重新下载
import Vuex from "vuex";

// 导入 search.js 暴露的对象
import search from "@/modules/search";
import user from "@/modules/user";

// 2. 安装 Vuex 插件
Vue.use(Vuex);
// 3. 创建 store 实例
const store = new Vuex.Store({
  modules: {
    search,
    user,
  },
});
export default store;
