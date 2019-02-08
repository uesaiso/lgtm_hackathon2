import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'
import BootstrapVue from 'bootstrap-vue'

import '@/style/entry.scss'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.prototype.$http = http


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
