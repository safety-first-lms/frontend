import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/courses', component: () => import('./pages/Courses.vue') },
  { path: '/profile', component: () => import('./pages/Profile.vue') },
  { path: '/login', component: () => import('./components/base/Auth.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
