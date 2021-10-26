import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from'pinia'
import 'tailwindcss/base.css'
import 'tailwindcss/utilities.css'
import '@varlet/ui/es/style.js'
import Varlet from '@varlet/ui'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Varlet)
app.mount('#app')
