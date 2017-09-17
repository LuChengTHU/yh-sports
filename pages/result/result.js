
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
  }

})