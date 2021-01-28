import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from './menus'
const routes = [
  {
    path: '/',
    name: '主页',
    component: () => import('./views/Home.vue'),
    children: []
  }
]
menus.forEach((item) => {
  if (item.submenus) {
    item.submenus.forEach(submenu => {
      submenu.path = submenu.url
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