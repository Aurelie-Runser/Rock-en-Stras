<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Qui vient à Rock en Stras’ ?</h1>

            <div class="mx-5">
                <div class="max-w-5xl mx-auto
                    grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(15rem,auto))] gap-10">

                    <RouterLink to="/groupe"
                        v-for="g in listeGroupe" :key="g.id">
             
                        <div class="relative overflow-hidden w-full aspect-video border-4 border-gray-300 skew-y-3">
                            <img class="-mt-7 w-full h-[130%] object-cover center -skew-y-3" :src="g.image" alt="imgalt">
                            <div class="absolute z-10 top-0 bottom-0 right-0 left-0 flex justify-center items-center text-center bg-gray-700_50">
                                <h3>{{g.nom}}</h3>
                            </div>
                        </div>

                    </RouterLink>
                </div>
            </div>
        
        </div>
    </div>
</template>


<script>
import cardArtiste from "../components/cardArtiste.vue"

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
  components: { cardArtiste },

  data() {
    return {
        listeGroupe: [],
    };
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