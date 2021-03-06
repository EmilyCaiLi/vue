import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import state from './types'

Vue.use(Vuex)

export default new Vuex.store({
  state,
  mutations,
  actions
})
