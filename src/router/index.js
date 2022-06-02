import { createRouter, createWebHistory } from 'vue-router'

// fonction firestore
import{
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"


import AccueilView from '../views/AccueilView.vue'
import ProgramView from '../views/ProgramView.vue'
import ContactView from '../views/ContactView.vue'
import CompteView from '../views/CompteView.vue'

import ConcertView from '../views/ConcertView.vue'
import GroupeView from '../views/GroupeView.vue'

import ArtistesView from '../views/artistes/ArtistesView.vue'
import UpdateArtistes from '../views/artistes/UpdateView.vue'

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

    { path: '/artistes',           name: 'Artistes',        component: ArtistesVies },
    { path: '/updateArtistes/:id', name: 'UpdateArtistes',  component: UpdateArtistes  },

    { path: '/style-guide',        name: 'style-guide',     component: styleGuide },
    { path: '/:pathMatch(.*)*',    name: 'Page404',         component: Page404 },
  ]
})

export default router
