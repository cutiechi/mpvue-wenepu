import { getStorageSync } from '../../utils/storage'

const state = {
  appToken: getStorageSync('appToken') || '',
  webToken: getStorageSync('webToken') || ''
}

const actions = {

}

const mutations = {
  'SET_APP_TOKEN' (state, appToken) {
    state.appToken = appToken
  }
}

export default {
  state,
  actions,
  mutations
}
