import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film
  }
})

export default store
