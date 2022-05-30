<template>
  <div>
    <monHeader class="fixed"/>
    <RouterView />
    <monFooter class="mt-14"/>
  </div>
</template>

<script>

import monHeader from "./components/monHeader.vue"
import monFooter from "./components/monFooter.vue"

export default {
  components: {monHeader, monFooter},
};
</script>