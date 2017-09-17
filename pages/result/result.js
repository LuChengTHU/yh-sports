
Page({

  data: {
    image_src: '',
    bg: ''
  },

  onLoad: function (options) {
    var string_bg = ''
    string_bg += options.bg[0]
    string_bg += ','
    string_bg += options.bg[1]
    string_bg += ','
    string_bg += options.bg[2]
    this.setData({
      image_src: options.src_url,
      bg: string_bg
    })
  }

})