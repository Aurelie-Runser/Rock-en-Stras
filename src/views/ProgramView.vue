<template>
    <div class="bg-gray-900 px-10 py-36 ">
        <div class="m-auto max-w-7xl">
            <div class="gap-5">
                <h1 class="mb-12">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h1>
                <p class="mb-6 lg:mb-8 leading-8">Rock en Stras’ est le 1er festival de Rock humoristique de Strasbourg.</p>
                <p class="mb-6 lg:mb-8 leading-8">Ce festival aura lieu du vendredi 15 au dimanche 17 avril avec 2 scènes pour faire chanter 2 fois plus de vos artictes préférés !</p>
            </div>

            <div class="mx-auto my-16 max-w-5xl">
                <h3>La programmation</h3>

                <programArt class="flex-row"/>
                <programArt class="flex-row-reverse"/>
                <programArt class="flex-row"/>
            </div>

        
        </div>
    </div>
</template>


<script>
import programArt from "../components/programArt.vue"

export default {
  name: "ProgramView",
  data() {
    return {
    };
  },
  components: { programArt },
}
</script>