<!--
 * @Date: 2021-12-18 15:48:17
 * @LastEditTime: 2021-12-18 17:24:52
 * @FilePath: \imooc-blog\components\hot-list-item\hot-list-item.vue
-->
<template>
  <view class="item-container">
    <view class="item-box">
      <!-- 左侧 -->
      <view class="item-box-left">
        <!-- 排名 -->
        <hot-ranking></hot-ranking>
      </view>
      <!-- 右侧 -->
      <view class="item-box-right">
        <!-- 标题 -->
        <view class="item-title">标题</view>
        <!-- 简介 -->
        <view class="item-desc">简介</view>
        <view class="item-bottom-box">
          <!-- 作者 -->
          <text class="item-author">作者</text>
          <!-- 热度 -->
          <view class="hot-box">
            <!-- 小图标 -->
            <image
              class="hot-icon"
              src="@/static/images/hot-icon.png"
              mode="aspectFit"
            ></image>
            <text class="hot-text">1000 热度</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "hot-list-item",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
