<!--
 * @Date: 2021-12-17 11:15:21
 * @LastEditTime: 2021-12-20 19:24:25
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
        :scroll-left="scrollLeft"
      >
        <view class="scroll-content">
          <view class="tab-item-box">
            <block v-for="(item, index) in tabData" :key="index">
              <view
                :id="'_tab_' + index"
                class="tab-item"
                :class="{ 'tab-item-active': activeIndex === index }"
                @click="onTabClick(index)"
                :style="{
                  color:
                    activeIndex === index
                      ? defaultConfig.activeTextColor
                      : defaultConfig.textColor,
                }"
                >{{ item.label || item }}</view
              >
            </block>
          </view>
          <view
            class="underLine"
            :style="{
              transform: 'translateX(' + slider.left + 'px)',
              width: defaultConfig.underLineWidth + 'px',
              height: defaultConfig.underLineHeight + 'px',
              backgroundColor: defaultConfig.underLineColor,
            }"
          ></view>
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
      // 滑块
      slider: {
        // 滑块距离左侧的距离
        left: 0,
      },
      // 默认配置
      defaultConfig: {
        // 默认的字体颜色
        textColor: "#333333",
        // 高亮字体颜色
        activeTextColor: "#f94d2a",
        // 下划线宽度 px
        underLineWidth: 24,
        // 下划线高度 px
        underLineHeight: 2,
        // 下划线颜色
        underLineColor: "#f94d2a",
      },
      // 内部维护的数据对象，为每个 item 单独额外维护一个 slider 的滑块对象
      tabList: [],
      // scrollView 的横向滚动条位置
      scrollLeft: 0,
    };
  },
  watch: {
    // 监听 config
    config: {
      handler(val) {
        this.defaultConfig = { ...this.defaultConfig, ...val };
      },
      immediate: true,
    },
    // 监听激活项的变化
    defaultIndex: {
      // 当 defaultIndex 发生变化时，回调的方法
      handler(val) {
        // console.log("defaultIndex 的 handler 立即执行");
        this.activeIndex = val;
        // 定义滑块的位置
        this.tabToIndex();
      },
      // immediate：当前 handler 回调将会在侦听开始之后立即被调用
      immediate: true,
    },
    // 监听 tabData 的变化
    tabData: {
      // 当 tabData 发生变化时，回调的方法
      handler(val) {
        // console.log("tabData 的 handler 执行几次", val);
        this.tabList = val;
        // tabList 数据就已经和 tabData 同步了
        // 维护 tabList 中的每个 item -> 在 DOM 渲染完成之后
        // this.$nextTick() -> uni-app 虽然支持，但是 $nextTick() 存在兼容性问题
        // 所以用了 setTimeout
        setTimeout(() => {
          // 计算 item 的 slider
          this.updateTabWidth();
        }, 0);
      },
      // immediate：当前 handler 回调将会在侦听开始之后立即被调用
      immediate: true,
    },
  },
  created() {
    // console.log(this.defaultIndex);
  },
  mounted() {
    // this.$nextTick(function () {
    //   console.log(this.tabData);
    //   console.log(this.defaultIndex);
    // });
  },
  methods: {
    // tab-item 的点击事件
    onTabClick(index) {
      // console.log("click tab item");
      this.activeIndex = index;
      this.tabToIndex();
      // 发送一个通知，通知表示激活项发生变化了
      this.$emit("tabClick", index);
    },
    /**
     * 更新 tabItem 的宽度
     */
    updateTabWidth() {
      // console.log("updateTabWidth");
      /**
       * 为 tabList 的每一个 item 单独额外维护一个 slider 的滑块对象
       */
      let data = this.tabList;
      if (data.length == 0) return false;

      // uni-app 中 拿到渲染之后的 dom
      // 获取 dom 的固定写法
      // 创建一个去 SelectorQuery 的实例 -> 从当前这个 Vue 组件里边去进行获取
      const query = uni.createSelectorQuery().in(this);
      // 循环数据源
      data.forEach((item, index) => {
        // 获取 dom 的固定写法
        query
          .select("#_tab_" + index)
          .boundingClientRect((res) => {
            // res 就是拿到的 DOM 元素 -> 每个 tab item
            // console.log(res);
            // 为数据对象中每一个 item 都维护一个 _slider（滑动条） 对象
            item._slider = {
              // 当前的 tab 距离左侧的距离
              left:
                res.left + (res.width - this.defaultConfig.underLineWidth) / 2,
            };
            // 运行完成之后，计算一次「滑块」的位置
            if (data.length - 1 === index) {
              this.tabToIndex();
            }
          })
          .exec();
      });
    },
    /**
     * 根据当前的 activeIndex，计算 滑块的滚动位置
     */
    tabToIndex() {
      // console.log("tabList 为空");
      if (this.tabList.length === 0) return;
      // console.log("tabToIndex 不为空");
      // 获取到当前的 activeIndex
      const index = this.activeIndex;
      // 滑块的宽度
      const underLineWidth = this.defaultConfig.underLineWidth;
      // TODO: 计算滑块的滚动 === this.slider.left
      // 配置 滚动条的 left
      this.slider = {
        // TODO: left 怎么定义呢？
        // left = tabItem.left + (tabItem.width - slider.width) / 2
        left: this.tabList[this.activeIndex]._slider.left,
      };
      // 控制 scrollView 进行横向的滚动
      this.scrollLeft = this.activeIndex * this.defaultConfig.underLineWidth;
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
        .underLine {
          height: 2px;
          width: 24px;
          background-color: $uni-text-color-hot;
          border-radius: 3px;
          transition: 0.5s;
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
}
</style>
