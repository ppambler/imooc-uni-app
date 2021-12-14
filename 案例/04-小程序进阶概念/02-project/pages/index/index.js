// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabSelectId: ''
  },
  onTabChange(e) {
    const { id } = e.detail
    console.log(typeof id)
    console.log(`父组件接收到的 ID: ${id}`)
    this.setData({
      tabSelectId: id
    })
  }
})
