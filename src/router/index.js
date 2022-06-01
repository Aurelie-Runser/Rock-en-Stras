import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgramView from '../views/ProgramView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ContactView from '../views/ContactView.vue'

import GroupeView from '../views/GroupeView.vue'

import styleGuide from '../views/style-guide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/program', name: 'Program', component: ProgramView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/contact', name: 'Contact', component: ContactView },

    { path: '/groupe', name: 'Groupe', component: GroupeView },

    { path: '/styleGuide', name: 'styleGuide', component: styleGuide },
  ]
})

export default router
