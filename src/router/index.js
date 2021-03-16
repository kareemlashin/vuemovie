import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import base from '../views/Base.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/',
            name: 'base',
            component: base
        }, {
            path: '/loadMore',
            name: 'loadMore',
            component: () =>
                import ('./../views/LoadMore.vue')
        }, {
            path: '/Pagination',
            name: 'Pagination',
            component: () =>
                import ('./../views/Pagination.vue')
        }, {
            path: '/Scroll',
            name: 'Scroll',
            component: () =>
                import ('./../views/Scroll.vue')
        }]
    },
    {
        path: '*',
        redirect: '/home'
    },


]

const router = new VueRouter({
    routes
})

export default router