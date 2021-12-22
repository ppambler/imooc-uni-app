<!--
 * @Date: 2021-12-21 21:52:09
 * @LastEditTime: 2021-12-22 18:55:55
 * @FilePath: \imooc-blog\components\search-history\search-history.vue
-->
<template>
  <view class="search-history-container">
    <!-- title 区域 -->
    <view class="search-history-title-box">
      <view class="search-history-title">搜索历史</view>
      <view v-if="!isShowClear">
        <uni-icons type="trash" @click="isShowClear = true" />
      </view>
      <view v-else>
        <text class="txt">全部删除</text>
        <text class="txt" @click="isShowClear = false">完成</text>
      </view>
    </view>
    <!-- 内容区域 -->
    <view class="search-history-box">
      <block v-for="(item, index) in searchData" :key="index">
        <view class="search-history-item">
          <text class="history-txt line-clamp">{{ item }}</text>
          <uni-icons v-show="isShowClear" type="clear" />
        </view>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  name: "search-history",
  data() {
    return {
      isShowClear: false,
      searchData: ["sunday", "uniapp", "vue", "前端"],
    };
  },
};
</script>

<style lang="scss"></style>
