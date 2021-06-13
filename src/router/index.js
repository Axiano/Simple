import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog }
]

const router = new VueRouter({
  routes
})

export default router
