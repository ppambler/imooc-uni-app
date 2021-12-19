<!--
 * @Date: 2021-12-16 17:16:13
 * @LastEditTime: 2021-12-19 19:25:26
 * @FilePath: \imooc-bloge:\BlogDemo\imooc-uni-app\project\imooc-blog\pages\hot\hot.vue
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
    <!-- tabs 组件 -->
    <my-tabs
      :tabData="tabData"
      :defaultIndex="currentIndex"
      @tabClick="onTabClick"
    ></my-tabs>

    <!-- 基于 swiper 的 list 列表 -->
    <swiper
      class="swiper"
      :current="currentIndex"
      :style="{ height: currentSwiperHeight + 'px' }"
    >
      <swiper-item
        class="swiper-item"
        v-for="(tabItem, tabIndex) in tabData"
        :key="tabIndex"
      >
        <view>
          <!-- 加载动画 -->
          <uni-load-more status="loading" v-if="isLoading"></uni-load-more>
          <!-- 列表 -->
          <block v-else>
            <!-- 列表循环数据更改为 listData[tabIndex] -->
            <hot-list-item
              :class="'hot-list-item-' + tabIndex"
              v-for="(item, index) in listData[tabIndex]"
              :key="index"
              :data="item"
              :ranking="index + 1"
            ></hot-list-item>
          </block>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { getHotTabs, getHotListFromTabType } from "@/api/hot";
export default {
  data() {
    return {
      // tabs 数据源
      tabData: [],
      // 当前的切换 index
      currentIndex: 0,
      // list 列表数据加载的 loading
      isLoading: true,
      // 以 index 为 key -> 以对应的 list 为 value
      listData: {},
      // 当前 swiper 的高度
      currentSwiperHeight: 0,
      // 以 index 为 key，对应的 swiper 的高度 为 val
      swiperHeightData: {},
    };
  },
  /**
   * created: 组件实例配置完成，但 DOM 未渲染 -> 可在这儿发起网络请求，配置响应式数据
   */
  created() {
    this.loadHotTabs();
  },
  /**
   * 所有的方法必须被定义到 methods 中
   */
  methods: {
    /**
     * 获取 热搜文章类型
     */
    async loadHotTabs() {
      // uni-app 支持 async await
      const res = await getHotTabs();
      console.log(res);
      this.tabData = res.data.list;
      // 获取 list 数据时，需要 tab 中对应的 id
      this.loadHotListFromTab();
    },
    /**
     * @description: 获取 List 列表数据，只是单个 tab 的数据
     * @param {*}
     * @return {*}
     */
    async loadHotListFromTab() {
      // 一、没有获取到数据
      // 1. 展示 loading
      // 2. 调用接口获取数据
      // 3. 把数据保存到本地
      // 4. 隐藏 loading
      // 二、已经获取到数据（有了缓存之后）
      // 1. 直接渲染数据即可
      if (!this.listData[this.currentIndex]) {
        this.isLoading = true;
        const id = this.tabData[this.currentIndex].id;
        const { data: res } = await getHotListFromTabType(id);
        this.listData[this.currentIndex] = res.list;
        this.isLoading = false;
        // 渲染完列表数据之后，计算高度
        // 指定 0 是刚好有个回调队列 -> 渲染队列的优先级更高
        setTimeout(async () => {
          // 获取当前 swiper 的高度
          this.currentSwiperHeight = await this.getCurrentSwiperHeight();
          // 放入缓存
          this.swiperHeightData[this.currentIndex] = this.currentSwiperHeight;
        }, 0);
      }
    },
    /**
     * @description: tab 点击事件
     * @param {*}
     * @return {*}
     */
    onTabClick(index) {
      this.currentIndex = index;
      this.loadHotListFromTab();
    },
    /**
     * 计算当前 swiper 的高度
     */
    getCurrentSwiperHeight() {
      return new Promise((resolve, reject) => {
        // 累加和
        let sum = 0;
        // 1. 拿到所有的 item -> 异步操作 -> 类比 setTimeout(()=>{})
        const query = uni.createSelectorQuery().in(this);
        query
          .selectAll(`.hot-list-item-${this.currentIndex}`)
          .boundingClientRect((res) => {
            // res 就是那 20 个列表节点的信息
            // 2. 拿到所有 item 的高度
            // 3. 把所有 item 的高度累加起来
            res.forEach((item) => {
              sum += item.height;
            });
            resolve(sum);
          })
          .exec();
      });
    },
  },
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
