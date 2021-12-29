/*
 * @Date: 2021-12-29 20:47:02
 * @LastEditTime: 2021-12-29 20:49:14
 * @FilePath: \imooc-blog\modules\video.js
 */
export default {
  // 独立命名空间
  namespaced: true,
  // 通过 state 声明数据
  state: () => ({
    videoData: {},
  }),
  // 更改 state 数据的唯一方式是：提交 mutations
  mutations: {
    /**
     * 保存视频对象到 vuex
     */
    setVideoData(state, videoData) {
      state.videoData = videoData;
    },
  },
};
