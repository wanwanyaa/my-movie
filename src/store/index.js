import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import films from './films'
import search from './search'
import city from './city'
import cinema from './cinema'
import center from './center'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film,
    films,
    search,
    city,
    cinema,
    center
  }
})

export default store
