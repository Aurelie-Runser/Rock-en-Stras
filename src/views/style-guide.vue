<template>
    <div class="bg-pink-300 px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Guide de Style</h1>
        
            <section class="my-20">
                <h2 class="mb-10 px-5 py-3 bg-base inline-block">Les Couleurs</h2>

                <ul class="mx-auto my-10 flex flex-wrap gap-4">
                    <li class="w-24 h-24 border-black border rounded-xl bg-black
                        flex flex-none justify-center items-center text-center font-base text-gray-100">black</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-gray-900
                        flex flex-none justify-center items-center text-center font-base text-gray-100">gray-900</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-gray-700
                        flex flex-none justify-center items-center text-center font-base text-gray-100">gray-700</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-gray-300
                        flex flex-none justify-center items-center text-center font-base text-gray-900">gray-300</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-gray-100
                        flex flex-none justify-center items-center text-center font-base text-gray-900">gray-100</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-pink-800
                        flex flex-none justify-center items-center text-center font-base text-gray-100">pink-800</li>                    
                    <li class="w-24 h-24 border-black border rounded-xl bg-pink-500
                        flex flex-none justify-center items-center text-center font-base text-gray-100">pink-500</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-pink-300
                        flex flex-none justify-center items-center text-center font-base text-gray-900">pink-300</li>
                    <li class="w-24 h-24 border-black border rounded-xl bg-pink-300_90
                        flex flex-none justify-center items-center text-center font-base text-gray-100">pink-300 90%</li>
                </ul>
            </section>

            <div class="my-20 flex flex-row flex-wrap justify-evenly gap-x-20 gap-y-20">
                <section>
                    <h2 class="mb-10 px-5 py-3 bg-base inline-block">Les Typos</h2>

                    <ul class="text-gray-100 text-xl leading-loose">
                        <li class="font-h1">h1 = Parisienne</li>
                        <li class="font-h2">h2 = Metal Mania</li>
                        <li class="font-h3">H1 = Germania One</li>
                        <li class="font-base">p = Sora</li>
                        <li class="font-semibold">p = Sora bold-400</li>
                        <li class="font-button">button = Pacifico</li>
                    </ul>
                </section>

                <section>
                    <h2 class="mb-10 px-5 py-3 bg-base inline-block">Les Tailles</h2>

                    <ul class="text-gray-100 font-base leading-loose">
                        <li class="text-3xl">3xl = 3rem</li>
                        <li class="text-2xl">2xl = 2.5rem</li>
                        <li class="text-xl">xl = 2rem</li>
                        <li class="text-lg">lg = 1.25rem</li>
                        <li class="text-base">base = 1rem</li>
                    </ul>
                </section>
            </div>


            <section class="my-20">
                <h2 class="mb-10 px-5 py-3 bg-base inline-block">Les Icons</h2>

                <div class="p-5 flex flex-wrap items-center justify-around gap-10 bg-gray-300">
                    <div class="flex gap-5">
                        <logoGrand class="w-60"/>
                        <logoPetit class="w-20"/>
                    </div>
                    <div class="flex gap-5">
                        <menuFerme class="w-[60px] h-[60px]"/>
                        <menuOuvert class="w-[60px] h-[60px]"/>
                    </div>
                    <div class="flex gap-5">
                        <facebookIcon class="w-12 h-12"/>
                        <instaIcon class="w-14 h-14"/>
                        <twitterIcon class="w-12 h-12"/>
                        <youtubeIcon class="w-12 h-12"/>
                    </div>
                    <separateurRose class="w-96"/>
                </div>
            </section>

            <section>
                    <h2 class="mb-10 px-5 py-3 bg-base inline-block">Les Composants</h2>
                
                    <div class="p-5 flex flex-wrap items-center justify-around gap-10 bg-gray-900">
               
                        <monButton>Mon Bouton</monButton>
                        <backButton>Bouton pour tout ce qui est "Back"</backButton>
                        <card image="/paysage.jpg"/>
                        <cardArtiste image="/groupe.jpg"/>
                        <infoArtiste/>
                    </div>
            </section>
        </div>
    </div>
</template>

<script>
import logoGrand from "../components/icons/logoGrand.vue"
import logoPetit from "../components/icons/logoPetit.vue"
import menuFerme from "../components/icons/menuFerme.vue"
import menuOuvert from "../components/icons/menuOuvert.vue"
import separateurRose from "../components/icons/separateurRose.vue"
import facebookIcon from "../components/icons/facebook.vue"
import instaIcon from "../components/icons/insta.vue"
import twitterIcon from "../components/icons/twitter.vue"
import youtubeIcon from "../components/icons/youtubeIcon.vue"

import monButton from "../components/monButton.vue"
import backButton from "../components/backButton.vue"
import card from "../components/cardBase.vue"
import cardArtiste from "../components/cardArtiste.vue"
import infoArtiste from "../components/infoArtiste.vue"

export default {
  name: "AccueilView",
  data() {
    return {
    };
  },
  components: { logoGrand, logoPetit, menuFerme, menuOuvert, separateurRose, facebookIcon, instaIcon, twitterIcon, youtubeIcon,
                monButton, backButton, card, cardArtiste, infoArtiste, },
}
</script>