import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: () => import('@/views/Board'),
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: () => import('@/views/Task')
        }
      ]
    }
  ]
})