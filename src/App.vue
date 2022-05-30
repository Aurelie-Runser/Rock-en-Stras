<template>
  <div class="bg-black">
    <monheader/>
  </div>

  <RouterView />
</template>

<script>

import monheader from "./components/monheader.vue"

export default {
  components: {monheader,},
};
</script>