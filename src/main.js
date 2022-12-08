import { createApp } from 'vue'
import { initLibs } from './libs'

import './style/main.scss'

import App from './App.vue'

const app = createApp(App)

initLibs(app)

app.mount('#app')