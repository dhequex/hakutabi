<template>
  <v-app>
  <v-navigation-drawer app>
    HERE THE DRAWER
  </v-navigation-drawer>

  <v-app-bar 
        app
        dark
        color="blue"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>旅プラーナ〜</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
     
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <div id="app">
    <Weather></Weather>
    <Activities :user ="user"></Activities>
  </div>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
HERE THE FOOTER
  </v-footer>
</v-app>
  
</template>

<script>
import Activities from './components/Activities.vue'
import Weather from './components/Weather.vue'
require('dotenv').config()

export default {
  name: 'App',
  components: {
    Weather,
    Activities,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
