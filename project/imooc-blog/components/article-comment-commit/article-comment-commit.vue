<!--
 * @Date: 2021-12-28 21:08:55
 * @LastEditTime: 2021-12-29 00:21:41
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
import { userArticleComment } from "@/api/user";
export default {
  name: "article-comment-commit",
  props: {
    articleId: {
      type: String,
      required: true,
    },
  },
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
    async onBtnClick() {
      // 展示加载框
      uni.showLoading({
        title: "加载中",
      });
      // 调用接口，异步处理即可
      const { data: res } = await userArticleComment({
        articleId: this.articleId,
        content: this.value,
      });
      console.log(
        "🚀 ~ file: article-comment-commit.vue ~ line 63 ~ onBtnClick ~ res",
        res
      );
      // 发表评论完成之后，给用户一个提示
      uni.showToast({
        title: "发表成功",
        icon: "success",
        mask: true,
      });
      // 发表成功之后的回调：关闭 popup
      this.$emit("success", res);
    },
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
