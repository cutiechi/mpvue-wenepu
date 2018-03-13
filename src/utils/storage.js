const getStorage = key => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success ({ data }) {
        resolve(data)
      },
      fail (error) {
        reject(error)
      }
    })
  })
}

const getStorageSync = key => {
  return wx.getStorageSync(key)
}

const setStorage = (key, data) => {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      success ({ data }) {
        resolve(data)
      },
      fail (error) {
        reject(error)
      }
    })
  })
}

export {
  getStorage,
  getStorageSync,
  setStorage
}
