<template>
<div class="big-city-list">
  <div class="city-list-main" id="scroll-city">
    <section>
      <div class="city-title">定位城市</div>
      <div class="city-list-inline">
        <div class="location-city">定位失败，请点击重试</div>
      </div>
    </section>
    <section>
      <div class="host-city-title">热门城市</div>
      <div class="host-city-list">
        <div class="host-city-item" v-for="city1 in hotCitys" :key="city1.cityId" @click="fn2(city1.name)">{{city1.name}}</div>
      </div>
    </section>
    <div class="all-city">
      <section v-for="item in newCityList" :key="item.name" :id="'box-' + item.name">
      <div class="head-city-title">{{item.name}}</div>
      <div class="head-city">
        <div class="head-city-item" v-for="city in item.citys" :key="city.cityId" @click="fn2(city.name)">{{city.name}}</div>
      </div>
    </section>
    </div>
    <section class="city-nav">
      <div>定位</div>
      <div>热门</div>
      <div v-for="py in pys" :key="py" @click="pyclick(py)">{{py}}</div>
    </section>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'city',
  computed: {
    ...mapState('city', [
      'cityList'
    ]),

    ...mapGetters('city', [
      'newCityList',
      'pys',
      'hotCitys'
    ])
  },

  methods: {
    ...mapActions('city', [
      'getCityList'
    ]),
    pyclick (py) {
      let boxEl = document.getElementById('box-' + py)
      let top = boxEl.offsetTop
      document.getElementById('scroll-city').scrollTop = top
    },
    ...mapMutations('city', [
      'changeCurCity'
    ]),
    fn2 (city) {
      this.changeCurCity(city)
      this.$router.back()
    }
  },

  created () {
    this.getCityList()
  }
}
</script>

<style lang="less">
body,html{
  width: 100%;
  height: 100%;
}
.big-city-list{
  width:375.2px;
  height:667.2px;
}
.city-list-main {
  width: 100%;
  height:100%;
  overflow-y:auto;
  .all-city{
    height:100%;
  }
  .city-title {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    background-color: #ebebeb;
    width: 100%;
    box-sizing: border-box;
  }
  .city-list-inline {
    height: 56px;
    width: 100%;
    background: #f5f5f5;
    padding-bottom: 8px;
    padding-right: 30px;
    box-sizing: border-box;
    .location-city {
      font-size: 14px;
      color: #333;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      line-height: 33px;
      text-align: center;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 33px;
      margin-top: 15px;
      margin-left: 4%;
      float: left;
      background: #fff;
      width: auto;
      min-width: 30%;
      padding: 0 20px;
    }
  }
  .host-city-title {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    width: 100%;
    background-color: #ebebeb;
    box-sizing: border-box;
  }
  .host-city-list {
    overflow: hidden;
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    padding-bottom: 8px;
    padding-right: 30px;
    box-sizing: border-box;
    .host-city-item {
      float: left;
      background: #fff;
      width: 29%;
      height: 33px;
      margin-top: 15px;
      margin-left: 4%;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      line-height: 33px;
      text-align: center;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .head-city-title {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    background-color: #ebebeb;
    width: 100%;
    box-sizing: border-box;
  }
  .head-city {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    .head-city-item{
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #c8c7cc;
    font-size: 14px;
    color: #333;

    }
  }
  .city-nav{
    position: fixed;
    top: 75px;
    right: 0;
    width: 35px;
    z-index: 10;
    text-align: center;
    font-size: 12px;
    div{
      margin-bottom: 5px;
    }
  }
}
</style>
