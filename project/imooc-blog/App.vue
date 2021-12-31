<!--
 * @Date: 2021-12-15 18:57:48
 * @LastEditTime: 2021-12-31 16:41:14
 * @FilePath: \imooc-blog\App.vue
-->
<script>
export default {
  onLaunch: function () {
    console.warn(
      "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"
    );
    console.log("App Launch");
    // 当项目运行到 H5 端的时候，进行一个打印：当前处于 H5 编译平台
    /* #ifdef H5 */
    console.log("当前处于 H5 编译平台");
    /* #endif */
    // 当项目运行到 非H5 端的时候，进行一个打印：当前处于 非H5 编译平台
    // #ifndef H5
    console.log("当前处于 非H5 编译平台");
    // #endif
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uni-scss";
/* #ifndef APP-NVUE */
@import "@/static/customicons.css";
// 设置整个项目的背景色
page {
  background-color: #f5f5f5;
}

/* #endif */
.example-info {
  font-size: 14px;
  color: #333;
  padding: 10px;
}
</style>
