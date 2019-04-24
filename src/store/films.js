import axios from 'axios'
// import { Toast } from 'vant'

const state = {
  newMovieIds: [],
  advTopList: [], // 即将上映头部信息
  advBlist: [],
  advMovieIds: [],
  newAdvMovieIds: [],
  advDate: [],
  secFlag: true,
  newPageNum: 0,
  filmPageSize: 10, // 默认每页显示十条
  newFilmTotal: 40,
  loading: false // 加载状态
}

const getters = {
  filmPageTotal (state) {
    return Math.ceil((state.newFilmTotal) / state.filmPageSize)
  },
  finished (state, getters) {
    return state.newPageNum >= getters.filmPageTotal
  }
}

const mutations = {
  setAdvTopList (state, list) {
    state.advTopList = list
  },
  setAdvBlist (state, list) {
    state.advBlist = list
  },
  getAdvMovieIds (state, list) {
    state.advMovieIds = list
  },
  setAdvMovieIds (state, list) {
    var n = state.newPageNum * 10
    state.newAdvMovieIds = list.slice(12 + n, 22 + n)
  },
  setNewFilmTotal (state, total) {
    state.newFilmTotal = total
  },
  setNewPageNum (state) {
    state.newPageNum++
  },
  addFilmAdvBList (state, list) {
    let arr = []
    list.forEach(x => {
      let obj = {}
      obj.filmDate = x.comingTitle
      obj.list = []
      if (x.comingTitle === obj.filmDate) {
        obj.list.push(x)
      }
      if (arr.indexOf(obj) < 0) {
        arr.push(obj)
      }
    })
    let arr1 =[]
    arr = arr.reduce((a, b) => {
      if (a.filmDate===b.filmDate){
        a.list = [...a.list,...b.list]
        return a
      } else{
        arr1.push(b)
        return b
      }
    },[])
    state.advDate.push(...arr1)
    state.advBlist.push(...list)
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
  // 获取即将上映数据
  getFilmAdvToplist ({ commit, state }) {
    axios.get('/maoyan/ajax/mostExpected?ci=30&limit=10&offset=0&token=JcC6RJz0Vo9TchIEqR0z1bT7wjQAAAAAPAgAACKvdKXeqxHHViDxuhhRTL9QXCJlqVH3K2aKEOU9p2um152uZ88stqnHUIG4s6G_ZQ').then(res => {
      let result = res.data
      commit('changeUrl', {
        arr: result.coming,
        str: '170.230'
      })
      commit('setAdvTopList', result.coming)
    })
  },

  // 获取即将上映数据2
  getFilmAdvBlist ({ commit, state }) {
    axios.get('/maoyan/ajax/comingList?ci=30&token=JcC6RJz0Vo9TchIEqR0z1bT7wjQAAAAAPAgAACKvdKXeqxHHViDxuhhRTL9QXCJlqVH3K2aKEOU9p2um152uZ88stqnHUIG4s6G_ZQ', {
      params: {
        limit: 12
      }
    }).then(res => {
      let result = res.data
      commit('changeUrl', {
        arr: result.coming,
        str: '128.180'
      })
      commit('getAdvMovieIds', result.movieIds)
      commit('setNewFilmTotal', result.movieIds.length)
      commit('setSecFlag', false)
      commit('addFilmAdvBList', result.coming)
      commit('setNewPageNum')
      commit('setLoading', false)
    })
  },
  // 往后获取即将上映数据
  getNextAdvBList ({ commit, state }) {
    commit('setAdvMovieIds', state.advMovieIds)
    axios.get('/maoyan/ajax/moreComingList?ci=30&token=JcC6RJz0Vo9TchIEqR0z1bT7wjQAAAAAPAgAACKvdKXeqxHHViDxuhhRTL9QXCJlqVH3K2aKEOU9p2um152uZ88stqnHUIG4s6G_ZQ', {
      params: {
        limit: 10,
        movieIds: state.newAdvMovieIds.join(',')
      }
    }).then(res => {
      let result = res.data
      commit('changeUrl', {
        arr: result.coming,
        str: '128.180'
      })
      commit('addFilmAdvBList', result.coming)
      commit('setNewPageNum')
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
