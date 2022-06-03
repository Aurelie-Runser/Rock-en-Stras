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

                <div class="basis-72 flex-grow">
                    <label for="name" class="sr-only">Mot de passe</label>
                    <input 
                        :type="type" 
                        v-model="user.password" 
                        id="name" 
                        name="user_name"
                        placeholder="Mot de passe"
                        required/>
                    <backButton @click.prevent="affiche()">
                        affiche
                    </backButton>
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

import{
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"


export default {
  name: "ArtistesView",
  components: { backButton },

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
                console.log("user", this.user);
                //mise a jour du message
                this.message = "Vous êtes connecté : "+this.user.email;
            })
            .catch((error) =>{
                console.log("errur connexion", error);
                this.message = "erreur d'authentification";
            })
        },

        onDcnx(){
            //se déconnecter
            signOut(getAuth())
            .then(response =>{
                //mise a jour du message
                this.message = "user non concté";
                //ré initialisation des champs
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
