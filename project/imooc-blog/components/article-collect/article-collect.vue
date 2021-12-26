<!--
 * @Date: 2021-12-26 21:38:29
 * @LastEditTime: 2021-12-26 21:48:24
 * @FilePath: \imooc-blog\components\article-collect\article-collect.vue
-->
<template>
  <view class="collect-box">
    <image class="img" src="@/static/images/un-collect.png" />
    <text class="txt">收藏</text>
  </view>
</template>

<script>
export default {
  name: "article-collect",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.collect-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: $uni-img-size-base;
    height: $uni-img-size-base;
  }

  .txt {
    font-size: $uni-font-size-sm;
    color: $uni-text-color;
  }
}
</style>
