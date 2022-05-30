<template>
    <div class="w-full p-7 bg-gray-300 text-pink-500 font-base">
        <div class="flex flex-wrap justify-between content-around gap-8">
            <div>
                <RouterLink to="/">
                    <img class="w-14" src="../../public/logo/logoPetit.png" alt="logo">
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

            <div>
                <RouterLink to="/contact">
                    <p>Nous contacter</p>
                </RouterLink>
            </div>

            <div>
                <p>Mentions légales</p>
            </div>
        </div>

        <div class="mt-6 text-center">
            <p>© MMI Montbéliard - 2022</p>
        </div>
    </div>
</template>

<script>
import facebookJour from "../components/icons/facebookJour.vue"
import instaJour from "../components/icons/instaJour.vue"
import twitterJour from "../components/icons/twitterJour.vue"

export default {
  name: "monFooter",
  data() {
    return {
    };
  },
  components: { facebookJour, instaJour, twitterJour },
}
</script>
