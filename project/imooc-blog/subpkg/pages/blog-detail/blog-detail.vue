<!--
 * @Date: 2021-12-25 14:04:11
 * @LastEditTime: 2021-12-25 15:24:48
 * @FilePath: \imooc-blog\subpkg\pages\blog-detail\blog-detail.vue
-->
<template>
  <view> </view>
</template>

<script>
import { getArticleDetail } from "@/api/article";
export default {
  data() {
    return {
      // 作者名
      author: "",
      // 文章 ID
      articleId: "",
      // 文章详情数据
      articleData: null,
    };
  },
  onLoad(options) {
    this.author = options.author;
    this.articleId = options.articleId;
    this.loadArticleDetail();
  },
  methods: {
    /**
     * 获取文章详情数据
     */
    async loadArticleDetail() {
      // 展示加载框
      uni.showLoading({
        title: "加载中",
      });
      const { data: res } = await getArticleDetail({
        author: this.author,
        articleId: this.articleId,
      });
      this.articleData = res.data;
      console.log(
        "🚀 ~ file: blog-detail.vue ~ line 41 ~ loadArticleDetail ~ this.articleData",
        this.articleData
      );
    },
  },
};
</script>

<style lang="scss"></style>
