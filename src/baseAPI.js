import wepy from 'wepy'

const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'

wepy.baseToast = function(str) {
  wepy.showToast({
    title: '获取数据失败', // 提示的内容,
    icon: 'none', // 图标,
    duration: 1500
  })
}

wepy.get = function(url, data = {}) {
  return wepy.request({
    url: baseURL + url, // 开发者服务器接口地址",
    data, // 请求的参数",
    method: 'GET'
  })
}

wepy.post = function(url, data = {}) {
  return wepy.request({
    url: baseURL + url, // 开发者服务器接口地址",
    data, // 请求的参数",
    method: 'POST'
  })
}
