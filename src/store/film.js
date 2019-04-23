import axios from 'axios'
// import { Toast } from 'vant'

const state = {
  filmList: [],
  movieIds: ['1212492,1167831,248906,1219670,1206415,1156894,1262586,247295,1206605,368260',
    '1262087,1218727,343344,1243904,883196,1213175,1228750,1206824,1197466,245881',
    '345875,1229702,1206939,672279,1239678,1239281,410629,1259639,1230152,507792',
    '1217497,1236912,1257272,1230119,672379,1245589,1277746,343987'
  ],
  pageNum: 0
}

const mutations = {
  setFilmlist (state, list) {
    state.filmList = list
  },
  setPageNum (state) {
    if (state.pageNum < 4) {
      state.pageNum++
    }
  }
}

const actions = {
  // 第一次请求时得到的数据
  getOneFilmList ({
    commit
  }) {
    axios.get('/maoyan/ajax/movieOnInfoList?token=', {
      params: {
        movieIds: '1262087,1218727,343344,1243904,883196,1213175,1228750,1206824,1197466,245881'
      }
    }, {
      headers: {
        'X-Requested-With': XMLHttpRequest
      }
    }).then(res => {
      let result = res.data
      console.log(result)
    })
  },

  // 往后请求时得到的数据
  getNextFilmList ({
    commit,
    state
  }) {
    axios.get('/maoyan/ajax/moreComingList?token=', {
      params: {
        movieIds: state.movieIds[state.pageNum]
      }
    }, {
      headers: {
        'X-Requested-With': XMLHttpRequest
      }
    }).then(res => {
      let result = res.data
      console.log(result)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
