<template>
    <div class="bg-base px-5 py-36 ">
        <div class="m-auto max-w-3xl">
            <h1 class="mb-5">Mon Compte</h1>
                

            <form class="flex flex-wrap justify-evenly gap-x-10 gap-y-5"
                    @submit.prevent="onCnx">
            
                <div class="basis-72 flex-grow">
                    <label for="name" class="sr-only">Adresse mail (obligatoire)</label>
                    <input 
                        type="email" 
                        id="mail" 
                        name="user_mail"
                        placeholder="Adresse mail"
                        v-model="user.email"
                        required/>
                </div>

                <div class="flex justify-end gap-5">
                    <label for="name" class="sr-only">Mot de passe</label>
                    <input
                        :type="type" 
                        v-model="user.password" 
                        id="name" 
                        name="user_name"
                        placeholder="Mot de passe"
                        required/>
                    <visibleButton @click.prevent="affiche()"
                                    class=""/>
                </div>

                <div class="flex-none mx-auto p-5 w-full bg-pink-300 text-center text-gray-900" role="alert">
                    <p>{{message}}</p>
                </div>
            
                    <backButton type="submit"
                                class="mt-12 sm:text-xl">
                        Connexion
                    </backButton>

                    <backButton type="button"
                                class="mt-12 sm:text-xl"
                                @click="onDcnx()">
                        Deconnexion
                    </backButton>
            </form>
        </div>
    </div>
</template>

<script>
import backButton from "../components/backButton.vue"
import visibleButton from "../components/icons/visibleButton.vue"

import{
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

export default {
  name: "ArtistesView",
  components: { backButton, visibleButton },

  data() {
    return {
            user:{
                email: "",
                password: ""
            },
            message: null,
            view: false,
            type:"password",
            imgData: null,
        };
    },

    mounted(){
        this.message = "Vous n'êtes pas connecté"
    },

    methods:{

        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response) =>{
                this.user = response.user;
                this.message = "Vous êtes connecté : "+this.user.email;
            })
            .catch((error) =>{
                console.log("erreur de connexion", error);
                this.message = "erreur d'authentification";
            })
        },

        onDcnx(){
            signOut(getAuth())
            .then(response =>{
                this.message = "Vous n'êtes pas connecté";
                this.user = {
                    email: null,
                    password: null,
                };
            })
            .catch(error =>{
                cosole.log("erreur deconnexion ", error);
            })
        },

        affiche(){
            this.view = !this.view;
            if(this.view)   {this.type = "text";}
            else            {this.type = "password";}
        },
  }
}
</script>
