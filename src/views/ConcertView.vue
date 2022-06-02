<template>
    <div class="bg-base px-5 py-36 ">
        <h1 class="mb-12">Concerts du Vendredi 15 Avril</h1>

        <!--Scène 1-->
        <div class="max-w-7xl mx-auto my-20 mb-40">
            <div class="flex flex-wrap justify-between items-center w-full gap-x-5 lg:gap-x-10">
                <div class="basis-12 flex-grow">
                    <h2>Scène 1</h2>

                    <div class="my-5 flex flex-wrap gap-5 w-auto items-center"
                         v-for="h in listeHorraire" :key="h.id">
                       <!-- <p class="text-pink-500">{{h.heure}}</p> -->
                       <!-- <p class="text-pink-500">{{h.groupe}}</p> -->

                        <div class="flex flex-wrap gap-5 items-center">
                            <input class="h-11 w-auto m-0 px-5 py-0 bg-transparent border-transparent 
                                            text-base sm:text-lg font-base font-semibold text-pink-500
                                            motion-safe:transition motion-safe:duration-300
                                            hover:border-white
                                            focus:bg-gray-700 focus:text-gray-100" type='time' v-model='h.heure' />

                            <input class="h-11 w-auto m-0 px-5 py-0 bg-transparent border-transparent 
                                            text-base sm:text-lg font-base font-semibold text-pink-500
                                            motion-safe:transition motion-safe:duration-300
                                            hover:border-white
                                            focus:bg-gray-700 focus:text-gray-100" type='text' v-model='h.groupe' />
                        </div>

                        <div class="flex gap-5 mx-auto">
                            <updateButton @click.prevent="updateHorraire(h)"/>

                            <deleteButton @click.prevent="deleteHorraire(h)"/>
                        </div>
                    </div>
                </div>

                <card class="mx-auto md:aspect-[13/16] lg:aspect-video" image="/scene1.jpg" imgalt="photo de la scène 1"/>

            </div>

            <RouterLink to="/artistes" class="block w-max mx-auto">
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
                        <li>14h - 16h : Elmer Food Beat</li>
                        <li>16h30h - 18h30 : Flagrants Délires</li>
                    </ul>
                </div>

                <card image="/scene2.jpg" imgalt="photo de la scène 2"/>

            </div>

            <RouterLink to="/artistes" class="flex-none flex justify-center">
                <monButton>
                    Découvrir tous les Artistes
                </monButton>
            </RouterLink>
        </div>
           
    </div>
</template>

<script>
import monButton from "../components/monButton.vue"
import card from "../components/cardBase.vue"

import updateButton from "../components/icons/updateButton.vue"
import deleteButton from "../components/icons/deleteButton.vue"


import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'



export default {
  name: "ConcertView",
  components: { monButton, card, updateButton, deleteButton},

  data() {
    return {
        heure: null,
        listeHorraire : []
    };
  },

  computed:{
      orderByTime:function(){
        return this.listeHorraire.sort(function(a, b){
          if(a.heure < b.heure) return -1;
          if(a.heure > b.heure) return 1;
          return 0
        })
      },
  },
  
  mounted(){
      // appel liste jour
      this.getHorraire();
  },

  methods:{
        async getHorraire(){
            const firestore = getFirestore();
            const dbHorraire = collection(firestore, "horraire");
            const query = await onSnapshot(dbHorraire, (snapshot) =>{
                this.listeHorraire = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
            })
        },

        async updateHorraire(h){
            const firestore = getFirestore();
            const docRef = doc(firestore, "horraire", h.id);
            await updateDoc(docRef, {
                heure: h.heure,
                groupe: h.groupe,
            })
        },

        async deleteHorraire(h){
            const firestore = getFirestore();
            const docRef = doc(firestore, "horraire", h.id);
            await deleteDoc(docRef);
        },
  },
}
</script>