import axios from 'axios'
// import { Toast } from 'vant'

const state = {
  // cityId: 30,
  items: [],
  cinemaList: [],
  ppList: [],
  serveList: [],
  hallTypeList: [],
  districtList: [],
  subwayList: []
}

const mutations = {
  // setcityID (state, list) {
  //   state.cityId = list
  // },
  setitems (state, list) {
    state.items = list
    console.log(state.items)
  },
  setCinemaList (state, list) {
    state.cinemaList = list
  },
  setppList (state, list) {
    state.ppList = list
  },
  setserveList (state, list) {
    state.serveList = list
  },
  sethallTypeList (state, list) {
    state.hallTypeList = list
  },
  setdistrictList (state, list) {
    console.log(32)
    state.districtList = list
  },
  setsubwayList (state, list) {
    state.subwayList = list
  }
}

const actions = {
  getcinemaList ({ commit, rootState }) {
    axios.get('/maoyan/ajax/cinemaList?day=2019-04-23&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true', {
      params: {
        reqId: Date.now(),
        cityId: rootState.city.cityId
      }
    }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setCinemaList', result.cinemas)
      } else {
        alert(result.msg)
      }
    })
  },
  getcinnavList ({ commit, rootState }) {
    axios.get('/maoyan/ajax/filterCinemas?', {
      params: {
        ci: rootState.city.cityId
      }
    }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setppList', result.brand.subItems)
        commit('setserveList', result.service.subItems)
        commit('sethallTypeList', result.hallType.subItems)
        commit('setdistrictList', result.district.subItems)
        commit('setsubwayList', result.subway.subItems)
      } else {
        alert(result.msg)
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
