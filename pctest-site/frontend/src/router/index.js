import { createRouter, createWebHistory } from 'vue-router';
// Public
import * as Public from '@/views/public/index.js';
// Admin
import * as Admin from '@/views/admin/index';
import * as Interventions from '@/views/admin/interventions/index';
import * as Users from '@/views/admin/users/index';

import Login from '@/views/auth/Login.vue';
// import { authGuard } from '@/_helpers/auth_Guard.js';
// localStorage.setItem('user', JSON.stringify({ userId: 1, token: 'test' }));
// localStorage.setItem('admin', JSON.stringify({ isAdmin: true, token: 'test' }));
// localStorage.setItem('token', 'admin');

const routes = [
    
    //public
    { 
        path: '/public', 
        name: 'public', 
        redirect: '/public/accueil',
        component: Public.PublicLayout,
        children: [
            { path: 'accueil', name: 'Accueil', component: Public.Accueil},
            { path: 'navbar', name: 'Navbar', component: Public.Navbar},
            { path: 'depannages', name: 'Depannages', component: Public.Depannages},
            { path: 'logitheque', name: 'Logitheque', component: Public.Logitheque},
            { path: 'tarifs',  name: 'Tarifs', component: Public.Tarifs },
            { path: 'contact', name: 'Contacts', component: Public.Contact },
            { path: 'about',  name: 'About',  component: Public.About },
            { path: 'blog',  name: 'blog', component: Public.Blog },
            { path: '/:pathMatch(.*)*',  redirect : '/public/accueil'},     
        ]
    },
    // name: 'Depannages',
    //Admin
    {
        path: '/admin',
        name: 'admin',
        // beforeEnter: authGuard,
        // redirect : '/admin/dashboard',
        component: Admin.AdminLayout,
        children: [
            { path: 'dashboard', name : 'Dashboard', component: Admin.Dashboard},
            //Users
            { path: 'users/add',  component: Users.UserAdd},
            { path: 'users/index',  component: Users.UserIndex},
            { path: 'users/edit/:id([0-9]+)',  component: Users.UserEdit, props: true},
            //Interventions
            { path: 'interventions/edit',  component: Interventions.InterventionsEdit},
            { path: 'interventions/index',  component: Interventions.InterventionsIndex}, 
            {path: '/:pathMatch(.*)*',  redirect : '/public/accueil'},                     
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