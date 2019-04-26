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
  subwayList: [],
  daylist: '',
  detailsList: [],
  showdateList: [],
  setfilmId: [],
  detailMovieList: [],
  imgurl: [],
  cityformid: [],
  serviceId: [],
  hallType: []
}

const mutations = {
  // setcityID (state, list) {
  //   state.cityId = list
  // },
  setitems (state, list) {
    state.items = list
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
    state.districtList = list
  },
  setsubwayList (state, list) {
    state.subwayList = list
  },
  setday (state, list) {
    state.daylist = list
  },
  setdetails (state, list) {
    state.detailsList = list
  },
  setshowdate (state, list) {
    state.showdateList = list
  },
  setfilmId (state, list) {
    state.setfilmId = list
  },
  setdetailMovieList (state, list) {
    state.detailMovieList = list
  },
  changeimgUrl (state, payload) {
    let url1 = payload.replace("w.h", "128.180");
    state.imgurl = url1
  },
  setcityformid (state, payload) {
    state.cityformid = payload;
  },
  setserviceId (state, list) {
    state.serviceId = list
  },
  sethallType (state, list) {
    state.hallType = list
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
  },
  getcinemafilmList ({ commit, rootState }) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
      return ret
    }]
    axios.post('/maoyan/ajax/movie?', {
        reqId: Date.now(),
        cityId: rootState.city.cityId,
        updateShowDay: true,
        movieId: 248172,
        offset: 0,
        limit: 20,
        districtId: -1,
        lineId: -1,
        hallType: -1,
        brandId: -1,
        serviceId: -1,
        areaId: -1,
        stationId: -1,
        day: rootState.cinema.daylist,
        movieId: rootState.cinema.setfilmId
      },{
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
      }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setdetails', result.cinemas)
        commit('setshowdate', result.showDays)
      } else {
        alert(result.msg)
      }
    })
  },
  getcinemafilmList2 ({commit, rootState}) {
    axios.get('/maoyan/ajax/detailmovie?', {
      params: {
        movieId: rootState.cinema.setfilmId
      }
    }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setdetailMovieList', result.detailMovie)
        commit('changeimgUrl', result.detailMovie.img)
      } else {
        alert(result.msg)
      }
    })
  },
  getcityformpp ({commit, rootState}) {
    axios.get('/maoyan/ajax/cinemaList?', {
      params: {
        day:rootState.cinema.daylist,
        offset:0,
        limit:20,
        districtId:-1,
        lineId:-1,
        hallType:rootState.cinema.hallType,
        brandId:rootState.cinema.cityformid,
        serviceId:rootState.cinema.serviceId,
        areaId:-1,
        stationId:-1,
        updateShowDay:false,
        reqId:Date.now(),
        cityId:1
      }
    }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setCinemaList', result.cinemas)
        commit('setdetails',result.cinemas)
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
