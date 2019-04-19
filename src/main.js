import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { } from 'vant' 需要vant插件是导入

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
