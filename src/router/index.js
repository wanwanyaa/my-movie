import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index.vue'
import Film from '@/views/index/Film.vue'
import Cinema from '@/views/index/Cinema.vue'
import Center from '@/views/index/Center.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'films/:filmtype', name: 'films', component: Film },
        { path: 'cinemas', name: 'cinemas', component: Cinema },
        { path: 'centers', name: 'centers', component: Center },
        { path: '', redirect: '/films/hotPlaying' }
      ]
    }
  ]
})

export default router
