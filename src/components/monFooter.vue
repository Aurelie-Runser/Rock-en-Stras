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
                <a href="https://fr-fr.facebook.com/">
                    <img class="w-12 h-12" src="../../public/reseau/facebookJour.png" alt="lien vers facebook">
                </a>
                <a href="https://twitter.com/?lang=fr">
                    <img class="w-12 h-12" src="../../public/reseau/instagramJour.png" alt="lien vers instagram">
                </a>
                <a href="https://www.instagram.com/">
                    <img class="w-12 h-12" src="../../public/reseau/twitterJour.png" alt="lien vers twitter">
                </a>
            </div>

            <div>
                <RouterLink to="/contact">
                    <p>Nous contacter</p>
                </RouterLink>
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
