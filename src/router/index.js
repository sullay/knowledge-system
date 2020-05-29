/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-29 14:46:47
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-29 15:04:02
 */
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
