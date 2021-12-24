/*
 * @Date: 2021-12-21 21:21:21
 * @LastEditTime: 2021-12-24 16:27:28
 * @FilePath: \imooc-blog\api\search.js
 */
import request from "@/utils/request";

/**
 * 默认搜索内容
 */
export function getDefaultText() {
  return request({
    url: "/search/default-text",
  });
}

/**
 * 热搜搜索列表
 */
export function getSearchHotList() {
  return request({
    url: "/search/hot-list",
  });
}

/**
 * 搜索结果
 */
export function getSearchResult(data) {
  return request({
    url: "/search",
    data,
  });
}
