import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementui)
import vueswiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(vueswiper)


import api from './api'
Vue.prototype.$api = api; // 将api挂载到vue的原型上
require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
