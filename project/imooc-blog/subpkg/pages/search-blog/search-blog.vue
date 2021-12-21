<!--
 * @Date: 2021-12-21 16:33:53
 * @LastEditTime: 2021-12-21 20:44:59
 * @FilePath: \imooc-bloge:\BlogDemo\imooc-uni-app\project\imooc-blog\subpkg\pages\search-blog\search-blog.vue
-->
<template>
  <view class="search-blog-container">
    <!-- search模块 -->
    <view class="search-bar-box">
      <my-search
        :isShowInput="true"
        :placeholderText="defaultText"
        v-model="searchVal"
        :config="{
          backgroundColor: '#f1f0f3',
        }"
        @search="onSearchConfirm"
        @focus="onSearchFocus"
        @blur="onSearchBlur"
        @clear="onSearchClear"
        @cancel="onSearchCancel"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 绑定输入框中的内容
      searchVal: "",
      // 默认的 placeholderText
      defaultText: "默认的 placeholderText",
    };
  },
  methods: {
    /**
     * 搜索内容
     */
    onSearchConfirm(val) {
      console.log("搜索内容: " + this.searchVal);
    },
    // searchbar 获取焦点
    onSearchFocus(val) {
      console.log("searchbar 获取焦点");
    },
    /**
     * searchbar 失去焦点
     */
    onSearchBlur(val) {
      console.log("searchbar 失去焦点");
    },
    /**
     * searchbar 清空内容
     */
    onSearchClear() {
      console.log("searchbar 清空内容");
    },
    /**
     * searchbar 取消按钮
     */
    onSearchCancel(val) {
      console.log("searchbar 取消按钮");
    },
  },
};
</script>

<style lang="scss">
.search-blog-container {
  .search-bar-box {
    background-color: $uni-bg-color;
    padding: $uni-spacing-row-sm;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
}
</style>
