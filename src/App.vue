<template>
  <v-app>
  <v-app-bar 
        app
        dark
        color="blue"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>HAKUTABI</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify
            @onClick:
          </v-icon>
        </v-btn>
     
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main  class="main">
    <Planner></Planner>
    <Form>:user ="user"</Form>
    <Weather></Weather>
    <Activities ></Activities>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app class="footer">
   The mountains are always calling  🏔
  </v-footer>
</v-app>
  
</template>

<script>
import Activities from './components/Activities.vue'
import Weather from './components/Weather.vue'
import Form from './components/Form.vue'
import Planner from './components/Planner'

require('dotenv').config()

export default {
  name: 'App',
  components: {
    Form,
    Weather,
    Activities,
    Planner,
  },
  props:{
    
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
  background-color: rgb(43, 107, 226) ;
}
#main{
  background-image:"src/assets/logo.png";
}

.footer.footer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(43, 107, 226) ;
}
</style>
