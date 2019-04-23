import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import city from './city'
import cinema from './cinema'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film,
    city,
    cinema
  }
})

export default store
