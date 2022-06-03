import { createRouter, createWebHistory } from 'vue-router';


import AccueilView from '../views/AccueilView.vue'
import ProgramView from '../views/ProgramView.vue'
import ContactView from '../views/ContactView.vue'
import CompteView from '../views/CompteView.vue'

import ConcertView from '../views/ConcertView.vue'
import GroupeView from '../views/GroupeView.vue'

import ArtistesView from '../views/artistes/ArtistesView.vue'
import CreateArtistes from '../views/artistes/CreateView.vue'
import UpdateArtistes from '../views/artistes/UpdateView.vue'
import DeleteArtistes from '../views/artistes/DeleteView.vue'

import styleGuide from '../views/style-guide.vue'
import Page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                  name: 'Accueil',          component: AccueilView },
    { path: '/program',           name: 'Program',          component: ProgramView },
    { path: '/contact',           name: 'Contact',          component: ContactView },
    { path: '/compte',            name: 'Compte',           component: CompteView },

    { path: '/concert',           name: 'Concert',          component: ConcertView },
    { path: '/groupe',            name: 'Groupe',           component: GroupeView },

    { path: '/artistes',           name: 'Artistes',        component: ArtistesView },
    { path: '/createArtistes',     name: 'CreateArtistes',  component: CreateArtistes  },
    { path: '/updateArtistes/:id', name: 'UpdateArtistes',  component: UpdateArtistes },
    { path: '/deleteArtistes/:id', name: 'DeleteArtistes',  component: DeleteArtistes },

    { path: '/style-guide',        name: 'style-guide',     component: styleGuide },
    { path: '/:pathMatch(.*)*',    name: 'Page404',         component: Page404 },
  ]
})

export default router
