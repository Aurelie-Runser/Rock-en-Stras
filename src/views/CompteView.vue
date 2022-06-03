<template>
    <div class="bg-base px-5 py-36 ">
        <div class="m-auto max-w-3xl">
            <h1 class="mb-5">Mon Compte</h1>
                

            <form class="flex flex-wrap justify-evenly gap-x-10 gap-y-5">
            
                <div class="basis-72 flex-grow">
                    <label for="name" class="sr-only">Adresse mail (obligatoire)</label>
                    <input 
                        type="text" 
                        id="mail" 
                        name="user_mail"
                        placeholder="Adresse mail"
                        required/>
                </div>

                <div class="basis-72 flex-grow">
                    <label for="name" class="sr-only">Mot de passe</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="user_name"
                        placeholder="Mot de passe"
                        required/>
                </div>

                <div class="flex-none mx-auto p-5 w-full bg-pink-300 text-center text-gray-900" role="alert">
                    Vous n'etes pas connecter
                </div>
            
                    <backButton type="submit"
                        class="mt-12 sm:text-xl">
                        Connexion
                    </backButton>

                    <backButton type="button"
                        class="mt-12 sm:text-xl">
                        Deconnexion
                    </backButton>
            </form>
        </div>
    </div>
</template>

<script>
import backButton from "../components/backButton.vue"

export default {
  name: "ArtistesView",
  components: { backButton },

  data() {
    return {

    };
  },
}
</script>
