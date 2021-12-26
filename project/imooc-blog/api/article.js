/*
 * @Date: 2021-12-25 15:21:34
 * @LastEditTime: 2021-12-26 18:57:06
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

/**
 * 获取文章评论列表
 */
export function getArticleCommentList(data) {
  return request({
    url: "/article/comment/list",
    data,
  });
}
