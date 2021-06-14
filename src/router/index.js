import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Login from '../components/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
