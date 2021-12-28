/*
 * @Date: 2021-12-27 22:45:05
 * @LastEditTime: 2021-12-28 20:03:55
 * @FilePath: \imooc-blog\api\user.js
 */
import request from "@/utils/request";

/**
 * 用户登录
 */
export function login(data) {
  return request({
    url: "/sys/login",
    method: "POST",
    data,
  });
}

/**
 * 关注用户
 */
export function userFollow(data) {
  return request({
    url: "/user/follow",
    data,
  });
}
