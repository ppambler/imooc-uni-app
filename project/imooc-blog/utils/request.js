// 封装请求对象
const BASE_URL = 'https://api.imooc-blog.lgdsunday.club/api';

/**
 * @description: 用 Promise 封装的请求对象
 * @param {*} url
 * @param {*} data
 * @param {*} method
 * @return {*}
 */
function request({ url, data, method }) {
  return new Promise((resolve, reject) => {
    // uni.request 发起网络请求
    uni.request({
      url: BASE_URL + url,
      data,
      method,
      success: ({ data }) => {
        if (data.success) {
          resolve(data);
        } else {
          uni.showToast({
            title: data.message,
            icon: 'none',
            mask: true,
            duration: 3000
          });
          reject(data.message);
        }
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
}

export default request;
