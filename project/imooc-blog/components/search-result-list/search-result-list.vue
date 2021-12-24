<!--
 * @Date: 2021-12-21 21:52:29
 * @LastEditTime: 2021-12-24 21:05:55
 * @FilePath: \imooc-blog\components\search-result-list\search-result-list.vue
-->
<template>
  <view class="search-result-list-container">
    <!-- 循环渲染列表数据 -->
    <block v-for="(item, index) in resultList" :key="index">
      <view class="search-result-item-box">
        <!-- 内容区 - 样式 1 -->
        <search-result-item-theme-1
          v-if="!item.pic_list || item.pic_list.length === 0"
          :data="item"
        />

        <!-- 内容区 - 样式 2 -->
        <search-result-item-theme-2
          v-else-if="item.pic_list.length === 1"
          :data="item"
        />

        <!-- 内容区 - 样式 3 -->
        <search-result-item-theme-3 v-else :data="item" />
      </view>
    </block>
  </view>
</template>

<script>
import { getSearchResult } from "@/api/search";
export default {
  name: "search-result-list",
  props: {
    // 搜索关键字
    queryStr: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // 数据源
      resultList: [],
      // 页数
      page: 1,
    };
  },
  created() {
    this.loadSearchResult();
  },
  methods: {
    /**
     * 获取搜索数据
     */
    async loadSearchResult() {
      const { data: res } = await getSearchResult({
        q: this.queryStr,
        p: this.page,
      });
      // 更改返回数据样式（行内样式）
      res.list.forEach((item) => {
        item.title = item.title.replace(
          /<em>/g,
          "<em style='color:#f94d2a; margin:0 2px'>"
        );
        item.description = item.description.replace(
          /<em>/g,
          "<em style='color:#f94d2a; margin:0 2px'>"
        );
      });
      this.resultList = res.list;
      console.log(this.resultList);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-result-list-container {
  padding: $uni-spacing-col-lg $uni-spacing-row-lg;
  .search-result-item-box {
    margin-bottom: $uni-spacing-col-big;
  }
}
</style>
