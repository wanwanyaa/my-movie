import axios from 'axios'

const state = {
  MovieList: [],
  CinemaList: [],
  inpValue: '',
  CinemaListNum: [],
  MovieListNum: []
}



const mutations = {
  setMovieList(state,list){
    console.log(list)
    state.MovieList = list
  },
  setCinemaList (state,list) {
    console.log(list)
    state.CinemaList = list
  },
  setCinemaListNum (state,list) {
    console.log(list)
    state.CinemaListNum = list
  },
  setValue (state,value) {
    console.log(value)
    state.inpValue = value
  },
  setMovieListNum (state,list) {
    state.MovieListNum = list
  },
    /**
   * 替换请求地址中图片路径
   * @param {Array} arr 获取到的数据
   */
  changeUrl (state, payload) {
    payload.arr.forEach(x => {
      x.img = x.img.replace('w.h', payload.str)
    })
  },
}

const actions = {
  getMovieList ({ commit ,state}) {
    console.log(1)
    axios.get('/maoyan/ajax/search',{
      params: {
        kw: state.inpValue,
        cityId: '30',
        stype: '-1'
      },
    }).then(res =>{
      let result = res.data
      console.log(result.cinemas)
      if (result.cinemas) {
        commit('setCinemaList',result.cinemas.list)
        commit('setCinemaListNum',result.cinemas)
      }else{
        console.log('dsadsad')
       state.CinemaList = null
      }
      if (result.movies) {
        commit('setMovieList',result.movies.list)
        commit('setMovieListNum',result.movies)
        commit('changeUrl', {
          arr: result.movies.list,
          str: '128.180'
        })
      }else{
       state.MovieList = null
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}