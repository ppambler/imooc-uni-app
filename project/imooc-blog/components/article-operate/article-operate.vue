<!--
 * @Date: 2021-12-26 21:37:28
 * @LastEditTime: 2021-12-26 21:40:58
 * @FilePath: \imooc-blog\components\article-operate\article-operate.vue
-->
<template>
  <view class="operate-container">
    <!-- 输入框 -->
    <view class="comment-box">
      <my-search placeholderText="评论一句，前排打 call..."></my-search>
    </view>
    <!-- 点赞 -->
    <view class="options-box">
      <article-praise />
    </view>
    <!-- 收藏 -->
    <view class="options-box">
      <article-collect />
    </view>
  </view>
</template>

<script>
export default {
  name: "article-operate",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
