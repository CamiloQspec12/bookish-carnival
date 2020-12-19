import Vue from 'vue'
import routes from './routes';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Se crea la instancia de Vue router */
const router = createRouter();

function createRouter() {
    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    return router
}

export default router


