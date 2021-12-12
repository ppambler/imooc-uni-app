// pages/lifecycle/lifecycle.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function () {
    console.log('onPullDownRefresh');
    // 重置页数
    this.setData({
      page: 1
    })
    // 获取最新数据
    const data = await this.getList()
    console.log(data)
    // 将最新的数据补充到现有数据的后面
    this.setData({
      listData: data.list
    })
    // 关闭下拉刷新的动作（在真机中，下拉刷新动作不会自动关闭）
    wx.stopPullDownRefresh()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
  * 页面的初始数据
  */
  data: {
    listData: [],
    // 当前页数
    page: 1,
    // 每页的数据量
    size: 10,
    // 总数据量
    total: -1,
    index: 999
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    console.log('onReady')
    const data = await this.getList()
    console.log(data)
    this.setData({
      listData: data.list,
      // 为总数据量赋值
      total: data.total
    })
  },
  getList() {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://api.imooc-blog.lgdsunday.club/api/test/getList',
        method: 'GET',
        // 请求当前页的数据
        data: {
          page: this.data.page,
          size: this.data.size
        },
        success: (res) => {
          resolve(res.data.data)
        }
      })
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    console.log('onReachBottom')
    // 如果当前数据量已经 === 总数据量，则表示数据已经加载完成了
    if (this.data.listData.length === this.data.total) {
      return;
    }
    // 修改 page
    this.setData({
      page: this.data.page + 1
    })
    // 获取最新数据
    const data = await this.getList()
    console.log(data)
    // 将最新的数据补充到现有数据的后面
    this.setData({
      listData: [...this.data.listData, ...data.list]
    })
  },

  onSwitchToHome() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // onNavigateToDetail() {
  //   wx.navigateTo({
  //     url: '/pages/detail/detail',
  //   })
  // },
  onNavigateToDetail(e) {
    const { index, title } = e.target.dataset
    wx.navigateTo({
      url: `/pages/detail/detail?index=${index}&title=${title}`,
    })
  }
})