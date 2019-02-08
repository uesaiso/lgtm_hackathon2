import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/themes/create',
      name:'newTheme',
      component: () => import(/* webpackChunkName: "newTheme" */ './views/ThemeCreate.vue')
    },
    {
      path: '/themes',
      name:'themes',
      component: () => import(/* webpackChunkName: "themes" */ './views/ThemeList.vue')
    },
    {
      path: "/themes/:themeId",
      name:'theme',
      component: () => import(/* webpackChunkName: "theme" */ './views/Theme.vue')
    }
  ]
})
