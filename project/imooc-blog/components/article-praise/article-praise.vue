<!--
 * @Date: 2021-12-26 21:37:50
 * @LastEditTime: 2021-12-26 21:47:32
 * @FilePath: \imooc-blog\components\article-praise\article-praise.vue
-->
<template>
  <view class="praise-box">
    <image class="img" src="@/static/images/un-praise.png" />
    <text class="txt">点赞</text>
  </view>
</template>

<script>
export default {
  name: "article-praise",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.praise-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: $uni-img-size-base;
    height: $uni-img-size-base;
    color: $uni-text-color;
  }

  .txt {
    font-size: $uni-font-size-sm;
    color: $uni-text-color;
  }
}
</style>
