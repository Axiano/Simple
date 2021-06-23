/* eslint-disable no-eval */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NoPage from '../views/404.vue'
import Home from '../views/Home.vue'
import Project from '../views/Projext.vue'
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
import indexTimes from '../components/page/timelink.vue'
import constants from './constants'
// import Music from '../components/music.vue'
import Comments from '../components/Posts/comments.vue'
import Comment from '../components/page/Comment.vue'
const routes = [
  { path: '*', component: NoPage },
  { path: '/', component: Home, name: 'home' },
  { path: '/project', component: Project, name: 'project' },

  // { path: '/music', component: 'Music' },
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
          { path: '/post/*', name: 'posts' }
        ]
      },
      { path: '/about', component: About, name: 'about' },
      { path: '/class', component: Classified, name: 'class' },
      { path: '/tags', component: Tags, name: 'tags' },
      { path: '/times', component: Times, name: 'times' },
      { path: '/comments', component: Comments, name: 'comments' }

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
      { path: '/editpage', component: EditPage, name: 'editpost' },
      { path: '/timelinks', component: indexTimes, name: 'timelinks' },
      { path: '/comment', component: Comment, name: 'comment' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
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

Vue.use(VueRouter)
export default router
