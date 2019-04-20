import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, NavBar, Tab, Tabs, Icon } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
