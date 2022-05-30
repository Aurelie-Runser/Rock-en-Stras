<template>
        <nav class="w-full h-24 bg-gradient-to-r from-pink-300 to-transparent flex flex-row items-center justify-between px-5">
            <div>
                <RouterLink to="/">
                    <logoPetit class="w-14"/>
                    <span class="sr-only">Accueil</span>
                </RouterLink>
            </div>
            <div>
                <button class="relative z-50 sm:hidden"
                        aria-haspopup="true"
                        aria-controls="menu"
                        :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">

                    <img v-if="!menuOuvert" 
                            src="../../public/menu/menuFerme.png" alt="boutton pour ouvrir le menu">

                    <img v-else
                            src="../../public/menu/menuOuvert.png" alt="boutton pour fermer le menu">

                    <span class="sr-only">Menu</span>
                </button>
            </div>

            <div id="menu"
                class="fixed -translate-y-full px-5 inset-0 bg-gradient-to-b from-pink-300 to-black motion-safe:duration-500 motion-safe:transition-transform sm:hidden"
                :class="{ 'translate-y-0': menuOuvert }">

                <ul class="my-24 font-h2 text-2xl text-white leading-loose">
                    <li><RouterLink to="/" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Accueil</RouterLink></li>
                    <li><RouterLink to="/program" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Programmation</RouterLink></li>
                    <li><RouterLink to="/artistes" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Artistes</RouterLink></li>
                    <li><RouterLink to="/festival" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Festival</RouterLink></li>
                    <li><RouterLink to="/contact" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Contact</RouterLink></li>
                </ul>
            </div>

            <ul class="hidden my-2 flex-auto justify-evenly content-between font-h3 text-xl text-white sm:flex">
                <!-- Autre menu -->
                <li><RouterLink to="/program" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Programmation</RouterLink></li>
                <li><RouterLink to="/artistes" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Artistes</RouterLink></li>
                <li><RouterLink to="/festival" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Festival</RouterLink></li>
                <li><RouterLink to="/contact" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">Contact</RouterLink></li>
            </ul>
        </nav>
</template>

<script>
import logoPetit from "../components/icons/logoPetit.vue"

export default {
  name: "MonHeader",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { logoPetit },
}
</script>
