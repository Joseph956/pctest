import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/views/Navbar.vue';
import Accueil from '@/views/Accueil.vue';
import Depannages from '@/views/Depannages.vue';
import Logitheque from '@/views/Logitheque.vue';
import Tarifs from '@/views/Tarifs.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';



const routes = [
    {
        path: '/',
        name: 'Navbar',
        component: Navbar,
    },
    {
        path: '/accueil',
        name: 'Accueil',
        component: Accueil,
    },
    {
        path: '/depannages',
        name: 'Depannages',
        component: Depannages,
    },
    {
        path: '/logitheque',
        name: 'Logitheque',
        component: Logitheque,
    },
    {
        path: '/tarifs',
        name: 'Tarifs',
        component: Tarifs,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router;