/*
 * @Date: 2021-12-23 17:13:08
 * @FilePath: \imooc-blog\modules\search.js
 */
export default {
  // 独立命名空间
  namespaced: true,
  // 通过 state 声明数据
  state: () => {
    return {
      msg: "hello vuex",
    };
  },
};
