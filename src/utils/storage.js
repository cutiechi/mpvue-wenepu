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

export {
  getStorage
}
