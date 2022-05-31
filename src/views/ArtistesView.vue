<template>
    <div class="bg-pink-500 px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Qui vient à Rock en Stras’ ?</h1>

            <div class="mx-5">
                <div class="max-w-5xl mx-auto
                    grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(15rem,auto))] gap-10">

                    <cardArtiste class="w-full md:w-full xl:w-full"/>
                    <cardArtiste class="w-full md:w-full xl:w-full"/>
                    <cardArtiste class="w-full md:w-full xl:w-full"/>
                    <cardArtiste class="w-full md:w-full xl:w-full"/>
                    <cardArtiste class="w-full md:w-full xl:w-full"/>
                    <cardArtiste class="w-full md:w-full xl:w-full"/>
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