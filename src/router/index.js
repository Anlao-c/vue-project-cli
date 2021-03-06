import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const HelloWorld = () => import ('@/views/HelloWorld')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
  }
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   if (!isLogin()) {
  //     return next({
  //       path: '/'
  //     })
  //   }
  // }
  // if (to.matched.some(record => record.meta.requireNotAuth)) {
  //   if (isLogin()) {
  //     return next({
  //       path: '/wantreport'
  //     })
  //   }
  // }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to) => {
})

export default router
