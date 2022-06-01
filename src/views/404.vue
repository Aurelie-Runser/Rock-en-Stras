<template>
    <div class="bg-pink-300 px-5 py-36 ">
        <div class="m-auto max-w-3xl flex flex-col items-center gap-5">

            <h1 class="font-h2 text-[7rem] sm:text-[10rem] text-black">
                <span class="mx-3">4</span>
                <logoPetit class="inline w-28 sm:w-40"/>
                <span class="mx-3">4</span>
            </h1>

            <h3 class="text-gray-900 text-center">Mince, la page que vous voulez n'a pas été trouvé... <br/> elle a surement été perdu entre une guitare et une bière</h3>

            <RouterLink to="/">
                <monButton class="mx-auto px-10 py-5 rounded-r-[5rem] text-3xl">
                    Accueil
                </monButton>
            </RouterLink>

        </div>
    </div>
</template>

<script>
import logoPetit from "../components/icons/logoPetit.vue"
import monButton from "../components/monButton.vue"

export default {
  name: "ProgramView",
  data() {
    return {
    };
  },
  components: { logoPetit, monButton },
}
</script>