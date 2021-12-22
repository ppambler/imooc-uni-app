<!--
 * @Date: 2021-12-21 21:51:50
 * @LastEditTime: 2021-12-22 17:59:27
 * @FilePath: \imooc-blog\components\search-hot-list\search-hot-list.vue
-->
<template>
  <view class="search-hot-list-container">
    <!-- 标题 -->
    <view class="search-hot-title">慕课热搜 - 全网技术 一网打尽</view>
    <block v-for="(item, index) in hotList" :key="index">
      <view class="search-hot-item" @click="onItemClick(item)">
        <!-- 序号 -->
        <hot-ranking :ranking="index + 1"></hot-ranking>
        <!-- 文本 -->
        <text class="title line-clamp">{{ item.label }}</text>
        <!-- hot-icon -->
        <image
          v-if="index <= 2"
          class="search-hot-icon"
          src="/static/images/hot-icon.png"
        />
      </view>
    </block>
  </view>
</template>

<script>
import { getSearchHotList } from "@/api/search";

export default {
  name: "search-hot-list",
  data() {
    return {
      hotList: [],
    };
  },
  created() {
    this.getSearchHotList();
  },
  methods: {
    /**
     * 获取热搜列表数据
     */
    async getSearchHotList() {
      const { data: res } = await getSearchHotList();
      this.hotList = res.list;
      console.log(this.hotList);
    },
    /**
     * item 点击事件
     */
    onItemClick(item) {
      this.$emit("onSearch", item.label);
    },
  },
};
</script>

<style lang="scss">
.search-hot-list-container {
  .search-hot-title {
    font-weight: bold;
    font-size: $uni-font-size-base;
    color: $uni-text-color-hot;
    padding: 0 12px $uni-spacing-col-lg 12px;
    margin: 0 -12px $uni-spacing-col-lg -12px;
    box-shadow: 2px 2px 5px 1px rgba(143, 143, 143, 0.1);
  }
  .search-hot-item {
    display: flex;
    align-items: center;
    padding: $uni-spacing-col-lg 0;
    .title {
      color: $uni-text-color;
      font-size: $uni-font-size-base;
      margin: 0 $uni-spacing-row-base;
    }
    .search-hot-icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
