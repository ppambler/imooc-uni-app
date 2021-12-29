/*
 * @Date: 2021-12-29 17:33:22
 * @LastEditTime: 2021-12-29 17:33:28
 * @FilePath: \imooc-blog\api\video.js
 */

import request from "@/utils/request";

/**
 * 热播视频列表
 */
export function getHotVideoList(data) {
  return request({
    url: "/video/list",
    data,
  });
}
