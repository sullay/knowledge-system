import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('../views/index.vue')
}, {
  path: '/:catchAll(.*)',
  redirect: '/'
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
