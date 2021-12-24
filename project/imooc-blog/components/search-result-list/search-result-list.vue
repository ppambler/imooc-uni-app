<!--
 * @Date: 2021-12-21 21:52:29
 * @LastEditTime: 2021-12-24 22:39:57
 * @FilePath: \imooc-blog\components\search-result-list\search-result-list.vue
-->
<template>
  <view class="search-result-list-container">
    <!-- 1. 通过 mescroll-body 包裹列表，指定 ref 为 mescrollRef ，监听@init、@down、@up 事件 -->
    <mescroll-body
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
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
    </mescroll-body>
  </view>
</template>

<script>
import { getSearchResult } from "@/api/search";
// 2. 导入对应的 mixins
import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
export default {
  name: "search-result-list",
  // 3. 注册 mixins
  mixins: [MescrollMixin],
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
    // 4. 实现三个回调方法
    /**
     * 首次加载
     */
    mescrollInit() {
      console.log("首次加载");
    },
    /**
     * 下拉刷新的回调
     */
    downCallback() {
      console.log("下拉刷新的回调");
    },
    /**
     * 上拉加载的回调
     */
    upCallback() {
      console.log("上拉加载的回调");
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
