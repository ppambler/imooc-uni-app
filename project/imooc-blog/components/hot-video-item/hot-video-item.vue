<!--
 * @Date: 2021-12-29 18:37:12
 * @LastEditTime: 2021-12-29 19:02:30
 * @FilePath: \imooc-blog\components\hot-video-item\hot-video-item.vue
-->
<template>
  <view class="hot-video-item-container">
    <view class="video-box">
      <video
        id="myVideo"
        class="video"
        :src="data.play_url"
        enable-danmu
        danmu-btn
        controls
      />
    </view>
    <hot-video-info :data="data" />
  </view>
</template>

<script>
export default {
  name: "hot-video-item",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hot-video-item-container {
  margin-bottom: $uni-spacing-col-lg;
  position: relative;
  .video {
    width: 100%;
    height: 230px;
  }
}
</style>
