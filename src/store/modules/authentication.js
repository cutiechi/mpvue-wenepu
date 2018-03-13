import { getStorageSync } from '../../utils/storage'

const state = {
  appToken: getStorageSync('appToken') || '',
  webToken: getStorageSync('webToken') || ''
}

const actions = {

}

const mutations = {

}

export default {
  state,
  actions,
  mutations
}
