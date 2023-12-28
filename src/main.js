import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fontsource/gochi-hand';

createApp(App).use(store).mount('#app')
