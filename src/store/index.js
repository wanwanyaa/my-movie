import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import films from './films'
import search from './search'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film,
    films,
    search
  }
})

export default store
