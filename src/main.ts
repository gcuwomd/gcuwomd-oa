import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './scss/global.scss'

createApp(App).use(router).mount('#app')
