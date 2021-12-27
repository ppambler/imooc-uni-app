<!--
 * @Date: 2021-12-27 21:21:35
 * @LastEditTime: 2021-12-27 21:22:29
 * @FilePath: \imooc-blog\components\my-login\my-login.vue
-->
<template>
  <view class="my-container">
    <!-- 用户未登录 -->
    <block>
      <image
        class="avatar avatar-img"
        src="@/static/images/default-avatar.png"
        mode="scaleToFill"
      />
      <view class="login-desc">登录后可同步数据</view>
      <button class="login-btn" type="primary" @click="getUserInfo">
        微信用户一键登录
      </button>
    </block>
  </view>
</template>

<script>
export default {
  name: "my-login",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.my-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25%;
  .avatar-img {
    width: 78px;
    height: 78px;
  }
  .login-desc {
    color: $uni-text-color-grey;
    font-size: $uni-font-size-base;
    margin-top: $uni-spacing-col-big;
  }
  .login-btn {
    margin-top: $uni-spacing-col-big;
    width: 85%;
  }
}
</style>
