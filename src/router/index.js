import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostView from '../views/PostView.vue';
import ModalsView from '../views/ModalsView.vue';
import PostDetailView from '../views/PostDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView,
      // component: () => import('../views/PostView.vue'),
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView,
      // component: () => import('../views/ModalsView.vue'),
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView,
      // component: () => import('../views/PostDetailView.vue'),
    },
  ],
});

export default router;
