<template>
  <div>
    <div class="flex justify-center pt-32 pb-14 bg-pink-300">
      <logoGrand class="mx-10 max-w-4xl"/>
      <span class="sr-only">Rock en Stras'</span>
    </div>
    <div class="bg-black p-10 text-white">
      <div class="max-w-7xl m-auto flex flex-row flex-wrap items-center gap-6">
        <h2 class="font-h2 text-2xl flex-none w-full">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h2>

        <div class="my-5 font-base text-base leading-6 basis-80 flex-auto">
          <p class="mb-4">1er festival de Rock humoristique de Strasbourg.</p>
          <p class="mb-4">Rock en Stras’ aura lieu du vendredi 15 au dimanche 17 avril au Deux Rives à Strasbourg.</p>
          <p class="mb-4">Retrouvez sur 2 scènes vos artictes préférés !</p>
        </div>

        <card image="../../public/paysage.jpg"
              imgalt="Le Jardin des Deux Rives à Strasbourg, le lieu du festvival"
              class="flex-none"/>
      </div>

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