<template>
    <div class="mx-auto my-16 w-full xs:w-[80%] lg:w-full flex flex-row justify-between items-center">
        
        <cardPortrait class="lg:hidden"/>
        <cardPaysage class="hidden lg:block"/>

        <div class="text-white font-base sm:mx-auto">
            <h4 class="font-semibold text-base sm:text-lg m-5 sm:m-10">{{jour}}</h4>
                        
            <ul class="font-semibold font-base text-lg sm:text-xl leading-10 sm:leading-[4rem] nth-child-2n:text-pink-500">
                <li>{{artiste1}}</li>
                <li>{{artiste2}}</li>
                <li>{{artiste3}}</li>
                <li>{{artiste4}}</li>
                <li>{{artiste5}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

import cardPortrait from "../components/cardPortrait.vue"
import cardPaysage from "../components/cardPaysage.vue"

export default {
  name: "ProgramView",
  data() {
    return {
    };
  },
  components: { cardPortrait, cardPaysage },
  
  props:{
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