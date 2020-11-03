<template>
    <div>
        <v-button id="startButton">
            Let's Start
        </v-button>
    </div>
</template>
<script >
import * as typeformEmbed from '@typeform/embed'

export default {
  name: 'Form',
  
  props: {

  },
  mounted(){
 const formPopUp = typeformEmbed.makePopUp("https://jmtorresr.typeform.com/to/lOXgZOCK",
    {
     mode: "popup",
     onSubmit: function() {
         console.log("Form Successful")
     }
    })
    document.getElementById("startButton").addEventListener("click", function (){
        formPopUp.open()
    } )
  },

 methods: {
showForm (){

"https://embed.typeform.com/embed.js"

}
}

}
</script>