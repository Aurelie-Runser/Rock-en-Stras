<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-4xl">
            <h1 class="mb-12">Suppression d'un groupe</h1>

            <form class="mx-auto flex flex-col items-center lg:flex-row gap-x-20"
                  enctype="multipart/form-data" 
                  @submit.prevent="deleteGroupe">

                    <div class="flex-none grid grids-cols-1 place-items-center aspect-square w-80 sm:w-96 border-gray-100 border-2 overflow-hidden">
                        <img class="max-h-full max-w-full" :src="imgActuelle" alt="photo que vous avez rentré"/>
                    </div>

                    <div class="flex flex-col gap-10 max-w-sm lg:max-w-none">
                  
                        <input placeholder="Nom du Groupe"
                                v-model="groupe.nom"
                                disabled />  

                        <div class="flex-shrink bg-pink-800 p-5 rounded-lg" role="alert">
                            <p>Attention, vous allez supprimer ce groupe. Cette action est irréversible !!!</p>
                        </div>

                        <div class="w-max mx-auto flex gap-x-10">   
                            <backButton class="bg-pink-900" type="submit">
                                Supprimer
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
            groupe:{
                nom: null,
                image: null,
            },

            refGroupe:null,
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
                    this.imgActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteGroupe(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "groupe", this.$route.params.id));

            const storage = getStorage();
            let docRef = ref(storage, 'groupe/'+this.groupe.image);
            deleteObject(docRef);

            this.$router.push('/artistes');       
        }
    }
}
</script>
