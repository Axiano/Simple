import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexible'
import './assets/font/iconfont'
// js 引入
import Antd from 'ant-design-vue'

// 字体 js

// css引入
// 全局css
import './assets/css/global.css'

// 自定义 css

// 第三方css
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
// 挂在js挂在 vue
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
