import {createRouter, createWebHistory} from "vue-router";
import store from "@/store/auth";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta: {onlyGuest: true}
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue'),
        meta: {onlyAuth: true}
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue'),
        meta: {onlyAuth: true}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const onlyAuth = to.meta.onlyAuth;
    const onlyGuest = to.meta.onlyGuest;
    const isAuthenticated = store.getters.isAuthenticated;

    if(onlyAuth && !isAuthenticated) {
        next('/login');
    } else if(onlyGuest && isAuthenticated) {
        next('/profile');
    } else {
        next();
    }
});

export default router;