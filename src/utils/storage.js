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

export {
  getStorage,
  getStorageSync
}
