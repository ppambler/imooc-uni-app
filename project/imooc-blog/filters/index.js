/*
 * @Date: 2021-12-20 22:47:38
 * @LastEditTime: 2021-12-24 20:46:16
 * @FilePath: \imooc-blog\filters\index.js
 */

// 1. 导入dayjs
import dayjs from "dayjs";
// 2. dayjs 默认语言是英文，我们这里需要把语言配置成中文，导入中文语言包
import "dayjs/locale/zh-cn";
// 3. 引入 relativeTime 模块
import rTime from "dayjs/plugin/relativeTime";

// 4. 加载中文语言包到 dayjs 中
dayjs.locale("zh-cn");
// 5. 加载相对时间插件
dayjs.extend(rTime);

/**
 * 6. 定义过滤器，通过 dayjs().to(dayjs(val)) 方法把【当前时间】处理为【相对时间】
 */
export function relativeTime(val) {
  // console.log("🚀 ~ file: index.js ~ line 23 ~ relativeTime ~ val", val);
  // console.log(
  //   "🚀 ~ file: index.js ~ line 27 ~ relativeTime ~ dayjs(val)",
  //   dayjs(val)
  // );
  // console.log(
  //   "🚀 ~ file: index.js ~ line 27 ~ relativeTime ~ dayjs().to(dayjs(val))",
  //   dayjs().to(dayjs(val))
  // );
  // 返回 dayjs 处理之后的相对时间
  // to() 表示相对时间
  // to() 接收一个参数，这个参数为 当前时间
  return dayjs().to(dayjs(val));
}

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
