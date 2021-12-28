<!--
 * @Date: 2021-12-28 21:08:55
 * @LastEditTime: 2021-12-28 21:35:02
 * @FilePath: \imooc-blog\components\article-comment-commit\article-comment-commit.vue
-->
<template>
  <view class="comment-container" :style="{ bottom: bottom + 'px' }">
    <uni-easyinput
      v-model="value"
      type="textarea"
      placeholder="说点什么..."
      :maxlength="50"
      :inputBorder="false"
    ></uni-easyinput>
    <button
      class="commit"
      type="primary"
      :disabled="!value"
      size="mini"
      @click="onBtnClick"
    >
      发送
    </button>
  </view>
</template>

<script>
export default {
  name: "article-comment-commit",
  data() {
    return {
      value: "",
      bottom: 0,
    };
  },
  created() {
    // 检测软键盘的变化
    uni.onKeyboardHeightChange(({ height }) => {
      this.bottom = height;
    });
  },
  methods: {
    /**
     * 发送按钮点击事件
     */
    onBtnClick() {},
  },
};
</script>

<style lang="scss" scoped>
.comment-container {
  background-color: $uni-bg-color;
  text-align: right;
  padding: $uni-spacing-row-base;
  position: relative;
}
</style>
