/*
 * @Date: 2021-12-29 20:47:02
 * @LastEditTime: 2021-12-29 23:36:29
 * @FilePath: \imooc-blog\modules\video.js
 */
export default {
  // 独立命名空间
  namespaced: true,
  // 通过 state 声明数据
  state: () => ({
    videoData: {
      id: "8094282426594482339",
      title: "2首民谣《二泉映月》《爱情路上风雨多》句句独特，希望你会喜欢",
      author_avatar:
        "https://pic.rmb.bdstatic.com/bjh/user/2d39834af3abb3648bf481159561c25f.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=11152",
      poster_small:
        "https://tukuimg.bdstatic.com/processed/2cfa34e3dc199083960fdc0281edd472.jpeg@s_0,w_660,h_370,q_80",
      poster_big:
        "https://tukuimg.bdstatic.com/processed/2cfa34e3dc199083960fdc0281edd472.jpeg@s_0,w_660,h_370,q_80",
      poster_pc:
        "https://tukuimg.bdstatic.com/processed/2cfa34e3dc199083960fdc0281edd472.jpeg@s_0,w_660,h_370,q_80,f_webp",
      source_name: "小于歌唱",
      play_url:
        "http://vd2.bdstatic.com/mda-mjackqq9kjp5tdpi/cae_h264_nowatermark/1633943179857973669/mda-mjackqq9kjp5tdpi.mp4?v_from_s=hkapp-haokan-hbe",
      duration: "06:37",
      url: "https://haokan.hao123.com/v?vid=8094282426594482339&pd=&context=",
      show_tag: 0,
      publish_time: "2021 年 06 月 13 日",
      is_pay_column: 0,
      like: "163",
      comment: "41",
      playcnt: "3020",
      fmplaycnt: "3020 次播放",
      fmplaycnt_2: "3020",
      outstand_tag: "",
    },
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
