<!--
 * @Date: 2021-12-29 20:03:38
 * @LastEditTime: 2021-12-29 20:55:46
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
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("video", ["videoData"]),
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
