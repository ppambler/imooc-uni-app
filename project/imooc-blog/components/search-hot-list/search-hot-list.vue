<!--
 * @Date: 2021-12-21 21:51:50
 * @LastEditTime: 2021-12-22 17:03:24
 * @FilePath: \imooc-blog\components\search-hot-list\search-hot-list.vue
-->
<template>
  <view>
    <text>搜索列表</text>
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
  },
};
</script>

<style lang="scss"></style>
