<template>
    <div class="w-full p-7 bg-gray-300">
        <div class="flex flex-wrap items-center justify-around gap-8">
            <div>
                <RouterLink to="/">
                    <logoPetit class="w-14"/>
                    <span class="sr-only">Accueil</span>
                </RouterLink>
            </div>

            <div class="flex gap-4 items-center">
                <a href="https://fr-fr.facebook.com/">
                    <facebookJour class="w-12 h-12"/>
                </a>

                <a href="https://www.instagram.com/">
                        <instaJour class="w-14 h-14"/>
                </a>

                <a href="https://twitter.com/?lang=fr">
                        <twitterJour class="w-12 h-12"/>
                </a>
            </div>

                <RouterLink to="/contact">
                    <p class="font-base text-pink-500">Nous contacter</p>
                </RouterLink>

                <p class="font-base text-pink-500">Mentions légales</p>
            
        </div>

        <div class="mt-6 text-center">
            <p class="font-base text-pink-500">© MMI Montbéliard - 2022</p>
        </div>
    </div>
</template>

<script>
import logoPetit from "../components/icons/logoPetit.vue"
import facebookJour from "../components/icons/facebookJour.vue"
import instaJour from "../components/icons/instaJour.vue"
import twitterJour from "../components/icons/twitterJour.vue"

export default {
  name: "monFooter",
  data() {
    return {
    };
  },
  components: { logoPetit, facebookJour, instaJour, twitterJour },
}
</script>
