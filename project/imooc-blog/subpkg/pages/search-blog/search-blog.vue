<!--
 * @Date: 2021-12-21 16:33:53
 * @LastEditTime: 2021-12-21 17:52:45
 * @FilePath: \imooc-bloge:\BlogDemo\imooc-uni-app\project\imooc-blog\subpkg\pages\search-blog\search-blog.vue
-->
<template>
  <view class="search-blog-container">
    <!-- search模块 -->
    <view class="search-bar-box">
      <my-search />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.search-blog-container {
  .search-bar-box {
    background-color: $uni-bg-color;
    padding: $uni-spacing-row-sm;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
}
</style>
