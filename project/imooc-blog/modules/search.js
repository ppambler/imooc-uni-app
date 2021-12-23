/*
 * @Date: 2021-12-23 17:13:08
 * @FilePath: \imooc-blog\modules\search.js
 */
export default {
  // 独立命名空间
  namespaced: true,
  // 通过 state 声明数据
  state: () => ({
    // 搜索历史数据
    searchData: [],
  }),
  // 更改 state 数据的唯一方式是：提交 mutations
  mutations: {
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
    },
    /**
     * 删除指定数据
     */
    removeSearchData(state, index) {
      state.searchData.splice(index, 1);
    },
    /**
     * 删除所有数据
     */
    removeAllSearchData(state) {
      state.searchData = [];
    },
  },
};
