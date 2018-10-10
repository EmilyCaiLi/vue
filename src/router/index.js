import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../pages/index/index.vue')), 'pages')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'h5',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
router.beforeEach(function (to, from, next) {
  next()
})
export default router
