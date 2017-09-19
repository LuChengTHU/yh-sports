
Page({

  data: {
    image_src: '',
    bg: ''
  },

  onLoad: function (options) {
    let string_bg = 'rgb('
    string_bg += options.bg
    string_bg += ')'
    this.setData({
      image_src: options.src_url,
      bg: string_bg
    })
  },
  preview: function(e) {
    wx.previewImage({
      current: '', 
      urls: [this.data.image_src]
    })
  },
  bindTap: function(e) {
    wx.showLoading({
      title: '正在下载图片',
    })
    wx.downloadFile({
      url: this.data.image_src,
      success: (res) => {
        wx.hideLoading();
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: (res) => {
            wx.showToast({
              title: '保存图片到相册',
              duration: 1000
            })
          }
        })
      }
    })
  }
})