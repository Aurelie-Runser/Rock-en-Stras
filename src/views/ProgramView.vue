<template>
    <div class="bg-base px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <div class="gap-5">
                <h1 class="mb-12">Rock en Stras’, c’est Quoi ? Quand ? Où ?</h1>
                <p class="mb-6 lg:mb-8 leading-8">Rock en Stras’ est le 1er festival de Rock humoristique de Strasbourg.</p>
                <p class="mb-6 lg:mb-8 leading-8">Ce festival aura lieu du vendredi 15 au dimanche 17 avril avec 2 scènes pour faire chanter 2 fois plus de vos artictes préférés !</p>
            </div>

            <div class="mx-auto my-16 max-w-6xl">
                <h3>La programmation</h3>

                <div v-for="j in listeJour" :key="j.id"
                    class="mx-auto my-16 w-full xs:w-[80%] lg:w-full flex flex-wrap flex-row gap-x-10 justify-center items-center">
        
                    <card class="md:aspect-[13/16] lg:aspect-video" image="/samedi.jpg" alt="photo"/>

                    <div class="text-white font-base mx-auto">
                        <h4 class="font-semibold text-base lg:text-lg mx-5 mb-5 sm:mx-10">{{j.jour}}</h4>
                                    
                        <div class="flex flex-col gap-y-[3vw]
                                    font-semibold text-base sm:text-lg leading-10 sm:leading-[4rem] lg:leading-[5rem] nth-child-2n:text-pink
                                    focus:nth-child-2n:text-gray-900">
                          
                            <!--<li>{{j.artiste_1}}</li>-->

                            <input class="h-11 m-0 px-5 py-0 bg-transparent border-transparent 
                                          font-semibold text-base sm:text-lg lg:text-xl
                                          motion-safe:transition motion-safe:duration-300
                                        hover:border-white
                                        focus:bg-gray-700" type='text' v-model='j.artiste_1' />

                            <!--<li>{{j.artiste_2}}</li>-->

                            <input class="h-11 m-0 px-5 py-0 bg-transparent border-transparent 
                                         font-semibold text-base sm:text-lg lg:text-xl
                                         motion-safe:transition motion-safe:duration-300
                                        hover:border-white
                                        focus:bg-gray-700" type='text' v-model='j.artiste_2' />

                            <!--<li>{{j.artiste_3}}</li>-->

                            <input class="h-11 m-0 px-5 py-0 bg-transparent border-transparent 
                                         font-semibold text-base sm:text-lg lg:text-xl
                                         motion-safe:transition motion-safe:duration-300
                                        hover:border-white
                                        focus:bg-gray-700" type='text' v-model='j.artiste_3' />

                            <!--<li>{{j.artiste_4}}</li>-->

                            <input class="h-11 m-0 px-5 py-0 bg-transparent border-transparent 
                                         font-semibold text-base sm:text-lg lg:text-xl
                                         motion-safe:transition motion-safe:duration-300
                                        hover:border-white
                                        focus:bg-gray-700" type='text' v-model='j.artiste_4' />

                            <!--<li>{{j.artiste_5}}</li>-->

                            <input class="h-11 m-0 px-5 py-0 bg-transparent border-transparent 
                                         font-semibold text-base sm:text-lg lg:text-xl
                                         motion-safe:transition motion-safe:duration-300
                                        hover:border-white
                                        focus:bg-gray-700" type='text' v-model='j.artiste_5' />

                            <monButton class='' @click.prevent="updateJour(j)">
                                <p>Modif</p>
                            </monButton>

                        </div>           
                    </div>

                    <RouterLink to="/concert" class="flex-none flex justify-center w-full">
                    <monButton>
                        Voir le programme du jour en détail
                    </monButton> 
                    </RouterLink>
                </div>

                </div>

            <div>
                <p>Pour avoir plus d’information, n’hésitez pas à aller jeter un œil à la page des artistes !</p>

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
import card from "../components/cardBase.vue"
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
  components: { card, monButton },

  data() {
    return {
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
        })
      },

      async updateJour(j){
            const firestore = getFirestore();
            const docRef = doc(firestore, "jour", j.id);
            await updateDoc(docRef, {
                artiste_1: j.artiste_1,
                artiste_2: j.artiste_2,
                artiste_3: j.artiste_3,
                artiste_4: j.artiste_4,
                artiste_5: j.artiste_5,
            })
        },
  },
}
</script>
