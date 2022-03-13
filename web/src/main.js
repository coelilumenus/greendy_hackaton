import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'
import './assets/css/index.css'

const app = createApp(App)

app.use(Varlet)
app.use(createPinia())
app.use(router)

app.mount('#app')
