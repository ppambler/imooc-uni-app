<!--
 * @Date: 2021-12-25 14:04:11
 * @LastEditTime: 2021-12-25 18:45:34
 * @FilePath: \imooc-blog\subpkg\pages\blog-detail\blog-detail.vue
-->
<template>
  <view class="detail-container">
    <!-- 文章内容区域 -->
    <block>
      <!-- 标题 -->
      <view class="title">{{ articleData.articleTitle }}</view>
      <!-- 作者信息 -->
      <view class="detail-info">
        <view class="detail-left">
          <view class="avatar-box">
            <!-- 头像 -->
            <image class="avatar" :src="articleData.avatar"></image>
          </view>
          <view class="author-box">
            <!-- 作者 -->
            <text class="author">{{ articleData.nickName }}</text>
            <!-- 发布时间 -->
            <text class="release-time">{{ articleData.date }}</text>
          </view>
        </view>
        <view class="detail-right">
          <!-- 关注按钮 -->
          <button class="follow" size="mini">关注</button>
        </view>
      </view>
      <!-- 文章内容 -->
      <rich-text :nodes="articleData.content"></rich-text>
    </block>
  </view>
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

<style lang="scss" scoped>
.detail-container {
  padding: $uni-spacing-col-base $uni-spacing-row-base;
  .title {
    font-size: $uni-font-size-title;
    color: $uni-text-color-title;
    font-weight: bold;
  }
  .detail-info {
    padding: $uni-spacing-col-base 0;
    display: flex;
    justify-content: space-between;

    .detail-left {
      display: flex;
      .author-box {
        margin-left: $uni-spacing-row-base;
        display: flex;
        flex-direction: column;
        .author {
          font-size: $uni-font-size-base;
          font-weight: bolder;
          color: $uni-color-title;
        }
        .release-time {
          font-size: $uni-font-size-sm;
          color: $uni-text-color-grey;
        }
      }
    }

    .detail-right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
