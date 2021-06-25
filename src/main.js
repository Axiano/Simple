import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/js/flexible'
// import './assets/font/iconfont'
import axios from 'axios'
import { Notification } from 'element-ui'
import mavonEditor from 'mavon-editor'

// import VueLazyload from 'vue-lazyload'
import yaml from 'js-yaml'
// js 引入
// import Antd from 'ant-design-vue'

// 字体 js

// css引入
// 全局css
import './assets/css/global.css'

// 自定义 css

// 第三方css
// import 'ant-design-vue/dist/antd.css'
// import 'mavon-editor/dist/css/index.css'
// import './plugins/element.js'

Vue.config.productionTip = false
//
// axios.defaults.baseURL = 'http://api.axian.fun/'
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
axios.interceptors.response.use(config => {
  return config
})
Vue.prototype.$http = axios
Vue.prototype.$notify = Notification
Vue.prototype.$Y = yaml

Vue.directive('highlight', (event) => {
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
});
// 挂在js挂在 vue
Vue.use(mavonEditor)
// Vue.use(Antd)
// Vue.use(VueLazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
