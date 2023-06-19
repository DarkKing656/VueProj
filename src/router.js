import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./pages/Main_Page')
  },
  {
    path: '/gcheak',
    component: () => import('./pages/ChikenHousePage')
  }
]
export default new VueRouter({
  mode: 'history',
  routes
}

)
