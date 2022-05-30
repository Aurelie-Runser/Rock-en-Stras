import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgramView from '../views/ProgramView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/program', name: 'Program', component: ProgramView },
    { path: '/Artistes', name: 'Artistes', component: ArtistesView },
    { path: '/festival', name: 'Festival', component: FestivalView},
    { path: '/Contact', name: 'Contact', component: ContactView },
    // ici les autre routes
  ]
})

export default router
