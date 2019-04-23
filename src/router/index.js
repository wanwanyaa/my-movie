import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index.vue'
import Film from '@/views/index/Film.vue'
import Cinema from '@/views/index/Cinema.vue'
import Center from '@/views/index/Center.vue'
import City from '@/views/city/Index.vue'
import Detail from '@/views/detail/Index.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'films/:filmType', name: 'films', component: Film, meta: { tabNum: 0} },
        { path: 'cinemas', name: 'cinemas', component: Cinema, meta: { tabNum: 1} },
        { path: 'centers', name: 'centers', component: Center, meta: { tabNum: 2} },
        { path: '', redirect: '/films/hotPlaying' },
      ]
    },
    { path: '/city', name: 'city', component: City },
    { path: '/details/:filmId', name: 'details', component: Detail },

  ]
})

export default router
