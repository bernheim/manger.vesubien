import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: ""
  },
  
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
    logIn(state) {
      state.authenticated = true
    },
    logOut(state) {
      state.authenticated = false
    }

},
  
  actions: {
    logIn(context) {
      context.commit('logIn')
    },
    logOut(context) {
      context.commit('logOut')
    }
  }
});