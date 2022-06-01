<template>
    <div class="bg-base px-5 py-36 ">
        <h1 class="mb-12">Concerts du ???</h1>

        <!--Scène 1-->
        <div class="flex flex-col max-w-6xl mx-auto my-20">
            <div class="flex flex-wrap justify-between items-center w-full sm:w-[80%] lg:w-full gap-x-5 lg:gap-x-10">
                <div class="basis-12 flex-grow">
                    <h2>Scène 1</h2>

                    <ul class="font-semibold text-base sm:text-lg lg:text-xl leading-10 sm:leading-[4rem] lg:leading-[5rem] text-gray-100 nth-child-2n:text-pink">
                        <li>14h - 16h :</li>
                        <li>16h30h - 18h30 : </li>
                        <li>19h - 22h :</li>
                    </ul>
                </div>

                <cardPortrait class="lg:hidden"
                    image="/scene1po.jpg" imgalt="photo de la scène 1"/>
                <cardPaysage class="hidden lg:block"
                    image="/scene1pa.jpg" imgalt="photo de la scène 2"/>

            </div>

            <RouterLink to="/artistes" class="flex-none flex justify-center w-full">
                <monButton>
                    Découvrir tous les Artistes
                </monButton>
            </RouterLink>
        </div>
           

        <!--Scène 2-->
        <div class="flex flex-col max-w-6xl mx-auto my-20">
            <div class="flex flex-row-reverse flex-wrap justify-between items-center w-full sm:w-[80%] lg:w-full gap-x-5 lg:gap-x-10">
                <div class="basis-12 flex-grow">
                    <h2>Scène 2</h2>

                    <ul class="font-semibold text-base sm:text-lg lg:text-xl leading-10 sm:leading-[4rem] lg:leading-[5rem] text-gray-100 nth-child-2n:text-pink">
                        <li>14h - 16h :</li>
                        <li>16h30h - 18h30 : </li>
                        <li>19h - 22h :</li>
                    </ul>
                </div>

                <cardPortrait class="lg:hidden"
                    image="/scene2po.jpg" imgalt="photo de la scène 1"/>
                <cardPaysage class="hidden lg:block"
                    image="/scene2pa.jpg" imgalt="photo de la scène 2"/>

            </div>

            <RouterLink to="/artistes" class="flex-none flex justify-center w-full">
                <monButton>
                    Découvrir tous les Artistes
                </monButton>
            </RouterLink>
        </div>
           
    </div>
</template>

<script>
import monButton from "../components/monButton.vue"
import cardPortrait from "../components/cardPortrait.vue"
import cardPaysage from "../components/cardPaysage.vue"

export default {
  name: "ConcertView",
  data() {
    return {
    };
  },
  components: { monButton, cardPortrait, cardPaysage },
}
</script>