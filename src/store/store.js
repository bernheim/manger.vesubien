import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: "",
    uid: "",
    admin: ""
  },
  
  getters: {
    // Here we will create a getter
  },
  
  mutations: {
    logIn(state, user) {
      state.authenticated = true
      state.uid = user.uid
      if (user.uid == 'GApDBkdWbCbFbCKbH7tWUpirzwd2') {
      state.admin = true
      console.log(state.admin)
      }
    },
    logOut(state) {
      state.authenticated = false
      state.uid = ""
      state.admin = false
    }

},
  
  actions: {
    logIn(context, user) {
      context.commit('logIn', user)
    },
    logOut(context) {
      context.commit('logOut')
    }
  }
});