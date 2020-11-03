<template>
<v-container>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="{photo}"
      >
        <v-card-title>{{title}} </v-card-title>
      </v-img>
  
      <v-card-subtitle class="pb-0">
        {{location}}
      </v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>{{title}}</div>
  
        <div>{{short_description}}</div>
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

  getActivities (){
        fetch(
         `${process.env.DATABASE_URL}`
         )
          .select()
          .from('activities')
          .then ((data) => {
          console.log(data)    
    });
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