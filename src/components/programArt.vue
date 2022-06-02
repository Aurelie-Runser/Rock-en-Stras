<template>
    <div class="mx-auto my-16 w-full xs:w-[80%] lg:w-full flex flex-wrap flex-row gap-x-10 justify-center items-center">
        
        <card :image=img class="aspect-[9/16] w-[33vw] sm:w-[40vw]" imgalt="lolo"/>

        <div class="text-white font-base mx-auto">
            <h4 class="font-semibold text-base lg:text-lg mx-5 mb-5 sm:mx-10">{{jour}}</h4>

            <ul class="font-semibold text-base sm:text-lg lg:text-xl leading-10 sm:leading-[4rem] lg:leading-[5rem] nth-child-2n:text-pink">
                <li>{{artiste1}}</li>
                <li>{{artiste2}}</li>
                <li>{{artiste3}}</li>
                <li>{{artiste4}}</li>
                <li>{{artiste5}}</li>
            </ul>           
        </div>

        <RouterLink to="/concert">
        <monButton>
            Voir le programme du jour en détail
        </monButton> 
        </RouterLink>
    </div>
</template>


<script>

import card from "./cardBase.vue"
import monButton from "./monButton.vue"

export default {
  name: "ProgramArt",
  data() {
    return {
    };
  },
  components: { card, monButton },
  
  props:{
    img:{
      type: String,
    },
    jour:{
      type: String,
    },
     artiste1:{
      type: String,
     },
     artiste2:{
      type: String,
     },
     artiste3:{
      type: String,
     },
     artiste4:{
      type: String,
     },
     artiste5:{
      type: String,
     },
 }
} 
</script>
