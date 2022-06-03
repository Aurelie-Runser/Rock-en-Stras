<template>
    <div class="bg-pink px-5 py-36 ">
        <div class="m-auto max-w-7xl">
            <h1 class="mb-12">Suppression d'un groupe</h1>

            <form class="mx-5"
                  enctype="multipart/form-data" 
                  @submit.prevent="deleteGroupe">

                <div>
                    <img class="preview img-fluid" :src="imgActuelle"/>

                    <input class="" placeholder="Nom du Groupe"
                            v-model="groupe.nom"
                            disabled />       
                </div>

                <div>
                    <p>Attention, vous ellez supprimer ce groupe. Cette action est irréversible !!!</p>
                </div>

                <div>   
                    <monButton type="submit">
                        Supprimer
                    </monButton>
                    <monButton class="">
                        <RouterLink to="/artistes">Abandonner</RouterLink>
                    </monButton>
                </div>
            </form>
        
        </div>
    </div>
</template>


<script>
import monButton from "../../components/monButton.vue"

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
    components:{ monButton },

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
