import { createRouter, createWebHistory } from 'vue-router'
import AllItemsView from '../views/AllItemsView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DoneItemsView.vue'),
    },
  ],
})

export default router
