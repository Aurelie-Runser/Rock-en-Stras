<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Qui vient à Rock en Stras’ ?</h1>

            <div class="mx-5">

              <div class="my-20 mx-full flex flex-wrap justify-evenly gap-y-5">
                <RouterLink to="/createArtistes">
                  <backButton>
                    Ajouter un groupe
                  </backButton>
                </RouterLink>

                <searchButton class="m-0"
                              v-on:click="viewFilter = !viewFilter"/>

                  <div class="w-full">
                  <input class="w-full flex-none"
                          type="text"
                          v-model="query"
                          placeholder="Recherche"
                          v-if="viewFilter">        
                </div>
              </div>

              <div class="max-w-5xl mx-auto
                          grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(15rem,auto))] gap-10">

                  <div v-for="g in listeGroupeSearch" :key="g.id">
                    <RouterLink to="/groupe">
                        <div class="relative overflow-hidden w-full aspect-video border-4 border-gray-300 skew-y-3">
                            <img class="-mt-7 w-full h-[130%] object-cover center -skew-y-3" :src="g.image" alt="photo du groupe">
                            <div class="absolute z-10 top-0 bottom-0 right-0 left-0 flex justify-center items-center text-center bg-gray-700_50">
                                <h3>{{g.nom}}</h3>
                            </div>
                        </div>
                    </RouterLink>

                    <RouterLink :to="{ name:'UpdateArtistes', params: { id: g.id }}">
                      <updateButton/>
                    </RouterLink>

                    <RouterLink :to="{ name:'DeleteArtistes', params: { id: g.id }}">
                      <deleteButton/>
                    </RouterLink>
                  </div>
              </div>


            </div>
        
        </div>
    </div>
</template>


<script>
import cardArtiste from "../../components/cardArtiste.vue"
import searchButton from "../../components/icons/searchButton.vue"
import backButton from "../../components/backButton.vue"

import downloadButton from "../../components/icons/downloadButton.vue"
import updateButton from "../../components/icons/updateButtonWhite.vue"
import deleteButton from "../../components/icons/deleteButtonWhite.vue"

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

import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
  name: "ArtistesView",
  components: { cardArtiste, searchButton, backButton,
                downloadButton, updateButton, deleteButton },

  data() {
    return {
        listeGroupe: [],

        viewFilter: false,
        query:"",
    };
  },

  computed:{
    orderByName:function(){
      return this.listeGroupe.sort(function(a,b){
        if(a.nom < b.nom) return -1;
        if(a.nom > b.nom) return 1;
        return 0;
      });
    },
    listeGroupeSearch:function(){
      if(this.query.length > 0){
        let query = this.query.toLowerCase();
        return this.orderByName.filter(function(g){
          return g.nom.toLowerCase().includes(query);
        })
      }
      else{
        return this.orderByName;
      }
    }
  },

  mounted(){
      // appel liste Groupe
      this.getGroupe();
  },

  methods: {

    async getGroupe() {
    const firestore = getFirestore();
    const dbGroupe = collection(firestore, "groupe");
    const query = await onSnapshot(dbGroupe, (snapshot) => {
        console.log("query", query);
      this.listeGroupe = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.listeGroupe.forEach(function (groupe) {
        const storage = getStorage();
        const spaceRef = ref(storage, "groupe/" + groupe.image);
        getDownloadURL(spaceRef)
          .then((url) => {
            groupe.image = url;
            console.log("groupe", groupe);
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
        });
        console.log("listeGroupe", this.listeGroupe);
      });
    },
  },
}
</script>