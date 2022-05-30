<template>
    <div class="w-full p-7 bg-gray-300 text-pink-500 font-base">
        <div class="flex flex-wrap justify-between content-around gap-8">
            <div>
                <RouterLink to="/">
                    <img class="w-14" src="../../public/logo/logoPetit.png" alt="logo">
                    <span class="sr-only">Accueil</span>
                </RouterLink>
            </div>

            <div class="flex gap-4 flex-none">
                <img class="w-12 h-12" src="../../public/reseau/facebookJour.png" alt="lien vers facebook">
                <img class="w-12 h-12" src="../../public/reseau/instagramJour.png" alt="lien vers instagram">
                <img class="w-12 h-12" src="../../public/reseau/twitterJour.png" alt="lien vers twitter">
            </div>

            <div>
                <p>Nous contacter</p>
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

export default {
  name: "monFooter",
  data() {
    return {
    };
  },
  components: {  },
}
</script>
