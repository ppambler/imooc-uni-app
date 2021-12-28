<!--
 * @Date: 2021-12-28 18:13:34
 * @LastEditTime: 2021-12-28 18:54:23
 * @FilePath: \imooc-blog\subpkg\pages\login-page\login-page.vue
-->
<template>
  <view>
    <my-login @onLoginSuccess="onLoginSuccess"></my-login>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * 登录成功的事件回调
     */
    onLoginSuccess() {
      uni.navigateBack({ delta: 1 });
    },
  },
};
</script>

<style lang="scss"></style>
