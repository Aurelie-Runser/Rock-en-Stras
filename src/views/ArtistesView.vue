<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Qui vient à Rock en Stras’ ?</h1>

            <div class="mx-5">
                <div class="max-w-5xl mx-auto
                    grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(15rem,auto))] gap-10">

                    <!-- Version non intégré
                    <cardArtiste class="w-full md:w-full xl:w-full"
                        v-for="n in 9"
                        :key="n"
                        :image="`/groupe/groupe-${n}.jpg`"
                        alt="photo du groupe">
                           
                    </cardArtiste>
                    -->

                    <RouterLink to="/groupe"
                        v-for="n in 9"
                        :key="n">
             
                        <div class="relative overflow-hidden w-full aspect-video border-4 border-gray-300 skew-y-3">
                            <img class="-mt-7 w-full h-[130%] object-cover center -skew-y-3" :src="`/groupe/groupe-${n}.jpg`" alt="imgalt">
                            <div class="absolute z-10 top-0 bottom-0 right-0 left-0 flex justify-center items-center text-center bg-gray-700_50">
                                <h3>Artiste</h3>
                            </div>
                        </div>

                    </RouterLink>

                    <!--
                        ultra vomit
                        fatal picard
                        flagran delir
                        Fills Monkey
                        elmer food beat
                        Ministère Magouille
                        salut c'est cool
                        Sebkha-Chott
                        bidochon
                    -->
                </div>
            </div>
        
        </div>
    </div>
</template>


<script>
import cardArtiste from "../components/cardArtiste.vue"

export default {
  name: "ProgramView",
  data() {
    return {
    };
  },
  components: { cardArtiste },
}
</script>