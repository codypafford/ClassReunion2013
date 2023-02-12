import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import MobileDetection from './plugins/mobile-detection'

const app = createApp(App)
// app.use(MobileDetection)
app.use(router)

app.mount('#app')
