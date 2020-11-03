<template>
   <app>
    <v-card
     class="mx-auto">
      <div> 
          <v-card-title>Hakuba, Japan</v-card-title>
          <v-card-subtitle >{{dateBuilder()}}</v-card-subtitle>
          <div>{{temp}} C°</div>
          <div>Degrees</div>
        </div>
      </v-card>
      </app>
</template>

<script>
import dotenv from 'dotenv'
dotenv.config()

export default {
  name: 'Weather',
  data: ()=> ({
  current: null,
  sunrise: null,
  sunset:null,
  temp:null,
  feels_like:null,
  weather: null

  }),
  props: {
 
  },
  mounted(){
   this.fetchWeather () 
  },

 methods: {

  fetchWeather (){
        fetch(
         `https://api.openweathermap.org/data/2.5/onecall?lat=36.6982&lon=137.8619&units=metric&appid=${process.env.VUE_APP_API}`
         )
          .then(res => {
            return res.json();
          }).then(this.setResults);
    
    },
    setResults (results) {
      this.weather = results;
      this.current = results.current;
      this.date = this.dateBuilder();
      this.temp = Math.round(this.current.temp)
      console.log(results)
      console.log(this.temp)
    },
dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
}

}

</script>

 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
