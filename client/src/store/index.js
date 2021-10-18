import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addServer(state, server) {
      state.user.servers.push(server)
    },
    LogOutUser(state) {
      state.user = null
    }
  }
})
