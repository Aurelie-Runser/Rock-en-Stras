<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <div class="flex flex-row flex-wrap justify-between mb-14">
                <div>
                    <h1 class="mb-12">Artiste N</h1>
                
                    <h2 class="my-12">Style de Musique</h2>
                </div>

            <cardArtiste class="flex-none mx-auto md:mx-0"
                image="/groupe.jpg"/>
            
            </div>

            <infoArtiste/>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            
        </div>
    </div>
</template>


<script>
import cardArtiste from "../components/cardArtiste.vue"
import infoArtiste from "../components/infoArtiste.vue"

export default {
  name: "ProgramView",
  data() {
    return {
    };
  },
  components: { cardArtiste, infoArtiste },
}
</script>