import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue'),
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('../views/TransitionView.vue'),
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: () => import('../views/MixinsView.vue'),
    },
    {
      path: '/composition',
      name: 'composition',
      component: () => import('../views/CompositionView.vue'),
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: () => import('../views/TeleportView.vue'),
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SetupView.vue'),
    },
  ],
});

export default router;
