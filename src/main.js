import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store.js";

require('dotenv').config()

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
