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
import Classified from '../components/Posts/ClassIfied.vue'
import Tags from '../components/Posts/tags.vue'
import Times from '../components/Posts/Times.vue'
import constants from './constants'
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
  { path: '/', component: Home, name: 'home' },
  {
    path: '/blog',
    component: Blog,
    children: [
      { path: '/blog', component: Bloghome, name: 'blog' },
      {
        path: '/post',
        component: Post,
        name: 'post',
        children: [
          { path: '/post/*' }
        ]
      },
      { path: '/about', component: About },
      { path: '/class', component: Classified, name: 'class' },
      { path: '/tags', component: Tags, name: 'tags' },
      { path: '/times', component: Times, name: 'times' }
    ]
  },
  { path: '/login', component: Login, name: 'login' },
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
      { path: '/welcome', component: Welcome, name: 'welcome' },
      { path: '/pagelist', component: PageList, name: 'postlist' },
      { path: '/wirtepage', component: WirtePage, name: 'writepost' },
      { path: '/editpage', component: EditPage, name: 'editpost' }
    ]
  }
]

const router = new VueRouter({
  routes
})
// vue实现路由切换改变title
router.afterEach((to, from) => {
  window.document.title = constants[to.name]
})

// cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
