import './assets/main.css';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap styles
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { createApp } from 'vue';
// src/main.js
import App from './App.vue'; // Le composant principal
import router from './router'; // Importer le routeur

const app = createApp(App); // Créer l'application Vue
app.use(router); // Utiliser Vue Router
app.mount('#app'); // Monter l'application sur l'élément avec l'id "app"
