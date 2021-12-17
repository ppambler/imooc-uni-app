<!--
 * @Date: 2021-12-16 17:16:13
 * @LastEditTime: 2021-12-17 12:45:22
 * @FilePath: \imooc-blog\pages\hot\hot.vue
-->
<template>
  <view class="hot-container">
    <!-- 微信小程序的 image 组件 -->
    <!-- @ 符号相当于 当前项目的根目录 -->
    <image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
    <!-- 不用注册，可直接使用组件 -->
    <view class="search-box">
      <my-search placeholderText="uni-app 自定义组件"></my-search>
    </view>
  </view>
</template>

<script>
import { getHotTabs } from '@/api/hot'
export default {
  data() {
    return {};
  },
  /**
   * created: 组件实例配置完成，但 DOM 未渲染 -> 可在这儿发起网络请求，配置响应式数据
   */
  created() {
    this.loadHotTabs()
  },
  /**
   * 所有的方法必须被定义到 methods 中
   */
  methods: {
    /**
     * 获取 热搜文章类型
     */
    async loadHotTabs() {
      const res = await getHotTabs()
      console.log(res)
    }
  }
};
</script>

<style lang="scss" scoped>
.hot-container {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 80px;
  }
  .search-box {
    padding: 0 16px;
    margin-bottom: $uni-spacing-col-base;
  }
}
</style>
