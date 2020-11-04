<template>
<v-container>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/main-1578450543.jpg?crop=1xw:0.7503526093088858xh;center,top&resize=1200:*'"
      >
        <v-card-title>Outdoor Dining Experience </v-card-title>
      </v-img>
  
      <v-card-subtitle class="pb-0">
        Happo, Kitaone
      </v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>{{title}}</div>
  
        <div>A five course meal under the stars</div>
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
    </v-container>
</template>

<script>
import dotenv from 'dotenv'
dotenv.config()

export default {
  name: 'Activities',
  data: ()=> ({
  activities: [],
  title: null,
  description: null,
  photo:null,
  price:null,
  short_description:null,
  location: null

  }),
  props: [],

  mounted(){
   this.getActivities()
  },

 methods: {

  async getActivities (){
        
        await fetch(
         "/api/activities"
         )
        .then ((response) => {
            const activities = response.json();
            console.log(activities)
            return activities
        })
        .then((activities)=> {
          console.log(activities)
          activities.map(activity => this.activities.push(activity))})
        },

    setActivities (activities) {
      this.activities = activities;
      this.title = activities.title;
      this.location = activities.location;
      this.photo = activities.photo;
      this.short_description = activities.short_description;
    },
 }
}

</script>