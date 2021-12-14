// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 数据源
    listData: [],
    // 选中项
    active: -1
  },

  /**
   * 组件的方法列表（组件中的方法必须定义到 methods 中）
   */
  methods: {
    /**
     * 获取数据的方法
     */
    loadTabsData() {
      wx.request({
        url: 'https://api.imooc-blog.lgdsunday.club/api/hot/tabs',
        success: (res) => {
          console.log(res)
          this.setData({
            listData: res.data.data.list,
            active: 0
          })
        }
      })
    },
    /**
     * 1. 监听用户选中项的变化
     * item 点击事件处理
     */
    onItemClick(e) {
      // 1.1：获取用户选中的 下标
      const { index } = e.target.dataset
      console.log(index)
      // 1.2：修改选中项
      this.setData({
        active: index
      })
    },
  },
  /**
   * 生命周期函数
   */
  lifetimes: {
    attached() {
      this.loadTabsData()
    }
  },
  /**
   * 1.3：监听 active 的变化
   * 通过 observers 定义数据监听器
   */
  observers: {
    // key 为要监听的数据
    // value 为当数据发生变化时，调用的函数
    active: function (active) {
      // 2：获取用户选中的数据的 `id`
      const { id } = this.data.listData[active]
      console.log(`tabs 组件中，当前选中的 ID: ${id}`)
      this.triggerEvent('change', {
        id
      })
    }
  }
})
