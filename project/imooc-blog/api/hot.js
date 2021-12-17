/*
 * @Date: 2021-12-17 12:28:42
 * @LastEditTime: 2021-12-17 12:53:53
 * @FilePath: \imooc-blog\api\hot.js
 */
import request from "@/utils/request";

/**
 * @description: 热搜文章类型
 * @param {*}
 * @return {*}
 */
export function getHotTabs() {
  return request({
    url: "/hot/tabs",
  });
}
