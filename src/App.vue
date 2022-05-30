<template>
  <div>
    <monHeader class="fixed"/>
    <RouterView />
    <monFooter/>
  </div>
</template>

<script>

import monHeader from "./components/monHeader.vue"
import monFooter from "./components/monFooter.vue"

export default {
  components: {monHeader, monFooter},
};
</script>