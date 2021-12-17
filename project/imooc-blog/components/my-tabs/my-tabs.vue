<!--
 * @Date: 2021-12-17 11:15:21
 * @LastEditTime: 2021-12-17 18:19:48
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
              <view
                class="tab-item"
                :class="{ 'tab-item-active': activeIndex === index }"
                @click="onTabClick(index)"
                >{{ item.label || item }}</view
              >
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
    return {
      // 当前激活项的 index
      activeIndex: -1,
    };
  },
  watch: {
    // 监听激活项的变化
    defaultIndex: {
      // 当 defaultIndex 发生变化时，回调的方法
      handler(val) {
        console.log("立即执行");
        this.activeIndex = val;
      },
      // immediate：当前 handler 回调将会在侦听开始之后立即被调用
      immediate: true,
    },
  },
  created() {
    console.log(this.defaultIndex);
  },
  mounted() {
    this.$nextTick(function () {
      console.log(this.tabData);
      console.log(this.defaultIndex);
    });
  },
  methods: {
    // tab-item 的点击事件
    onTabClick(index) {
      this.activeIndex = index;
      // 发送一个通知，通知表示激活项发生变化了
      this.$emit("tabClick", index);
    },
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
            &-active {
              color: $uni-text-color-hot;
            }
          }
          .active {
            color: #f01414;
          }
          .active:before {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            height: 4px;
            border-radius: 4px;
            transform: scaleY(0.5);
            background-color: #f01414;
            transition: all 0.3s;
          }
        }
      }
    }
  }
}
</style>
