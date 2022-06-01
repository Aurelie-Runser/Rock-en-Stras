import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCp4vhNeqw7qjM-HSgwZrB2fU-x0dr5Iss",
  authDomain: "mmi-sae203.firebaseapp.com",
  projectId: "mmi-sae203",
  storageBucket: "mmi-sae203.appspot.com",
  messagingSenderId: "1064043888686",
  appId: "1:1064043888686:web:aca7e01ef64c2619671fbf"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
