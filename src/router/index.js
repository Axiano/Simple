import Vue from 'vue'
import VueRouter from 'vue-router'
import constants from './constants'

const NoPage = () => import(/* webpackChunkName: "NoPage" */ '../views/404.vue')

const Home = () => import(/* webpackChunkName: "home_nopage_Project_Resume" */ '../views/Home.vue')
const Project = () => import(/* webpackChunkName: "home_nopage_Project_Resume" */ '../views/Projext.vue')
const Resume = () => import(/* webpackChunkName: "home_nopage_Project_Resume" */ '../views/Resume.vue')

const Blog = () => import(/* webpackChunkName: "Blog_Bloghome_Postt" */ '../views/Blog.vue')
const Bloghome = () => import(/* webpackChunkName: "home_Bloghome_Post" */ '../views/blog/Bloghome.vue')
const Post = () => import(/* webpackChunkName: "home_Bloghome_Post" */ '../components/Post.vue')

const About = () => import(/* webpackChunkName: "About_Classified_Tags_Times_Comment" */ '../components/About.vue')
const Classified = () => import(/* webpackChunkName: "About_Classified_Tags_Times_Comment" */ '../components/Posts/ClassIfied.vue')
const Tags = () => import(/* webpackChunkName: "About_Classified_Tags_Times_Comment" */ '../components/Posts/tags.vue')
const Times = () => import(/* webpackChunkName: "About_Classified_Tags_Times_Comment" */ '../components/Posts/Times.vue')
const Comment = () => import(/* webpackChunkName: "About_Classified_Tags_Times_Comment" */ '../components/page/Comment.vue')

const Login = () => import(/* webpackChunkName: "Login_Index_Welcome" */ '../components/Login/Login.vue')
const Index = () => import(/* webpackChunkName: "About_Index_Welcome" */ '../components/Login/index.vue')
const Welcome = () => import(/* webpackChunkName: "About_Index——Welcome" */ '../components/page/welcome.vue')

const PageList = () => import(/* webpackChunkName: "PageList_WirtePage_EditPage_indexTime_Comments" */ '../components/page/PageList.vue')
const WirtePage = () => import(/* webpackChunkName: "PageList_WirtePage_EditPage_indexTimes_Comments" */ '../components/page/WritePage.vue')
const EditPage = () => import(/* webpackChunkName: "PageList_WirtePage_EditPage_indexTimes_Comments" */ '../components/page/EditPage.vue')
const indexTimes = () => import(/* webpackChunkName: "PageList_WirtePage_EditPage_indexTimes_Comments" */ '../components/page/timelink.vue')
const Comments = () => import(/* webpackChunkName: "PageList_WirtePage_EditPage_indexTimes_Comments" */ '../components/Posts/comments.vue')


// import NoPage from '../views/404.vue'
// import Home from '../views/Home.vue'
// import Project from '../views/Projext.vue'
// import Resume from '../views/Resume.vue'

// import Blog from '../views/Blog.vue'
// import Bloghome from '../views/blog/Bloghome.vue'
// import Post from '../components/Post.vue'

// import About from '../components/About.vue'
// import Classified from '../components/Posts/ClassIfied.vue'
// import Tags from '../components/Posts/tags.vue'
// import Times from '../components/Posts/Times.vue'
// import Comment from '../components/page/Comment.vue'

// import Login from '../components/Login/Login.vue'
// import Index from '../components/Login/index.vue'
// import Welcome from '../components/page/welcome.vue'

// import PageList from '../components/page/PageList.vue'
// import WirtePage from '../components/page/WritePage.vue'
// import EditPage from '../components/page/EditPage.vue'
// import indexTimes from '../components/page/timelink.vue'
// import Music from '../components/music.vue'
// import Comments from '../components/Posts/comments.vue'

const routes = [
  { path: '*', component: NoPage },
  { path: '/', component: Home, name: 'home' },
  { path: '/project', component: Project, name: 'project' },
  { path: '/resume', component: Resume, name: 'resume' },
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
