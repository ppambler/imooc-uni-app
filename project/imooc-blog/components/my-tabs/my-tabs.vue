<!--
 * @Date: 2021-12-17 11:15:21
 * @LastEditTime: 2021-12-17 15:10:39
 * @FilePath: \imooc-blog\components\my-tabs\my-tabs.vue
-->
<template>
  <!--  处理 my-tabs 的 html 结构-->
  <view class="tab-container">
    <view class="tab-box">
      <scroll-view
        id="_scroll"
        scroll-x
        class="scroll-view"
        scroll-with-animation
      >
        <view class="scroll-content">
          <view class="tab-item-box">
            <block v-for="(item, index) in tabData" :key="index">
              <view class="tab-item">{{ item.label || item }}</view>
            </block>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  name: "my-tabs",
  props: {
    // 1. 可以在父组件中定制演示
    // 配置对象
    config: {
      type: Object,
      // default 如果是复杂数据类型
      // 那么需要指定 value 为一个函数，通过 返回值 的形式指定默认值
      default: () => {
        return {};
      },
    },
    // 2. 可以在父组件中指定数据
    tabData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 3. 可以在父组件中选中项
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(function () {
      console.log(this.tabData);
    });
  },
};
</script>

<style lang="scss" scoped>
.tab-container {
  font-size: $uni-font-size-base;
  height: 45px;
  line-height: 45px;
  background-color: $uni-bg-color;
  .tab-box {
    width: 100%;
    height: 45px;
    display: flex;
    position: relative;
    .scroll-view {
      white-space: nowrap;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      .scroll-content {
        width: 100%;
        height: 100%;
        position: relative;

        .tab-item-box {
          height: 100%;
          .tab-item {
            height: 100%;
            display: inline-block;
            padding: 0 15px;
            position: relative;
            text-align: center;
            color: $uni-text-color;
          }
        }
      }
    }
  }
}
</style>
