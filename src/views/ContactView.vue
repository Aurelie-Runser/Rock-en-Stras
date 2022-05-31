<template>
    <div class="bg-gray-900 px-10 py-36">
        <div class="">
            <h1>Contact</h1>
            <img class="hidden sm:inline-block"
                 src="../../public/lettre.png" 
                 alt="dessin d'une enveloppe">

            <p>Des détails pas claires ? Une information manquante ? Un problème ?</p>
            <p>Écrirez-nous un message !</p>
        </div>
        <form>
            <div class="">
                <label for="name" class="sr-only">Nom Prénom (obligatoire)</label>
                <input 
                    type="text" 
                    id="name" 
                    name="user_name"
                    placeholder="Nom Prénom *"
                    required>
            </div>
        
            <div class="">
                <label for="name" class="sr-only">Adresse mail (obligatoire)</label>
                <input 
                    type="text" 
                    id="mail" 
                    name="user_mail"
                    placeholder="Adresse mail *"
                    required>
            </div>
        
            <div class="">
                <label for="object" class="sr-only">Objet (obligatoire)</label>
                <input 
                    type="text" 
                    id="object" 
                    name="user_object"
                    placeholder="Objet *"
                    required>
            </div>
        
            <div class="">
                <label for="message" class="sr-only">Message (obligatoire)</label>
                <textarea 
                    id="message" 
                    name="user_message"
                    placeholder="Message *"
                    required>
                </textarea>
            </div>

            <div class="-skew-3">
                <input 
                    type="checkbox" 
                    id="object" 
                    name="user_object"
                    placeholder="Objet *"
                    required>
                <label for="object" class="">J’ai lu, compris et accepte de partager ses informations et leur conditions d’utilisation.</label>   

                <p>* champs obligatoires</p>
            </div>

            <div class="-skew-3">
                <input class="m-auto mt-12 py-5 bg-pink-300_90 border-t-none border-pink-800 rounded-3xl text-xl font-button
                            hover:bg-black hover:border-b-gray-300 hover:border-r-gray-300
                            focus:bg-black focus:border-b-gray-300 focus:border-r-gray-300"
                    type="submit" 
                    name="envoyer" 
                    id="envoyer">
            </div>
        </form>
    </div>
</template>