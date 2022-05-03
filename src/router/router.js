import {createRouter, createWebHashHistory} from 'vue-router'
import Cliente from '../components/Cliente.vue'
import Home from '../components/Home.vue'
import Stock from '../components/Stock.vue'
import { createPinia } from 'pinia'

app.use(createPinia())

const routes = [
    { path: '/', component: Home },
    { path: '/cliente', component: Cliente },
    { path: '/stock', component: Stock },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
