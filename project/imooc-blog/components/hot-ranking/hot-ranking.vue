<!--
 * @Date: 2021-12-18 15:56:44
 * @LastEditTime: 2021-12-18 19:14:26
 * @FilePath: \imooc-blog\components\hot-ranking\hot-ranking.vue
-->
<template>
  <view class="ranking-container">
    <image
      class="ranking-bg"
      src="@/static/images/ranking-1.png"
      mode="aspectFit"
    />
    <text class="ranking-text">1</text>
  </view>
</template>

<script>
export default {
  name: "hot-ranking",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.ranking-container {
  position: relative;
  text-align: center;
  width: 18px;
  height: 20px;
  .ranking-bg {
    width: 100%;
    height: 100%;
  }
  .ranking-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-55%, -55%);
    font-size: $uni-font-size-sm;
    font-weight: bold;
    color: $uni-text-color;
  }
}
</style>
