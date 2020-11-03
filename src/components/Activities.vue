<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://d14ii1k8b0fjjs.cloudfront.net/files/topics/17516_ext_01_en_2.jpg?v=1578361465"
      >
        <v-card-title>Outdoor Dining Experience </v-card-title>
      </v-img>
  
      <v-card-subtitle class="pb-0">
        Number 10
      </v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>Field Suite Hakuba</div>
  
        <div>Happo, Kitaone</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Add to My Trip
        </v-btn>
  
        <v-btn
          color="orange"
          text
        >
          See More
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import dotenv from 'dotenv'
dotenv.config()

export default {
  name: 'Activities',
  data: ()=> ({
  title: null,
  description: null,
  photo:null,
  price:null,
  short_description:null,
  location: null

  }),
  props: {
 
  },
  mounted(){
   
  },

 methods: {

  getActivities (){
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