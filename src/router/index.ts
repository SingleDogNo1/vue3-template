import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/index.vue'),
    },
  ] as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config-router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
