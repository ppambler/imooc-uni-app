<!--
 * @Date: 2021-12-16 19:17:50
 * @LastEditTime: 2021-12-21 20:40:26
 * @FilePath: \imooc-blog\components\my-search\my-search.vue
-->
<template>
  <view class="my-search-container">
    <!-- 搜索输入框 -->
    <uni-search-bar
      class="my-search-bar"
      v-if="isShowInput"
      :radius="100"
      :bgColor="config.backgroundColor"
      :placeholder="placeholderText"
      :value="value"
      @confirm="onSearch"
      @focus="onFocus"
      @blur="onBlur"
      @clear="onClear"
      @cancel="onCancel"
      @input="onInput"
    >
      <uni-icons slot="clearIcon" type="clear" color="#999999" />
    </uni-search-bar>
    <!-- 搜索按钮 -->
    <view class="my-search-box" v-else>
      <!-- 搜索图标 -->
      <image class="icon" src="@/static/images/search.png" mode="aspectFit" />
      <!-- placeholder -->
      <text class="placeholder">{{ placeholderText }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "my-search",
  props: {
    placeholderText: {
      type: String,
      default: "搜索",
    },
    // 是否显示输入框
    isShowInput: {
      type: Boolean,
      default: false,
    },
    // 配置对象
    config: {
      type: Object,
      default: () => ({
        height: 36,
        backgroundColor: "#ffffff",
        icon: "/static/images/search.png",
        textColor: "#454545",
        border: "1px solid #c9c9c9",
      }),
    },
    // 输入的内容
    // search-bar 不可以使用功能 v-model，因为直接使用 v-model 会修改父组件传递过来的数据
    // value 名称不可修改，与 $emit('input') 事件对应
    value: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 点击搜索按钮触发
     */
    onSearch() {
      // console.log("onSearch");
      this.$emit("search", this.value);
    },
    /**
     * 输入框获取焦点触发
     */
    onFocus() {
      // console.log("onFocus");
      this.$emit("focus", this.value);
    },
    /**
     * 输入框失去焦点触发
     */
    onBlur() {
      // console.log("onBlur");
      this.$emit("blur", this.value);
    },
    /**
     * 点击输入框中的清空按钮时
     */
    onClear() {
      // console.log("onClear");
      this.$emit("clear", this.value);
    },
    /**
     * 点击取消按钮时
     */
    onCancel() {
      // console.log("onCancel");
      this.$emit("cancel", this.value);
    },
    /**
     *  value 改变时触发事件
     */
    onInput(val) {
      // console.log("onInput", val);
      // input 的事件名称不可修改，与 props 中的 value 对应
      // 当同时存在：
      // props -> value
      // $emit('input', val)
      // 时，在组件外可以使用 v-model 完成双向数据绑定。
      // 即：用户输入内容时，父组件传递过来的 value 同步发生变化
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-search-container {
  display: flex;
  align-items: center;

  .my-search-bar {
    width: 100%;
  }
  .my-search-box {
    height: 36px;
    width: 100%;
    background-color: $uni-bg-color;
    border-radius: 15px;
    border: 1px solid $uni-bg-color-border;
    display: flex;
    align-items: center;
    padding: 0 $uni-spacing-row-base;

    .icon {
      width: $uni-img-size-sm;
      height: $uni-img-size-sm;
    }

    .placeholder {
      font-size: $uni-font-size-sm;
      margin-left: $uni-spacing-row-sm;
      color: $uni-text-color-placeholder;
    }
  }
}
</style>
