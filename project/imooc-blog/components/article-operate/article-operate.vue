<!--
 * @Date: 2021-12-26 21:37:28
 * @LastEditTime: 2021-12-30 23:22:53
 * @FilePath: \imooc-blog\components\article-operate\article-operate.vue
-->
<template>
  <view class="operate-container">
    <!-- 输入框 -->
    <view class="comment-box" @click="onCommitClick">
      <my-search
        :placeholderText="placeholder"
        :config="{
          height: 28,
          backgroundColor: '#eeedf4',
          icon: '/static/images/input-icon.png',
          textColor: '#a6a5ab',
          border: 'none',
        }"
      ></my-search>
    </view>
    <!-- 点赞 -->
    <view class="options-box">
      <article-praise
        :articleData="getData"
        @changePraise="$emit('changePraise', $event)"
      />
    </view>
    <!-- 收藏 -->
    <view class="options-box">
      <article-collect
        :articleData="getData"
        @changeCollect="$emit('changeCollect', $event)"
      />
    </view>
  </view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "article-operate",
  props: {
    articleData: {
      type: Object,
      // required: true,
    },
    placeholder: {
      type: String,
      default: "评论一句，前排打 call...",
    },
    type: {
      type: String,
      default: "article",
    },
  },
  data() {
    return {};
  },
  computed: {
    getData() {
      if (this.type === "video") {
        this.articleData.articleId = this.articleData.id;
      }
      return this.articleData;
    },
  },
  methods: {
    ...mapActions("user", ["isLogin"]),
    /**
     * my-search 的点击事件
     */
    async onCommitClick() {
      // 进行登录判定，登录之后允许发布评论
      if (!(await this.isLogin())) {
        return;
      }
      this.$emit("commitClick");
    },
  },
};
</script>

<style lang="scss" scoped>
.operate-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $uni-bg-color;
  padding: 4px 6px 32px 6px;
  display: flex;
  border-top: 1px solid $uni-bg-color-grey;
  align-items: center;
  .comment-box {
    flex-grow: 2;
  }
  .options-box {
    flex-grow: 1;
  }
}
</style>
