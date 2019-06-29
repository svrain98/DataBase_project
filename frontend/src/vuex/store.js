import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginfo: null,
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginsuccess (state, payload) {
      state.isLogin = true
      state.loginfo = payload
      console.log('123')
      console.log(payload)
    }
  },
  actions: {
    login ({
      state,
      commit
    }, user) {
      commit('loginsuccess', user)
      router.push({name: 'Information'})
    }
  }

})
