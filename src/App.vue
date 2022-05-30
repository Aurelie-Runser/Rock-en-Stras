<template>
  <div>
    <monheader class="fixed"/>
    <RouterView />
  </div>

</template>

<script>

import monheader from "./components/monheader.vue"

export default {
  components: {monheader,},
};
</script>