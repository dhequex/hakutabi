<template>
  <div>

  </div>
</template>

<script>
require('dotenv').config()
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
         `https://api.openweathermap.org/data/2.5/onecall?lat=36.6982&lon=137.8619&exclude={part}&appid=c77a135768188e873b69f273d312839c`
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
