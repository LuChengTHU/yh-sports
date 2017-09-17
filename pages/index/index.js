//index.js
//获取应用实例
const host_address = "https://huayu.saepa.org/"
Page({
  data: {
    inputData: '',
    enabled_click: true
  },
  bindBlur: function(e) {
    this.setData({
      inputData: e.detail.value
    })
  },
  bindInputTap: function (e) {
    const l = this.lengthOf(this.data.inputData);
    if (l > 10) wx.showToast({
      image: "../../images/error.png",
      title: '长度需小于10字符哟',
      duration: 1000
    })
    else if (l == 0) wx.showToast({
      image: "../../images/error.png",
      title: '名字不能为空',
      duration: 1000
    })
    else {
      if(!this.data.enabled_click) return;
      this.setData({
        enabled_click: false
      });
      wx.showLoading({
        title: '加载中',
      });
      wx.request({
        url: "https://huayu.saepa.org/api/v1/sports",
        data: { name: this.data.inputData },
        method: 'POST',
        success: (res) => {
          wx.navigateTo({
            url: '../result/result?src_url=' + host_address + res.data.result + '&bg=' + res.data.bg
          });
        },
        complete: (res) => {
          wx.hideLoading();
          this.setData({
            enabled_click: true
          });
        }
      })
    }
  },
  lengthOf: function (s) {
    let l = 0;
    for (let i=0; i<s.length; i++) {
      if(s.charCodeAt(i) > 255) l+=2;
      else l++;
    }
    return l;
  }
})
