import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import films from './films'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film,
    films
  }
})

export default store
