<template>
    <div class="bg-base light:bg-base-light px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <div class="gap-5">
                <h1 class="mb-12 light:text-light">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h1>
                <p class="mb-6 lg:mb-8 leading-8 light:text-light">Rock en Stras’ est le 1er festival de Rock humoristique de Strasbourg.</p>
                <p class="mb-6 lg:mb-8 leading-8 light:text-light">Ce festival aura lieu du vendredi 15 au dimanche 17 avril avec 2 scènes pour faire chanter 2 fois plus de vos artictes préférés !</p>
            </div>

            <div class="mx-auto my-16 max-w-6xl">
                <h3 class="light:text-light">La programmation</h3>

                <programArt class="flex-row"
                    img="/vendredi.jpg"
                    jour="Vendredi 15"
                    artiste1="Les Fatals Picards"
                    artiste2="Ultra Vomit"
                    artiste3="Les Bidochons"
                    artiste4="Elmer Food Beat"
                    artiste5="Salut C'est Cool"/>

                <programArt class="flex-row-reverse"
                    img="/samedi.jpg"
                    jour="Samedi 16"
                    artiste1="Ultra Vomit"
                    artiste2="Les Fatals Picards"
                    artiste3="Elmer Food Beat"
                    artiste4="Flagrants Délires"
                    artiste5="Fills Monkey"/>

                <programArt class="flex-row"
                    img="/dimanche.jpg"
                    jour="Dimanche 17"
                    artiste1="Les Fatals Picards"
                    artiste2="Flagrants Délires"
                    artiste3="Fills Monkey"
                    artiste4="Sebkha-Chott"
                    artiste5="Ministère Magouille"/>
            </div>

            <div>
                <p class="light:text-light">Pour avoir plus d’information, n’hésitez pas à aller jeter un œil à la page des artistes !</p>

                <RouterLink to="artistes">
                    <monButton class="m-auto">
                        Découvrir tous les Artistes
                    </monButton>
                </RouterLink>
            </div>
        
        </div>
    </div>
</template>


<script>
import programArt from "../components/programArt.vue"
import monButton from "../components/monButton.vue"

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
  name: "ProgramView",
  components: { programArt, monButton },

  data() {
    return {
        libelle : null,
        listeJour : []
    };
  },

  mounted(){
      // appel liste jour
      this.getJour();
  },

  methods:{
      async getJour(){
        const firestore = getFirestore();
        const dbJour = collection(firestore, "jour");
        const query = await onSnapshot(dbJour, (snapshot) =>{
            this.listeJour = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
        console.log(this.listeJour)
        })
      },
  },
}
</script>
