<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Mise à jour d'un groupe</h1>

            <form class="mx-auto max-w-4xl flex flex-wrap justify-center gap-x-20"
                  enctype="multipart/form-data" 
                  @submit.prevent="updateGroupe">

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
                                Modifier
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
            },

            refGroupe:null,
            imgModifie:false,
            imgActuelle:null 
        }
    },

    mounted(){
        this.getGroupe(this.$route.params.id)
    },

    methods :{

         async getGroupe(id){
            const firestore = getFirestore();
            const docRef = doc(firestore, "groupe", id);
            this.refGroupe = await getDoc(docRef);
            if(this.refGroupe.exists()){
                this.groupe = this.refGroupe.data();
                this.imgActuelle = this.groupe.image;

            }
            else{
                this.console.log("Groupe inexistant");
            }
            const storage = getStorage();
            const spaceRef = ref(storage, 'groupe/'+this.groupe.image);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.imgData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.groupe.image = this.file.name;
            // Si cette fonction s'exécute, c'est que l'image est modifiée 
            this.imgModifie = true;
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

        async updateGroupe(){
            if(this.imgModifie){
                const storage = getStorage();
                let docRef = ref(storage, 'groupe/'+this.imgActuelle);
                deleteObject(docRef);
                docRef = ref(storage, 'groupe/'+this.groupe.image);
                await uploadString(docRef, this.imgData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.groupe.image);                
                });                   
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, "groupe", this.$route.params.id), this.groupe);
            this.$router.push('/artistes');       
        }
    }
}
</script>
