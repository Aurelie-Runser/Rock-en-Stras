<template>
    <div class="bg-base px-5 py-36 ">
        <div class="m-auto max-w-3xl">
            <h1 class="mb-5">Mon Compte</h1>
                

            <form class="flex flex-wrap justify-evenly gap-x-10 gap-y-5">
            
                <div class="basis-72 flex-grow">
                    <label for="name" class="sr-only">Adresse mail (obligatoire)</label>
                    <input 
                        type="text" 
                        id="mail" 
                        name="user_mail"
                        placeholder="Adresse mail"
                        required/>
                </div>

                <div class="basis-72 flex-grow">
                    <label for="name" class="sr-only">Mot de passe</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="user_name"
                        placeholder="Mot de passe"
                        required/>
                </div>

                <div class="flex-none mx-auto p-5 w-full bg-pink-300 text-center text-gray-900" role="alert">
                    Vous n'etes pas connecter
                </div>
            
                    <button type="submit"
                        class="mt-12 px-7 sm:px-10 py-5 bg-pink-300_90 border-4 border-pink-800 rounded-3xl text-lg sm:text-xl text-white font-button
                                motion-safe:transition motion-safe:duration-300 
                                hover:bg-black hover:border-gray-300
                                focus:bg-black focus:border-gray-300">
                        Connexion
                    </button>

                    <button type="button"
                        class="mt-12 px-7 sm:px-10 py-5 bg-pink-300_90 border-4 border-pink-800 rounded-3xl text-lg sm:text-xl text-white font-button
                                motion-safe:transition motion-safe:duration-300 
                                hover:bg-black hover:border-gray-300
                                focus:bg-black focus:border-gray-300">
                        Deconnexion
                    </button>
            </form>
        </div>
    </div>
</template>