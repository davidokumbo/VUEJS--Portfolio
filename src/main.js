import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Particles from "vue3-particles";

createApp(App).use(Particles).use(router).mount('#app')
