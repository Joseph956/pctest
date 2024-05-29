import { createRouter, createWebHistory } from 'vue-router';
window.axios = require('axios');
// Public
import * as Public from '@/views/public/index.js';
// Admin
import * as Admin from '@/views/admin/index';
import * as Interventions from '@/views/admin/interventions/index';
import * as Users from '@/views/admin/users/index';

// Users
import * as UserPublic from '@/views/userpublic/index';
import * as User from '@/views/userpublic/user/index';
// import * as UserPublicUse from '@/views/userpublic/user/UserEdit.vue';


import Login from '@/views/auth/Login.vue';
// import { name } from 'dayjs/locale/fr';
// import { authGuard } from '@/_helpers/auth_Guard.js';
// localStorage.setItem('user', JSON.stringify({ userId: 1, token: 'test' }));
// localStorage.setItem('admin', JSON.stringify({ isAdmin: true, token: 'test' }));
// localStorage.setItem('token', 'admin');

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),

    // logUser: function (state, user) {
    //     instance.defaults.headers.common['Authorization'] = user.token;
    //     localStorage.setItem('user', JSON.stringify(user));
    //     state.user = user;
    // }


routes: [

    //public
    {
        path: '/public',
        name: 'public',
        redirect: '/public/accueil',
        component: Public.PublicLayout,
        children: [
            //Pages public
            { path: 'accueil', name: 'Accueil', component: Public.Accueil },
            { path: 'navbar', name: 'Navbar', component: Public.Navbar },
            { path: 'depannages', name: 'Depannages', component: Public.Depannages },
            { path: 'logitheque', name: 'Logitheque', component: Public.Logitheque },
            { path: 'tarifs', name: 'Tarifs', component: Public.Tarifs },
            { path: 'contact', name: 'Contacts', component: Public.Contact },
            { path: 'about', name: 'About', component: Public.About },
            { path: 'blog', name: 'blog', component: Public.Blog },
            //Redirection
            { path: '/:pathMatch(.*)*',  redirect: '/public/accueil' },
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        // beforeEnter: authGuard,
        redirect: '/admin/dashboard',
        component: Admin.AdminLayout,
        children: [
            { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
            //Users
            { path: 'users/add', name: 'userAdd', component: Users.UserAdd },
            { path: 'users/list', name: 'usersList', component: Users.UserIndex },
            { path: 'users/edit/:userId', name: 'usersEdit', component: Users.UsersEdit }, //props: true ([0-9]+)
            //Interventions
            { path: 'interventions/edit', component: Interventions.InterventionsEdit },
            { path: 'interventions/index', component: Interventions.InterventionsIndex },
            //Redirection
            { path: '/:pathMatch(.*)*',  redirect: '/admin/dashboard' },
        ]
    },
    {
        path: '/userpublic',
        name: 'userpublic',
        redirect: '/userpublic/dashboard',
        component: UserPublic.UserPublicLayout,
        children: [
            { path: 'dashboard', name: 'Dashboard', component: UserPublic.Dashboard },
            //User
            { path: 'user/edit/:userId', name: 'userEdit', component: User.UserEdit },  
            { path: 'user/interventions/list', name: 'InterventionsList', component: User.InterventionsList },
            //Redirection
            { path: '/:pathMatch(.*)*',  redirect: '/userpublic/dashboard' },
        ],
    },
    {
        path: '/auth/login', name: 'login', component: Login,
    },
    //beforeEnter: authGuard
    {
        path: '/:pathMatch(.*)*',
        name : 'notfound',
        redirect: '/public/accueil',
    },
]

});

export default router;

// Vérouillage de la partie admin
// router.beforeEach((to, from, next) => {
//     console.log(to.matched[0].path);
//     if (to.matched[0].path == 'userpublic') {
//         authGuard();
//     }
//     next();
//     // if (!localStorage.getItem('token')) {
//     //     next('/auth/login');
//     //     return;
//     // }
//     // // document.title = `${to.meta.title} | Fireblogs`;
//     // next();
// });


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