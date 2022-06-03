<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Ajout d'un groupe</h1>

            <form class="mx-auto max-w-4xl flex flex-wrap justify-center gap-x-20"
                  enctype="multipart/form-data" 
                  @submit.prevent="createGroupe">

                    <div class="grid grids-cols-1 place-items-center w-96 aspect-square border-gray-100 border-2 overflow-hidden">
                        <img class="max-h-full max-w-full" :src="imgData" alt="photo que vous avez rentré"/>
                    </div>

                    <div class="flex flex-col gap-20">
                        <div>
                            <input class="block my-12 w-full h-max" placeholder="Nom du Groupe"
                                v-model="groupe.nom"
                                required /> 

                            <input type="file" class="block my-12 w-full h-max" ref="file" id="file"
                                @change="previewImage" >
                        </div>

                        <div class="flex gap-x-10">   
                            <backButton type="submit">
                                Créer
                            </backButton>
                            <backButton class="">
                                <RouterLink to="/artistes">Abandonner</RouterLink>
                            </backButton>
                        </div>
                    </div>       

            </form>
        
        </div>
    </div>
</template>


<script>
import backButton from "../../components/backButton.vue"

import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'UpdateView',
    components:{ backButton },

    data() {
        return {
            imgData: null,
            groupe:{
                nom: null,
                image: null,
            }
        }
    },

    mounted(){
        this.getGroupe()
    }, 

    methods :{

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

        previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.groupe.image = this.file.name;
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imgData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async createGroupe(){
            const storage = getStorage();
            const refStorage = ref(storage, 'groupe/'+this.groupe.image);
            await uploadString(refStorage, this.imgData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                
                // Création du participant sur le Firestore
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'groupe'), this.groupe );
            });
            // redirection sur la liste des participants
            this.$router.push('/artistes');           
        }
    }
}
</script>
