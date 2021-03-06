import { getStorageSync, setStorage } from '../../utils/storage'
import { getAppToken, getWebToken } from '../../api/authentication'

const state = {
  appToken: getStorageSync('appToken') || '',
  webToken: getStorageSync('webToken') || '',
  student: getStorageSync('student') || {}
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
  },
  async getWebToken ({ commit }, authenticationForm) {
    try {
      const { data: webToken } = await getWebToken(authenticationForm)
      await setStorage('webToken', webToken)
      commit('SET_WEB_TOKEN', webToken)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async bindStudent ({ commit }, authenticationForm) {
    try {
      await Promise.all([
        this.dispatch('getAppToken', authenticationForm),
        this.dispatch('getWebToken', authenticationForm)
      ])
      await setStorage('student', authenticationForm)
      commit('SET_STUDENT', authenticationForm)
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
  },
  'SET_STUDENT' (state, student) {
    state.student = student
  }
}

export default {
  state,
  actions,
  mutations
}
