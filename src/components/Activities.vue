<template>
<v-container>
  <span v-for="(KEY) in activities" :key="KEY">
    <v-card
      
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="`${KEY.photo}`"
      >
        <v-card-title dark>{{KEY.title}} </v-card-title>
      </v-img>
  
      <v-card-subtitle class="pb-0">
        {{KEY.location}}
      </v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>{{KEYtitle}}</div>
  
        <div>{{KEY.short_description}}</div>
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
  </span>
    </v-container>
</template>

<script>
import dotenv from 'dotenv'
dotenv.config()
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: `${process.env.AIRTABLE_API_KEY}`
});

var base = new Airtable({apiKey: `${process.env.AIRTABLE_API_KEY}`}).base('appptozv0YeMrByuW');



export default {
  name: 'Activities',
  
  data: ()=> ({
  activities: [],

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
            const data = response.json();
            console.log(data)
            return data;
        })
        .then((data)=> {
         this.activities = data;
         console.log(this.activities)
         return
        });
  },


  async fetchActivities (){

    await base('activities').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 5,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('title'));
        })
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  },

  addToTrip(key){
    this.$emit()

  }
    
 }
}

</script>