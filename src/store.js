import Vue from 'vue'
import Vuex from 'vuex'
import importActivity from '../data/importActivities';
const knex = require('knex');
const config= require("./knexfile")
const db = knex(config);
require('dotenv').config()

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    log: false,
    count: 0,
    activity: null
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