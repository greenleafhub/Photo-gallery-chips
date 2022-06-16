import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoView from '../views/Photo.vue'



const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/photo/:code',
        name: 'PhotoView',
        component: PhotoView,
    },
]

const router = createRouter({
    history: createWebHashHistory('/base-directory/'),
    routes
})

export default router