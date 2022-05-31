<template>
    <div class="bg-gray-900 px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <div class="gap-5">
                <h1 class="mb-12">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h1>
                <p class="mb-6 lg:mb-8 leading-8">Rock en Stras’ est le 1er festival de Rock humoristique de Strasbourg.</p>
                <p class="mb-6 lg:mb-8 leading-8">Ce festival aura lieu du vendredi 15 au dimanche 17 avril avec 2 scènes pour faire chanter 2 fois plus de vos artictes préférés !</p>
            </div>

            <div class="mx-auto my-16 max-w-6xl">
                <h3>La programmation</h3>

                <programArt class="flex-row"
                    jour="Vendredi 15"
                    artiste1="Salut c'est cool"
                    artiste2="Ultra Vomit"
                    artiste3="Les Bidochons"
                    artiste4="Les Fatals Picards"
                    artiste5="Elmer Food Beat"/>

                <programArt class="flex-row-reverse"
                    jour="Samedi 16"
                    artiste1="Ultra Vomit"
                    artiste2="Les Fatals Picards"
                    artiste3="Elmer Food Beat"
                    artiste4="Flagrants Délires"
                    artiste5="Fills Monkey"/>

                <programArt class="flex-row"
                    jour="Dimanche 17"
                    artiste1="Les Fatals Picards"
                    artiste2="Flagrants Délires"
                    artiste3="Fills Monkey"
                    artiste4="Sebkha-Chott"
                    artiste5="Ministère Magouille"/>
            </div>

            <div>
                <p>Pour avoir plus d’information, n’hésitez pas à aller jeter un œil à la page des artistes !</p>

                <RouterLink to="artistes">
                    <monButton class="m-auto">
                        Découvrir tous les Artistes
                    </monButton>
                </RouterLink>
            </div>
        
        </div>
    </div>
</template>


<script>
import programArt from "../components/programArt.vue"
import monButton from "../components/monButton.vue"

export default {
  name: "ProgramView",
  data() {
    return {
    };
  },
  components: { programArt, monButton },
}
</script>