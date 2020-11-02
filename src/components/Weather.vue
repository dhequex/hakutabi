<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Weather',
  data: ()=> ({
    
  }),
  props: {
    weather: null
  },
  mounted(){
   this.getWeather () 
  },

 methods: {
   async getWeather () { 
     const { weather } = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=36.6982&lon=137.8619&exclude={part}&appid=${process.env.VUE_APP_API}`)
        .then((data) =>{
          data.json()
          res.send(data)
        })
        
    console.log(weather)
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
