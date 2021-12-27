/*
 * @Date: 2021-12-27 22:44:27
 * @FilePath: \imooc-blog\modules\user.js
 */
import { login } from "@/api/user";
export default {
  namespaced: true,
  state: () => {
    return {};
  },
  // 异步操作放这儿
  actions: {
    /**
     * 完成登录
     */
    async login(context, userProfile) {
      console.log(
        "🚀 ~ file: user.js ~ line 17 ~ login ~ userProfile",
        userProfile
      );
      // 用户数据
      const userInfo = userProfile.userInfo;
      console.log("🚀 ~ file: user.js ~ line 20 ~ login ~ userInfo", userInfo);
      // 调用登录接口
      const { data: res } = await login({
        signature: userProfile.signature,
        iv: userProfile.iv,
        nickName: userInfo.nickName,
        gender: userInfo.gender,
        city: userInfo.city,
        province: userInfo.province,
        avatarUrl: userInfo.avatarUrl,
      });
      console.log("🚀 ~ file: user.js ~ line 31 ~ login ~ res", res);
      // TODO: 登录逻辑
    },
  },
};
