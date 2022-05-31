<template>
  <div>
    <!--Section 1 : titre-->

    <div class="flex justify-center pt-36 pb-24 bg-pink-300">
      <logoGrand class="mx-10 max-w-4xl"/>
      <span class="sr-only">Rock en Stras'</span>
    </div>

    <!--Section 2 : Programme-->

    <div class="bg-gray-900 text-white">
      <section class="max-w-7xl m-auto p-10 pb-0 lg:pt-24 flex flex-row flex-wrap items-center gap-10 lg:gap-20">

        <h2 class="flex-none w-full">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h2>

        <div class="my-5 font-base text-base lg:text-lg leading-[2rem] basis-80 flex flex-col flex-auto">
          <p class="mb-6 lg:mb-8">1er festival de Rock humoristique de Strasbourg.</p>
          <p class="mb-6 lg:mb-8">Rock en Stras’ aura lieu du vendredi 15 au dimanche 17 avril au Deux Rives à Strasbourg.</p>
          <p class="mb-6 lg:mb-8">Retrouvez sur 2 scènes vos artistes préférés !</p>

          <monButton>
            Voir tout le Programme
          </monButton>

        </div>

        <cardPaysage image="../../public/paysage.jpg"
                      imgalt="Le Jardin des Deux Rives à Strasbourg, le lieu du festvival"
                      class="flex-none"/>

      </section>

      <separateurRose1 class="mt-5 w-screen"/>

    </div>

    <!--Section 3 : Les Artistes-->

    <div class="bg-pink-500 text-white">
      <section class="max-w-7xl m-auto px-8 pb-10 lg:pb-20 flex flex-row flex-wrap items-center gap-10 lg:gap-20">

        <h2 class="flex-none w-full">Qui vient à Rock en Stras’ ?</h2>

        <cardArtiste class="m-auto"
                     image="../../public/groupe.jpg"
                     imgalt="Illustration d'un groupe de musique"/>

        <div class="basis-96 flex-auto flex flex-col gap-2 lg:gap-10">
          <p class="font-base text-base lg:text-lg leading-8">Pas moins de 9 groupes et artistes seront présents sur les 3 jours du festival !</p>
            
          <monButton>
            Découvrir tous les Artistes
          </monButton>
        </div>

      </section>
    </div>

    <!--Section 4 : Contact-->

    <div class="bg-gray-900 text-white">
      <section class="max-w-7xl m-auto px-8 py-10 lg:pb-20 flex flex-row flex-wrap items-center gap-10 lg:gap-20">

        <div class="flex-none w-full flex flex-row items-center justify-between">
        <h2 class="inline-block">Besoin de renseignement ?</h2>

        <img class="hidden sm:inline-block"
              src="../../public/lettre.png" 
              alt="dessin d'une enveloppe">

        </div>

        <div class="font-base text-base lg:text-lg leading-8">
          <p class="mb-6 lg:mb-8">Des détails pas claires ? Une information manquante ? Un problème ?</p>
          <p>Venez-donc nous écrire un message !</p>
        </div>

        <div class="flex-none w-full my-0">
          <monButton class="mx-auto rounded-r-[5rem] text-3xl">
            Contacter
          </monButton>
        </div>

      </section>
    </div>
    
  </div>
</template>

<script>
import logoGrand from "../components/icons/logoGrand.vue"
import cardPaysage from "../components/cardPaysage.vue"
import cardArtiste from "../components/cardArtiste.vue"
import monButton from "../components/monButton.vue"
import separateurRose1 from "../components/icons/separateurRose1.vue"

export default {
  name: "AccueilView",
  data() {
    return {
    };
  },
  components: { logoGrand, cardPaysage, cardArtiste, monButton, separateurRose1 },
}
</script>