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
                    <facebookIcon class="w-12 h-12"/>
                </a>

                <a href="https://www.instagram.com/">
                        <instaIcon class="w-14 h-14"/>
                </a>

                <a href="https://twitter.com/?lang=fr">
                        <twitterIcon class="w-12 h-12"/>
                </a>
            </div>

                <RouterLink to="/contact">
                    <p class="font-base text-pink">Nous contacter</p>
                </RouterLink>

                <p class="font-base text-pink">Mentions légales</p>
            
        </div>

        <div class="mt-6 text-center">
            <p class="font-base text-pink">© MMI Montbéliard - 2022</p>
        </div>
    </div>
</template>

<script>
import logoPetit from "../components/icons/logoPetit.vue"
import facebookIcon from "./icons/facebook.vue"
import instaIcon from "./icons/insta.vue"
import twitterIcon from "./icons/twitter.vue"

export default {
  name: "monFooter",
  data() {
    return {
    };
  },
  components: { logoPetit, facebookIcon, instaIcon, twitterIcon },
}
</script>
