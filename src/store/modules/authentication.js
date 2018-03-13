import { getStorageSync, setStorage } from '../../utils/storage'
import { getAppToken } from '../../api/authentication'

const state = {
  appToken: getStorageSync('appToken') || '',
  webToken: getStorageSync('webToken') || ''
}

const actions = {
  async getAppToken ({ commit }, authenticationForm) {
    try {
      const { data: appToken } = await getAppToken(authenticationForm)
      await setStorage('appToken', appToken)
      commit('SET_APP_TOKEN', appToken)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const mutations = {
  'SET_APP_TOKEN' (state, appToken) {
    state.appToken = appToken
  },
  'SET_WEB_TOKEN' (state, webToken) {
    state.webToken = webToken
  }
}

export default {
  state,
  actions,
  mutations
}
