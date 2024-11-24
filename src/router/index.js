import { createRouter, createWebHistory } from 'vue-router'
import AllItemsView from '@/views/AllItemsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllItemsView,
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneItemsView.vue'),
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('../views/InProgressItemsView.vue'),
    },
    {
      path: '/todo/:id(\\d+)',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      props: true,
    },
  ],
})

export default router
