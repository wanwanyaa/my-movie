import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, NavBar, Tab, Tabs, Icon, List, Field, Cell, CellGroup, TreeSelect, Toast, Search, Button, Swipe, SwipeItem } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Icon)
  .use(List)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Toast)
  .use(TreeSelect)
  .use(Search)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
