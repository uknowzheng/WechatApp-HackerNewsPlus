const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const request = (url,data = {},method="GET") => {
  return new Promise((resovle, reject) => {
    wx.request({
      url,
      timeout:3000,
      method,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resovle(res.data)
      },
      fail() {
        reject()
      }
    })
  });
}

module.exports = {
  formatTime,
  request
}
