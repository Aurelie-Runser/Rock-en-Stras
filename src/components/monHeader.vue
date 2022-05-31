<template>
        <nav class="z-40 w-full h-24 bg-pink-300 flex flex-row items-center justify-between px-10">
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

                    <span class="sr-only">Bouton du menu</span>
                </button>
            </div>

            <!-- Menu phone -->
            <div id="menu"
                class="fixed overflow-y-hidden -translate-y-full px-5 inset-0 bg-gradient-to-b from-pink-300 to-black motion-safe:duration-500 motion-safe:transition-transform md:hidden"
                :class="{ 'translate-y-0': menuOuvert }">

                <ul class="my-24 font-h2 text-2xl text-white leading-loose">
                    <li><RouterLink to="/" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert"
                            class="hover:text-gray-900 focus:text-gray-900">Accueil</RouterLink></li>
                    <li><RouterLink to="/program" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert"
                            class="hover:text-gray-900 focus:text-gray-900">Programmation</RouterLink></li>
                    <li><RouterLink to="/artistes" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert"
                            class="hover:text-gray-900 focus:text-gray-900">Artistes</RouterLink></li>
                    <li><RouterLink to="/contact" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert"
                            class="hover:text-gray-900 focus:text-gray-900">Contact</RouterLink></li>
                </ul>
            </div>

            <!-- Menu ordi -->
            <ul class="hidden my-2 flex-auto justify-end font-h3 text-xl gap-20 text-white md:flex">
                <li><RouterLink to="/program" class="hover:text-gray-900 focus:text-gray-900">Programmation</RouterLink></li>
                <li><RouterLink to="/artistes" class="hover:text-gray-900 focus:text-gray-900">Artistes</RouterLink></li>
                <li><RouterLink to="/contact" class="hover:text-gray-900 focus:text-gray-900">Contact</RouterLink></li>
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
