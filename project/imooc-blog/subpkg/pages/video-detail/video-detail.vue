<!--
 * @Date: 2021-12-29 20:03:38
 * @LastEditTime: 2021-12-30 23:21:52
 * @FilePath: \imooc-blog\subpkg\pages\video-detail\video-detail.vue
-->
<template>
  <view>
    <view class="video-detail-container">
      <view class="video-box">
        <video
          id="myVideo"
          class="video"
          :src="videoData.play_url"
          :danmu-list="danmuList"
          enable-danmu
          danmu-btn
          controls
        />

        <hot-video-info :data="videoData" />
      </view>
      <!-- 弹幕模块 -->
      <view class="danmu-box">
        <!-- 加载动画 -->
        <uni-load-more status="loading" v-if="isLoadingComment"></uni-load-more>
        <!-- 无弹幕 -->
        <empty-data v-else-if="commentList.length === 0"></empty-data>
        <!-- 弹幕列表 -->
        <view class="comment-container" v-else>
          <view class="all-comment-title">全部弹幕</view>
          <view class="list">
            <block v-for="(item, index) in commentList" :key="index">
              <article-comment-item :data="item" />
            </block>
          </view>
        </view>
      </view>
      <!-- 底部功能区 -->
      <article-operate
        type="video"
        :articleData="videoData"
        :placeholder="'发个弹幕，开心一下'"
        @commitClick="onCommit"
        @changePraise="onChangePraise"
        @changeCollect="onChangeCollect"
      />
      <!-- 输入弹幕的popup -->
      <uni-popup ref="popup" type="bottom" @change="onCommitPopupChange">
        <article-comment-commit
          v-if="isShowCommit"
          :articleId="videoData.id"
          @success="onSendDanmu"
        />
      </uni-popup>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getVideoDanmuList } from "@/api/video";
import { getRandomColor } from "@/utils/index.js";
export default {
  data() {
    return {
      // 弹幕数据源
      danmuList: [],
      // 评论列表数据源
      commentList: [],
      // 输入框是否显示
      isShowCommit: false,
      // video 组件上下文
      videoContext: null,
      // 弹幕列表数据加载中
      isLoadingComment: true,
    };
  },
  computed: {
    ...mapState("video", ["videoData"]),
  },
  onReady: function (res) {
    // 获取 video 组件上下文
    this.videoContext = uni.createVideoContext("myVideo");
    console.log(
      "🚀 ~ file: video-detail.vue ~ line 71 ~ this.videoContext",
      this.videoContext
    );
  },
  created() {
    this.loadVideoDanmuList();
  },
  methods: {
    ...mapMutations("video", ["setVideoData"]),
    /**
     * 获取弹幕数据
     */
    async loadVideoDanmuList() {
      const { data: res } = await getVideoDanmuList({
        videoId: this.videoData.id,
      });
      // 定义随机颜色
      res.list.forEach((item) => {
        item.color = getRandomColor();
      });
      this.danmuList = [...res.list];
      this.commentList = [...res.list];
      this.isLoadingComment = false;
    },
    /**
     * 发布弹幕点击事件
     */
    onCommit() {
      // 通过组件定义的ref调用uni-popup方法
      this.$refs.popup.open();
    },
    /**
     * 发布弹幕的 popup 切换事件
     */
    onCommitPopupChange(e) {
      // 修改对应的标记，当 popup 关闭时，为了动画平顺，进行延迟处理
      if (e.show) {
        this.isShowCommit = e.show;
      } else {
        setTimeout(() => {
          this.isShowCommit = e.show;
        }, 200);
      }
    },
    /**
     * 弹幕发布成功之后的回调
     */
    onSendDanmu(data) {
      // 发送弹幕
      this.videoContext.sendDanmu({
        text: data.info.content,
        color: getRandomColor(),
      });
      // 添加弹幕到评论数据源
      this.commentList.unshift(data.info);
      // 关闭 pop
      this.$refs.popup.close();
      // 关闭标记
      this.isShowCommit = false;
      // 提示用户
      uni.showToast({
        title: "发表成功",
      });
    },
    /**
     * 点赞处理回调
     */
    onChangePraise(isPraise) {
      this.setVideoData({ ...this.videoData, isPraise });
    },
    /**
     * 收藏处理回调
     */
    onChangeCollect(isCollect) {
      this.setVideoData({ ...this.videoData, isCollect });
    },
  },
};
</script>

<style lang="scss" scoped>
.video-detail-container {
  .video-box {
    background-color: $uni-bg-color;
    position: sticky;
    top: 0;
    z-index: 9;
    .video {
      width: 100%;
      height: 230px;
    }
  }
  .danmu-box {
    border-top: $uni-spacing-col-sm solid $uni-bg-color-grey;
    margin-bottom: 36px;
    .comment-container {
      padding: $uni-spacing-col-lg $uni-spacing-row-lg;
      .all-comment-title {
        font-size: $uni-font-size-lg;
        font-weight: bold;
      }
    }
  }
}
</style>
