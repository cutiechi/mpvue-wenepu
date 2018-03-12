import { baseUrl } from '../config'

const request = ({ url, method = 'GET', data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header,
      success ({ data }) {
        const statusCode = data.code
        if (statusCode === 20000) {
          resolve(data)
        } else {
          const errorMessage = data.message
          reject(errorMessage)
        }
      },
      fail (error) {
        reject(error)
      }
    })
  })
}

export default request
