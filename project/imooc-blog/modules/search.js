/*
 * @Date: 2021-12-23 17:13:08
 * @FilePath: \imooc-blog\modules\search.js
 */
const STORAGE_KEY = "search-list";

export default {
  // 独立命名空间
  namespaced: true,
  // 通过 state 声明数据
  state: () => ({
    // 优先从 storage 中读取搜索历史数据
    searchData: uni.getStorageSync(STORAGE_KEY) || [],
  }),
  // 更改 state 数据的唯一方式是：提交 mutations
  mutations: {
    /**
     * 保存数据到 storage
     */
    saveToStorage(state) {
      // 把数据保存到本地存储
      uni.setStorage({
        key: STORAGE_KEY,
        data: state.searchData,
      });
    },
    /**
     * 添加数据
     * state -> mutation 中必然存在的参数，表示当前模块的 state，类似调用事件处理函数时，浏览器默认传的第一个参数就是 event 对象
     */
    addSearchData(state, val) {
      if (!val) return;
      // 1. 如果数据已存在，则删除
      const index = state.searchData.findIndex((item) => item === val);
      if (index !== -1) {
        state.searchData.splice(index, 1);
      }
      // 2. 新的搜索内容需要先于旧的搜索内容展示
      state.searchData.unshift(val);
      // 调用 saveToStorage
      this.commit("search/saveToStorage");
    },
    /**
     * 删除指定数据
     */
    removeSearchData(state, index) {
      state.searchData.splice(index, 1);
      // 调用 saveToStorage
      this.commit("search/saveToStorage");
    },
    /**
     * 删除所有数据
     */
    removeAllSearchData(state) {
      state.searchData = [];
      // 调用 saveToStorage
      // 在 vuex 的模块助攻，通过 this.commit 函数调用 mutation
      // this.commit 函数接收一个字符串作为当前 mutation 的路径 ，this.commit('模块名/mutation名')
      this.commit("search/saveToStorage");
    },
  },
};
