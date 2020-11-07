<template>
   <v-card>
     {{getTrip}}
   </v-card>

</template>
<script>
import {store} from "../store.js";

export default {
name: "Planner",

computed:{
  getTrip(){
    return this.$store.getters.getTrip;
  }
}

}
</script>