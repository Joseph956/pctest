import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/views/public/Navbar.vue';
import Accueil from '@/views/public/Accueil.vue';
import Depannages from '@/views/public/Depannages.vue';
import Logitheque from '@/views/public/Logitheque.vue';
import Tarifs from '@/views/public/Tarifs.vue';
import Contact from '@/views/public/Contact.vue';
import About from '@/views/public/About.vue';
import Blog from '@/views/public/Blog.vue';



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
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router;