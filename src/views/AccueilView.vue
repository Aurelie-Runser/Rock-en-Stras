<template>
  <div>
    <!--Section 1 : titre-->

    <div class="flex justify-center pt-36 pb-24 bg-pink-300">
      <logoGrand class="mx-5 max-w-2xl"/>
      <span class="sr-only">Rock en Stras'</span>
    </div>

    <!--Section 2 : Programme-->

    <div class="bg-base light:bg-base-light">
      <section class="max-w-7xl m-auto px-5 py-10 pb-0 lg:pt-24 flex flex-row flex-wrap justify-center items-center gap-10 lg:gap-20">

        <h2 class="flex-none w-full light:text-light">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h2>

        <div class="my-5 font-base leading-[2rem] basis-80 flex flex-col flex-auto">
          <p class="mb-6 lg:mb-8 light:text-light">1er festival de Rock humoristique de Strasbourg.</p>
          <p class="mb-6 lg:mb-8 light:text-light">Rock en Stras’ aura lieu du vendredi 15 au dimanche 17 avril au Deux Rives à Strasbourg.</p>
          <p class="mb-6 lg:mb-8 light:text-light">Retrouvez sur 2 scènes vos artistes préférés !</p>

          <RouterLink to="/program" class="mx-auto">
            <monButton>
              Voir tout le Programme
            </monButton>
          </RouterLink>

        </div>

        <card image="/paysage.jpg"
                      imgalt="Le Jardin des Deux Rives à Strasbourg, le lieu du festvival"
                      class="flex-none"/>

      </section>

      <separateurRose class="mt-5 w-screen"/>

    </div>

    <!--Section 3 : Les Artistes-->

    <div class="bg-pink ">
      <section class="max-w-7xl m-auto px-5 pb-10 lg:pb-20 flex flex-row flex-wrap items-center gap-10 lg:gap-20">

        <h2 class="flex-none w-full light:text-light">Qui vient à Rock en Stras’ ?</h2>

        <cardArtiste class="m-auto"
                     image="/groupe.jpg"
                     imgalt="Illustration d'un groupe de musique"/>

        <div class="basis-96 flex-auto flex flex-col gap-2 lg:gap-10">
          <p class="leading-8 light:text-light">Pas moins de 9 groupes et artistes seront présents sur les 3 jours du festival !</p>
            
          <RouterLink to="/artistes" class="mx-auto">
            <monButton>
              Découvrir tous les Artistes
            </monButton>
          </RouterLink>
        </div>

      </section>
    </div>

    <!--Section 4 : Contact-->

    <div class="bg-base light:bg-base-light">
      <section class="max-w-7xl m-auto px-8 py-10 lg:pb-20 flex flex-row flex-wrap items-center gap-10 lg:gap-20">

        <div class="flex-none w-full flex flex-row items-center justify-between">
        <h2 class="inline-block light:text-light">Besoin de renseignement ?</h2>

        <img class="hidden m-auto w-36 sm:inline-block lg:w-48"
              src="/lettre.png" 
              alt="dessin d'une enveloppe">

        </div>

        <div class="leading-8">
          <p class="mb-6 lg:mb-8 light:text-light">Des détails pas claires ? Une information manquante ? Un problème ?</p>
          <p class="light:text-light">Venez-donc nous écrire un message !</p>
        </div>

        <div class="flex-none w-full my-0">
          <RouterLink to="/contact">
            <monButton class="mx-auto px-10 py-5 rounded-r-[5rem] text-3xl">
              Contacter
            </monButton>
          </RouterLink>
        </div>

      </section>

      <separateurRose class="mt-5 w-screen"/>

    </div>

    <!--Section 5 : Se connecter-->

    <div class="bg-pink">
      <section class="max-w-7xl m-auto px-5 pb-10 lg:pb-20 ">

        <h2 class="mb-10 light:text-light">Mon Compte</h2>

        <p class="light:text-light">Vous avez un compte ? Pensez à vous connecter !</p>
          
          <RouterLink to="/compte" class="mx-auto">
            <monButton class="mx-auto px-10 py-5 rounded-r-[5rem] text-2xl">
              Se conncecter
            </monButton>
          </RouterLink>
          
          <RouterLink to="/style-guide" class="mx-auto">
            <monButton>
              Découvrir le Guide de Style
            </monButton>
          </RouterLink>

      </section>
    </div>
    
  </div>
</template>

<script>
import logoGrand from "../components/icons/logoGrand.vue"
import card from "../components/cardBase.vue"
import cardArtiste from "../components/cardArtiste.vue"
import monButton from "../components/monButton.vue"
import separateurRose from "../components/icons/separateurRose.vue"

export default {
  name: "AccueilView",
  data() {
    return {
    };
  },
  components: { logoGrand, card, cardArtiste, monButton, separateurRose },
}
</script>