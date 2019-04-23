import axios from 'axios'
const state = {
  MovieList: []
}
const mutations = {
  setMovieList(state,list){
    state.MovieList = list
  }
}
const actions = {
  getMovieList ({ commit }) {
    console.log(1)
    axios.get('/maoyan/ajax/search',{
      params: {
        kw: 'a',
        cityId: '30',
        stype: '-1'
      },
    }).then(res =>{
      let result = res.data
      console.log(result)
      commit('setMovieList',result.cinemas.list)
    })
  },
  getCinemaList(state){
    
  }
}
const getter = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}