/*
 * @Date: 2021-12-17 12:28:42
 * @LastEditTime: 2021-12-19 12:23:10
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

/**
 * @description: 热搜文章列表
 * @param {*} type
 * @return {*}
 */
export function getHotListFromTabType(type) {
  return request({
    url: "/hot/list",
    data: {
      type,
    },
  });
}
