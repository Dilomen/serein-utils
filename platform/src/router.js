import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from './menus'
const routes = [
  {
    path: '/',
    name: '主页',
    component: () => import('./views/Home.vue'),
    redirect: '/use',
    children: [
      {
        path: '/use',
        name: '快速开始',
        component: () => import('./views/show.vue'),
        children: [],
        meta: {
          key: 'use',
        }
      }
    ]
  },
]
menus.forEach((item) => {
  if (item.submenus) {
    item.submenus.forEach(submenu => {
      submenu.path = submenu.url
      submenu.meta = { key: submenu.name }
      submenu.component = () => import('./views/show.vue')
    })
    routes[0].children.push(...item.submenus)
  }
})
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router