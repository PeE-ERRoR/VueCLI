import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Store from './views/Store.vue'
import GetDataApi from './views/GetDataApi.vue'
import Forms from './views/Forms.vue'
import Chart from './views/Chart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/axios',
      name: 'axios',
      component: Store
    },
    {
      path: '/get_api',
      name: 'get_api',
      component: GetDataApi
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
  ]
})
