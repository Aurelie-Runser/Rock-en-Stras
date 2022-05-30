<template>
    <div class="w-full p-7 bg-gray-300">
        <div>
            <RouterLink to="/">
                <img src="../../public/logo/logoPetit.png" alt="logo">
                <span class="sr-only">Accueil</span>
            </RouterLink>
        </div>

        <div class="flex gap-4">
            <img src="../../public/reseau/facebookJour.png" alt="lien vers facebook">
            <img src="../../public/reseau/instagramJour.png" alt="lien vers instagram">
            <img src="../../public/reseau/twitterJour.png" alt="lien vers twitter">
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
