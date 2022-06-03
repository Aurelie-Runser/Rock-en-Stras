<template>
  <div class="overflow-x-hidden">
    <monHeader class="fixed"/>
    <RouterView />
    <monFooter/>
  </div>
</template>

<script>

import monHeader from "./components/monHeader.vue"
import monFooter from "./components/monFooter.vue"

export default {
  data(){
    return{
      user:{
        email: null,
        password: null,
      }
    }
  },
  components: {monHeader, monFooter},
};
</script>