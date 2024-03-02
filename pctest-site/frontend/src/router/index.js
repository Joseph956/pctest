import { createRouter, createWebHistory } from 'vue-router';
// Public
import * as Public from '@/views/public/index.js';
// Admin
import AdminLayout from '@/views/admin/Layout.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
// Interventions
import InterventionsIndex from '@/views/admin/interventions/InterventionsIndex.vue';
import InterventionsEdit from '@/views/admin/interventions/InterventionsEdit.vue';
// Users
import UserIndex from '@/views/admin/users/UserIndex.vue';
import UserEdit from '@/views/admin/users/UserEdit.vue';
import UserAdd from '@/views/admin/users/UserAdd.vue';
// Login
import Login from '@/views/auth/Login.vue';
// import { authGuard } from '@/_helpers/auth_Guard';

const routes = [
    //public
    { path: '/', name: 'Accueil', component: Public.Accueil},
    { path: '/navbar', name: 'Navbar', component: Public.Navbar},
    { path: '/depannages', name: 'Depannages', component: Public.Depannages},
    { path: '/logitheque', name: 'Logitheque', component: Public.Logitheque},
    { path: '/tarifs',  name: 'Tarifs', component: Public.Tarifs },
    { path: '/contact', name: 'Contacts', component: Public.Contact },
    { path: '/about',  name: 'About',  component: Public.About },
    { path: '/blog',  name: 'blog', component: Public.Blog },
    //Admin
    {
        path: '/admin',
        name: 'admin',
        // beforeEnter: authGuard,
        redirect : '/admin/dashboard',
        component: AdminLayout,
        children: [
            { path: 'dashboard', component: Dashboard},
            //Users
            { path: 'users/index',  component: UserIndex},
            { path: 'users/add',  component: UserAdd},
            { path: 'users/edit/:id([0-9]+)',  component: UserEdit, props: true},
            //Interventions
            { path: 'interventions/edit',  component: InterventionsEdit},
            { path: 'interventions/index',  component: InterventionsIndex}, 
            {path: '/:pathMatch(.*)*',  redirect : '/admin/dashboard',}                     
        ]
    },
    {
        path: '/auth/login', name: 'login', component: Login, 
    },
    //beforeEnter: authGuard
    {
         path: '/:pathMatch(.*)*',
        redirect : '/',
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router;



// import PublicLayout from '@/views/public/public';

 // {
        // path: '/',
        // name:'public',
        // component: PublicLayout,
        // children: [
            // { path: '', name: 'Accueil', component: Accueil},
            // { path: 'navbar', name: 'Navbar', component: Navbar},
        // ]
    // },