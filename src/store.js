import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
trip: [],

  },

  mutations: {
    ADD_TO_TRIP(state, activity){
      console.log(activity)
      state.trip.push(activity)
      
    },   
  },
  
  actions:{
    addToTrip(context, activity){
      context.commit("ADD_TO_TRIP", activity);
      
    },
    showAlert() {
      <v-alert
      type="success"
      ></v-alert>
    }
  },

  getters:{
    getTrip(state){
      return state.trip
    }
  }
})