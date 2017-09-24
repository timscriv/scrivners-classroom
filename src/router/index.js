import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '@/components/home'
import recipes from '@/components/recipes'

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', component: home },
    { path: '/recipes', component: recipes }
  ]
})
