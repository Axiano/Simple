/* eslint-disable no-eval */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Login from '../components/Login/Login.vue'
import Index from '../components/Login/index.vue'
import Welcome from '../components/page/welcome.vue'
import PageList from '../components/page/PageList.vue'
import WirtePage from '../components/page/WritePage.vue'
import EditPage from '../components/page/EditPage.vue'
import Bloghome from '../views/blog/Bloghome.vue'
import Post from '../components/Post.vue'
import About from '../components/About.vue'
// 获取文章路由地址

// import store from '../store/index'
// import _ from 'lodash'
// const data = _.clone(store.state)

// console.log(store.commit('showpageList'))
// eslint-disable-next-line no-unused-expressions

// store.commit('initPostList')

// const resdata = JSON.parse(JSON.stringify(store.state))
// console.log(resdata)
// const data = store.state
// console.log(data)
// console.log(resdata)

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  {
    path: '/blog',
    component: Blog,
    children: [
      { path: '/blog', component: Bloghome },
      {
        path: '/post',
        component: Post,
        name: 'post',
        children: [
          { path: '/post/*' }
        ]
      },
      { path: '/about', component: About }
    ]
  },
  { path: '/login', component: Login },
  {
    path: '/index',
    component: Index,
    redirect: '/welcome',
    beforeEnter: (to, from, next) => {
      const tonkenStr = window.sessionStorage.getItem('token')
      if (!tonkenStr) return next('/login')
      next()
    },
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/pagelist', component: PageList },
      { path: '/wirtepage', component: WirtePage },
      { path: '/editpage', component: EditPage }
    ]
  }

]
const router = new VueRouter({
  routes
})

// cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
