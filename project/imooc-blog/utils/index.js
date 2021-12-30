/*
 * @Date: 2021-12-20 20:28:52
 * @LastEditTime: 2021-12-30 20:18:08
 * @FilePath: \imooc-blog\utils\index.js
 */

/**
 * @description: 函数节流
 * @param {*} fn
 * @param {*} interval
 * @return {*}
 */
function throttle(fn, interval) {
  var enterTime = 0; //触发的时间
  var gapTime = interval || 300; //间隔时间，如果interval不传，则默认300ms
  return function () {
    var context = this;
    var backTime = new Date(); //第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime; //赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}

/**
 * @description: 函数防抖
 * @param {*} fn
 * @param {*} interval
 * @return {*}
 */
function debounce(fn, interval) {
  var timer;
  var gapTime = interval || 200; //间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer);
    var context = this;
    var args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args);
    }, gapTime);
  };
}

/**
 * 返回随机色值
 */
export let getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? "0" + color : color;
    rgb.push(color);
  }
  return "#" + rgb.join("");
};

export { throttle, debounce };
