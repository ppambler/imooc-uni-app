<!--
 * @Date: 2021-12-21 21:52:29
 * @LastEditTime: 2021-12-24 16:28:28
 * @FilePath: \imooc-blog\components\search-result-list\search-result-list.vue
-->
<template>
  <view>
    <text>搜索结果</text>
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
      this.resultList = res.list;
      console.log(this.resultList);
    },
  },
};
</script>

<style lang="scss"></style>
