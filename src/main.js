import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
