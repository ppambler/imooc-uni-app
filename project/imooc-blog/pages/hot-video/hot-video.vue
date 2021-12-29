<!--
 * @Date: 2021-12-16 17:16:55
 * @LastEditTime: 2021-12-29 17:43:30
 * @FilePath: \imooc-blog\pages\hot-video\hot-video.vue
-->
<template>
  <view> </view>
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

<style lang="scss"></style>
