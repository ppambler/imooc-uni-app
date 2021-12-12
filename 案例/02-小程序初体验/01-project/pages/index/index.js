// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    product: {
      price: 10,
      num: 5
    },
    msg: '',
    products: [
      {
        name: '苹果',
        price: 3.2
      },
      {
        name: '面包',
        price: 5.0
      },
      {
        name: '可乐',
        price: 2.5
      }
    ]
  },
  onAddNum() {
    // console.log('onAddNum')
    this.setData({
      msg: 'msg'
    })
    this.setData({
      'product.num': this.data.product.num + 1
    })
  },
  onAddNumN(e) {
    console.log(e)
    // 拿到传递的参数：是字符串
    const step = parseInt(e.target.dataset.step)
    // 修改 num
    this.setData({
      'product.num': this.data.product.num + step
    })
  },
  /**
  * 3. 监听 input 的输入事件
  */
  onInput(e) {
    //  4. 获取用户输入的值
    const val = parseInt(e.detail.value);
    //  5. 赋值给【商品数量】
    this.setData({
      'product.num': val
    })
  }
})

