import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    log: false,
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    logStatus (state){
        state.user= true;
    }
  }
})