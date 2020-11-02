<template>
   <div class="app" id ="app">
   <div class="weather-wrap">
        <div class="location-box">
          <div class="location">Hakuba, Japan</div>
          <div class="date">Today</div>
        </div>

        <div class="weather-box">
          <div class="temp">9°c</div>
          <div class="weather">Degrees</div>
        </div>
      </div>
      </div>
</template>

<script>
import dotenv from 'dotenv'
dotenv.config()

export default {
  name: 'Weather',
  data: ()=> ({
  lat: 0,
  lon:0, 
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
         `https://api.openweathermap.org/data/2.5/onecall?lat=36.6982&lon=137.8619&exclude={part}&appid=${process.env.VUE_APP_API}`
         )
          .then(res => {
            return res.json();
          }).then(this.setResults);
    
    },
    setResults (results) {
      this.weather = results;
      console.log(results)
    }

}

}

</script>

 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
.app {
  background-image:"src/assets/tsukiyo-57.jpg" ;
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
.search-box {
  width: 100%;
  margin-bottom: 30px;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.location-box .location {
  color: #FFF;
  font-size: 24px;
  font-weight: 200;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
