import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import loggingPlugin from './plugins/loggingPlugin'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(loggingPlugin)
app.use(pinia)
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
