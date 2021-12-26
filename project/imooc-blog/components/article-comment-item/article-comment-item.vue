<template>
  <view class="comment-item-container">
    <!-- 头像 -->
    <view class="avatar-box">
      <image class="avatar" :src="data.avatar" />
    </view>
    <!-- 评论信息 -->
    <view class="info-box">
      <!-- 评论人 -->
      <text class="comment-user">{{ data.nickName || data.userName }}</text>
      <!-- 评论内容 -->
      <text class="comment-info">{{ data.content }}</text>
      <!-- 评论时间 -->
      <text class="comment-time">{{ data.postTime | relativeTime }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "article-comment-item",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  // mounted() {
  //   console.log(this.data);
  // },
};
</script>

<style lang="scss"></style>
