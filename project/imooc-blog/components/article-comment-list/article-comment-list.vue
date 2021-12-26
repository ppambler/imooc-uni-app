<!--
 * @Date: 2021-12-26 18:59:11
 * @LastEditTime: 2021-12-26 19:30:05
 * @FilePath: \imooc-blog\components\article-comment-list\article-comment-list.vue
-->
<template>
  <view class="comment-limit-container">
    <view class="comment-title">精简评论</view>
    <block v-for="(item, index) in commentList.slice(0, 2)" :key="index">
      <!-- item 项组件 -->
      <article-comment-item :data="item.info" />
    </block>
    <view class="show-more">查看更多评论</view>
  </view>
</template>

<script>
import { getArticleCommentList } from "@/api/article";
export default {
  name: "article-comment-list",
  props: {
    // 文章 ID
    articleId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // 当前页数
      page: 1,
      // 每页评论数
      pageSize: 5,
      // 评论列表数据源
      commentList: [],
    };
  },
  created() {
    this.loadCommentList();
  },
  methods: {
    /**
     * 获取评论列表
     */
    async loadCommentList() {
      const { data: res } = await getArticleCommentList({
        articleId: this.articleId,
        page: this.page,
        size: this.pageSize,
      });
      this.commentList = res.list;
      console.log(
        "🚀 ~ file: article-comment-list.vue ~ line 45 ~ loadCommentList ~ this.commentList",
        this.commentList
      );
    },
  },
};
</script>

<style lang="scss"></style>
