import '@mdi/font/css/materialdesignicons.css'
import '@/assets/scss/style.scss'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { router } from './router.js'

const root = createApp(App)
async function init() {
  root
    .use(router)
    .mount('#app')
}
init()
