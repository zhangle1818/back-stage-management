import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8899'
// 是否是生成环境
axios.defaults.withCredentials = true

// 将axios绑定到原型上，每一个组件都可以通过this.$axios访问到
Vue.prototype.$axios = axios

// 添加拦截器
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  if (!localStorage.getItem('userInfo')) {
    next('/login')
  } else {
    next()
  }
})

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
