<!--
 * @Date: 2021-12-16 17:16:55
 * @LastEditTime: 2021-12-29 19:01:55
 * @FilePath: \imooc-blog\pages\hot-video\hot-video.vue
-->
<template>
  <view class="hot-video-container">
    <block v-for="(item, index) in videoList" :key="index">
      <hot-video-item :data="item" />
    </block>
  </view>
</template>

<script>
import { getHotVideoList } from "api/video";
export default {
  data() {
    return {
      // 数据源
      videoList: [],
      size: 10,
      page: 1,
    };
  },
  created() {
    this.loadHotVideoList();
  },
  methods: {
    /**
     * 获取列表数据
     */
    async loadHotVideoList() {
      const { data: res } = await getHotVideoList({
        page: this.page,
        size: this.size,
      });
      this.videoList = res.list;
      console.log(
        "🚀 ~ file: hot-video.vue ~ line 34 ~ loadHotVideoList ~ this.videoList",
        this.videoList
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.hot-video-container {
  background-color: $uni-bg-color-grey;
}
</style>
