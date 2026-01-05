import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '柠枺 - 首页' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: '柠枺 - 项目统计' }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 - 页面未找到' }
  },
  // 重定向处理
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || '柠枺'
  next()
})

export default router
