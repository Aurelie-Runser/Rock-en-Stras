<template>
  <div>
    <div class="flex justify-center pt-32 pb-14 bg-pink-300">
      <logoGrand class="mx-10 max-w-4xl"/>
      <span class="sr-only">Rock en Stras'</span>
    </div>
    <div>
      <card image="../../public/paysage.jpg"/>
    </div>
  </div>
</template>

<script>
import logoGrand from "../components/icons/logoGrand.vue"
import card from "../components/card.vue"

export default {
  name: "AccueilView",
  data() {
    return {
    };
  },
  components: { logoGrand, card },
}
</script>