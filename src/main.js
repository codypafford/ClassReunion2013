import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Vue3MobileDetection from "vue3-mobile-detection";

const app = createApp(App)
app.use(router)
app.use(Vue3MobileDetection);

app.mount('#app')
