import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/courses', component: () => import('./pages/Courses.vue') },
  { path: '/profile', component: () => import('./pages/Profile.vue') },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: () => import('./pages/CourseDetail.vue')
  },
  {
    path: '/lessons/:id',
    name: 'LessonDetail',
    component: () => import('./pages/LessonDetail.vue')
  },
  { path: '/login', component: () => import('./components/base/Auth.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
