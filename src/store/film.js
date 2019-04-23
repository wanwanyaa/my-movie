import axios from 'axios'
// import { Toast } from 'vant'

const state = {
  filmList: [], // 影片数据
  movieIds: [], // 影片id
  newMovieIds: [],
  filmTypes: 1,
  secFlag: true,
  pageNum: 0, // 页码，默认为0 实际为第二次请求获取的页码 第二页
  filmPageSize: 10, // 默认每页显示十条
  filmTotal: 40, // 影片总条数，后面会获取替换掉
  loading: false // 加载状态
}

const getters = {
  filmPageTotal (state) {
    return Math.ceil((state.filmTotal) / state.filmPageSize)
  },
  finished (state, getters) {
    return state.pageNum >= getters.filmPageTotal
  }
}

const mutations = {
  setFilmTypes (state, Num) {
    state.filmTypes = Num
  },
  getMovieIds (state, list) {
    state.movieIds = list
  },
  setMovieIds (state, list) {
    var n = state.pageNum * 10
    state.newMovieIds = list.slice(12 + n, 22 + n)
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
    state.pageNum++
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
  // 设置请求状态
  setLoading (state, bol) {
    state.loading = bol
  },
  setSecFlag (state, bol) {
    state.secFlag = bol
  }
}

const actions = {
  // 第一次请求时得到的数据
  getOneFilmList ({ commit, state }) {
    commit('setFilmTypes', 1)
    if (state.filmTypes === 1) {
      axios.get('/maoyan/ajax/movieOnInfoList?token=').then(res => {
        let result = res.data
        commit('getMovieIds', result.movieIds)
        commit('setFilmTotal', result.total)
        commit('changeUrl', {
          arr: result.movieList,
          str: '128.180'
        })
        commit('setFilmList', result.movieList)
        commit('setLoading', false)
      })
    }
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
      commit('changeUrl', {
        arr: result.coming,
        str: '128.180'
      })
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
