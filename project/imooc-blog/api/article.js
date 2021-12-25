/*
 * @Date: 2021-12-25 15:21:34
 * @LastEditTime: 2021-12-25 15:21:36
 * @FilePath: \imooc-blog\api\article.js
 */
import request from "@/utils/request";

/**
 * 获取文章详情
 */
export function getArticleDetail(data) {
  return request({
    url: "/article/details",
    data,
  });
}
