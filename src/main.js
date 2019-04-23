import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Toast, Tab, Tabs, TreeSelect } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(TreeSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
