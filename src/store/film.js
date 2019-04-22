import axios from 'axios'
// import { Toast } from 'vant'

const state = {
  filmList: [],     // 影片数据
  movieIds: [],    // 影片id
  newMovieIds: [],
  pageNum: 0,     // 页码，默认为0 实际为第二次请求获取的页码 第二页
  filmPageSize: 10,    // 默认每页显示十条
  filmTotal: 40,      // 影片总条数，后面会获取替换掉
  loading: false     // 加载状态
}

const getters = {
  filmPageTotal (state) {
    return Math.ceil((state.filmTotal - 12) / state.filmPageSize)
  },
  finished (state, getters) {
    return state.pageNum === getters.filmPageTotal
  }
}

const mutations = {
  getMovieIds (state, list) {
    state.movieIds = list
  },
  setMovieIds (state, list) {
    var n = state.pageNum * 10
    state.newMovieIds = list.slice(12+n,22+n)
  },
  setFilmList (state, list) {
    state.filmList = list
  },
  addFilmList (state, list) {
    state.filmList.push(...list)
  },
  setFilmTotal (state, total) {
    state.filmTotal = total
  },
  setPageNum (state) {
    if(state.pageNum<4){
      state.pageNum++
    }
  },
  /**
   * 替换请求地址中图片路径
   * @param {Array} arr 获取到的数据
   */
  changeUrl (state, arr) {
    arr.forEach(x => {
      x.img = x.img.replace('w.h','128.180')
    });
  },
  // 设置请求状态
  setLoading (state, bol) {
    state.loading = bol
  }
}

const actions = {
  // 第一次请求时得到的数据
  getOneFilmList ({ commit }) {
    axios.get('/maoyan/ajax/movieOnInfoList?token=')
    .then(res => {
      let result = res.data
      console.log(result)
      commit('getMovieIds', result.movieIds)
      commit('setFilmTotal', result.total)
      commit('changeUrl', result.movieList)
      commit('setFilmList', result.movieList)
      commit('setLoading', false)
    })
  },
  // 往后请求时得到的数据
  getNextFilmList ({ commit, state }) {
      commit('setMovieIds', state.movieIds)
      axios.get('/maoyan/ajax/moreComingList?token=', {
        params: {
          movieIds: state.newMovieIds.join(',')
        }
      }).then(res => {
        let result = res.data
        console.log(result, 'getNextFilmList')
        commit('changeUrl', result.coming)
        commit('addFilmList', result.coming)
        commit('setPageNum')
        commit('setLoading', false)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
