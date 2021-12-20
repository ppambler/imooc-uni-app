/*
 * @Date: 2021-12-20 22:47:38
 * @LastEditTime: 2021-12-20 22:47:40
 * @FilePath: \imooc-blog\filters\index.js
 */

/**
 * @description: 将字符转化为以千为单位的字符
 * @param {*} val 待转换字符
 * @return {*}
 */
export function hotNumber(val) {
  const num = parseInt(val);
  if (num < 1000) return val;

  // 将 val 转为字符串
  val = val + "";
  // 获取以 千 为单位的值
  return val.substring(0, val.length - 3) + "k";
}
