import request from './request'

const getWebToken = authenticationForm => request({
  url: '/authentication/token/web',
  method: 'POST',
  data: authenticationForm
})

export {
  getWebToken
}
