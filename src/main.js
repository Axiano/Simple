import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Notification } from 'element-ui'
import mavonEditor from 'mavon-editor'
import yaml from 'js-yaml'
import './assets/css/global.css'
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.axian.fun/'
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
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
