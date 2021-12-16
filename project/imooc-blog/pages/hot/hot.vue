<template>
  <view class="hot-container">
    <!-- 微信小程序的 image 组件 -->
    <!-- @ 符号相当于 当前项目的根目录 -->
    <image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
    <!-- 不用注册，可直接使用组件 -->
    <view class="search-box">
      <my-search placeholderText="uni-app 自定义组件"></my-search>
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

<style lang="scss" scoped>
.hot-container {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 80px;
  }
  .search-box {
    padding: 0 16px;
    margin-bottom: $uni-spacing-col-base;
  }
}
</style>
