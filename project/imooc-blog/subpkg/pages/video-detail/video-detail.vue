<!--
 * @Date: 2021-12-29 20:03:38
 * @LastEditTime: 2021-12-29 23:10:09
 * @FilePath: \imooc-blog\subpkg\pages\video-detail\video-detail.vue
-->
<template>
  <view>
    <view class="video-detail-container">
      <view class="video-box">
        <video
          id="myVideo"
          class="video"
          :src="videoData.play_url"
          :danmu-list="danmuList"
          enable-danmu
          danmu-btn
          controls
        />

        <hot-video-info :data="videoData" />
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
import { getVideoDanmuList } from "@/api/video";
export default {
  data() {
    return {
      // 弹幕数据源
      danmuList: [],
    };
  },
  computed: {
    ...mapState("video", ["videoData"]),
  },
  created() {
    this.loadVideoDanmuList();
  },
  methods: {
    /**
     * 获取弹幕数据
     */
    async loadVideoDanmuList() {
      const { data: res } = await getVideoDanmuList({
        videoId: this.videoData.id,
      });
      this.danmuList = res.list;
      console.log(
        "🚀 ~ file: video-detail.vue ~ line 50 ~ loadVideoDanmuList ~ this.danmuList",
        this.danmuList
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.video-detail-container {
  .video-box {
    background-color: $uni-bg-color;
    position: sticky;
    top: 0;
    z-index: 9;
    .video {
      width: 100%;
      height: 230px;
    }
  }
}
</style>
