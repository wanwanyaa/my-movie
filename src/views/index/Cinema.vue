<template>
  <div class="main-Cinema">
    <div class="home-Cinema">
      <div class="blacker" @click="clearys()"></div>
      <section class="head-Cinema">影院</section>
      <section class="sea-Cinema">
        <router-link to="/city" class="sea-left">
          <span class="city-class">{{ curCity }}</span>
          <i class="city-entry-arrow"></i>
        </router-link>
        <router-link to="/search" class="sea-right">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
            alt
          >
          <span>搜影院</span>
        </router-link>
      </section>
      <section class="nav-wrap">
        <div class="tab-cin" @click="openblack()">
          <div class="item" @click="changecolor($event);openqc()">
            全城
            <i class="city-entry-arrow"></i>
          </div>
          <div class="item" @click="changecolor($event);openpp()">
            品牌
            <i class="city-entry-arrow"></i>
          </div>
          <div class="item" @click="changecolor($event);opentc()">
            特色
            <i class="city-entry-arrow"></i>
          </div>
        </div>
      </section>
      <div class="pos-Cinema" id="pos-qc">
        <van-tabs @click="onClick">
          <van-tab title="商区">
            <van-tree-select
              :items="items"
              :main-active-index="mainActiveIndex"
              :active-id="activeId"
              @navclick="onNavClick"
              @itemclick="onItemClick"
              :height= 402
            />
          </van-tab>
          <van-tab title="地铁站">
            <van-tree-select
              :items="items"
              :main-active-index="mainActiveIndex"
              :active-id="activeId"
              @navclick="onNavClick"
              @itemclick="onItemClick"
              :height= 402
            />
          </van-tab>
        </van-tabs>
      </div>
      <div class="pos-Cinema" id="pos-pp">
        <div class="brand-contentpp" v-for="item in ppList" :key="item.id" @click="changestyle($event);cityformpp(item.id)">
          <div class="contentpp-1"><span class="small-span">√</span> {{item.name}} </div>
          <div class="contentpp-2"> {{item.count}} </div>
        </div>
      </div>
      <div class="pos-Cinema" id="pos-tc">
        <div class="tc-spacial-top">
          <div class="item-title">特色功能</div>
          <div class="button-box" id="tsgn-box1">
            <div class="button-chosen" v-for="item2 in serveList" :key="item2.count" @click="changetc($event);changeserviceId(item2.id)">{{item2.name}}</div>
          </div>
          <div class="item-title">特殊厅</div>
          <div class="button-box" id="tsgn-box2">
            <div class="button-chosen" v-for="item3 in hallTypeList" :key="item3.name" @click="changets($event);changehallType(item3.id)">{{item3.name}}</div>
          </div>
        </div>
        <div class="tc-spacial-bottom">
          <div class="button-cz" @click="goback()">重置</div>
          <div class="button-tj" @click="golast()">提交</div>
        </div>
      </div>
      <section class="cin-Cinema">
        <Adresscinema/>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Adresscinema from '@/components/Adresscinema.vue'
export default {
  data () {
    return {
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    }
  },
  computed: {
    ...mapState('city', [
      'curCity'
    ]),
    ...mapState('cinema', [
      'ppList',
      'serveList',
      'hallTypeList',
      'districtList',
      'subwayList',
      'items'
    ])
  },
  components: {
    Adresscinema
  },
  methods: {
    ...mapMutations('cinema', [
      'setitems',
      'setcityformid',
      'setserviceId',
      'sethallType'
    ]),
    ...mapActions('cinema', [
      'getcinnavList',
      'getcityformpp',
      'getcinemaList'
    ]),
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      this.activeId = data.id
    },
    onClick (index, title) {
      this.$toast(title)
    },
    changecolor (event) {
      let allitemBox = document.getElementsByClassName('item')
      for (var i = 0; i < allitemBox.length; i++) {
        allitemBox[i].style.cssText = 'color:#777'
        let allitemBoxi = allitemBox[i].getElementsByTagName('i')[0]
        allitemBoxi.classList.add('city-entry-arrow')
        allitemBoxi.classList.remove('city-top-arrow')
      }
      let itemBox = event.currentTarget
      itemBox.style.cssText = 'color:#e54847'
      let itemBoxi = event.currentTarget.getElementsByTagName('i')[0]
      itemBoxi.classList.remove('city-entry-arrow')
      itemBoxi.classList.add('city-top-arrow')
    },
    openqc () {
      let posQc = document.getElementById('pos-qc')
      let posPp = document.getElementById('pos-pp')
      let posTc = document.getElementById('pos-tc')
      posQc.style.cssText = 'display:block'
      posPp.style.cssText = 'display:none'
      posTc.style.cssText = 'display:none'
    },
    openpp () {
      let posQc = document.getElementById('pos-qc')
      let posPp = document.getElementById('pos-pp')
      let posTc = document.getElementById('pos-tc')
      posQc.style.cssText = 'display:none'
      posPp.style.cssText = 'display:block'
      posTc.style.cssText = 'display:none'
    },
    opentc () {
      let posQc = document.getElementById('pos-qc')
      let posPp = document.getElementById('pos-pp')
      let posTc = document.getElementById('pos-tc')
      posQc.style.cssText = 'display:none'
      posPp.style.cssText = 'display:none'
      posTc.style.cssText = 'display:block'
    },
    clearys (event) {
      let allitemBox = document.getElementsByClassName('item')
      for (var i = 0; i < allitemBox.length; i++) {
        allitemBox[i].style.cssText = 'color:#777'
        let allitemBoxi = allitemBox[i].getElementsByTagName('i')[0]
        allitemBoxi.classList.add('city-entry-arrow')
        allitemBoxi.classList.remove('city-top-arrow')
      }
      let allposCinema = document.getElementsByClassName('pos-Cinema')
      for (var a = 0; a < allposCinema.length; a++) {
        allposCinema[a].style.cssText = 'display:none'
      }
      let black1 = document.getElementsByClassName('blacker')[0]
      black1.style.cssText = 'display:none'
    },
    openblack () {
      let black1 = document.getElementsByClassName('blacker')[0]
      black1.style.cssText = 'display:block'
    },
    changestyle (event) {
      let brandContentpp = document.getElementsByClassName('brand-contentpp')
      let small = document.getElementsByClassName('small-span')
      for (var b = 0; b < small.length; b++) {
        small[b].style.cssText = 'opacity:0'
      }
      for (var o = 0; o < brandContentpp.length; o++) {
        brandContentpp[o].style.cssText = 'color:#333'
      }
      let itemBox1 = event.currentTarget
      let spanbox = event.currentTarget.getElementsByTagName('span')[0]
      spanbox.style.cssText = 'opacity:1'
      itemBox1.style.cssText = 'color:#dd403b'
    },
    changetc (event) {
      let tsgn = document.getElementById('tsgn-box1')
      let tsgnbtn = tsgn.getElementsByClassName('button-chosen')
      for (var i = 0; i < tsgnbtn.length; i++) {
        tsgnbtn[i].classList.remove('tsgn')
      }
      let tsgnBox1 = event.currentTarget
      tsgnBox1.classList.add('tsgn')
    },
    changets (event) {
      let tsgn = document.getElementById('tsgn-box2')
      let tsgnbtn = tsgn.getElementsByClassName('button-chosen')
      for (var i = 0; i < tsgnbtn.length; i++) {
        tsgnbtn[i].classList.remove('tsgn')
      }
      let tsgnBox1 = event.currentTarget
      tsgnBox1.classList.add('tsgn')
    },
    setshuju () {
      setTimeout(() => {
        let newarr8 = []
        for (var i = 0; i < this.districtList.length; i++) {
          let Distfirst = this.districtList[i].name
          let dist = this.districtList[i].subItems
          let obj = {}
          let arr = []
          let num = 0
          if (dist !== undefined) {
            for (var q = 0; q < dist.length; q++) {
              let quaddress = dist[q].name
              var newobj = {}
              newobj.text = quaddress
              newobj.id = ++num
              arr.push(newobj)
            }
          }
          obj.text = Distfirst
          obj.children = arr
          newarr8.push(obj)
        }
        this.setitems(newarr8)
      }, 400)
    },
    cityformpp (cityformid) {
      let black1 = document.getElementsByClassName('blacker')[0]
      let threebox = document.getElementsByClassName('pos-Cinema')
      for (let i = 0; i<threebox.length ; i++) {
        threebox[i].style.cssText='display:none'
      }
      black1.style.cssText = 'display:none'
      this.setcityformid(cityformid)
      this.getcityformpp()
    },
    changeserviceId (serviceId) {
      this.setserviceId(serviceId)
    },
    changehallType (hallType) {
      this.sethallType(hallType)
    },
    golast () {
      let black1 = document.getElementsByClassName('blacker')[0]
      let threebox = document.getElementsByClassName('pos-Cinema')
      for (let i = 0; i<threebox.length ; i++) {
        threebox[i].style.cssText='display:none'
      }
      black1.style.cssText = 'display:none'
       this.getcityformpp()
    },
    goback () {
      let black1 = document.getElementsByClassName('blacker')[0]
      let threebox = document.getElementsByClassName('pos-Cinema')
      for (let i = 0; i<threebox.length ; i++) {
        threebox[i].style.cssText='display:none'
      }
      black1.style.cssText = 'display:none'
      this.getcinemaList()
    }
  },
  created () {
    this.getcinnavList()
    this.setshuju()
  }
}
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
}
.city-entry-arrow {
  margin-right: 0.05rem;
  width: 0;
  height: 0;
  border: 0.04rem solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 0.04rem;
  margin-top: 0.05rem;
}
.city-top-arrow {
  margin-right: 0.05rem;
  width: 0;
  height: 0;
  border: 0.04rem solid #e54847;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  display: inline-block;
  margin-left: 0.04rem;
  margin-top: -0.05rem;
}
.home-Cinema {
  position: relative;
  .cin-Cinema{
    width:100%;
    height:532.5px;
    box-sizing: border-box;
    padding-bottom:50px;
    overflow:auto;
  }
  .blacker{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);
    display:none;
  }
  .pos-Cinema{
    z-index:100;
    width:100%;
    height:446px;
    position: absolute;
    top:135.5px;
    display:none;
  }
  #pos-tc{
    height:343px;
    .tc-spacial-top{
      width:100%;
      height:270px;
      background:#fff;
      overflow: auto;
      .item-title{
        height:20px;
        font-size: 15px;
        color: #777;
        margin-top:11px;
        margin-left:12px;
      }
      .button-box{
        display:flex;
        flex-wrap: wrap;
        .button-chosen{
          width: 69px;
          height: 30px;
          padding: 3px 0;
          margin-left: 3%;
          margin-top: 10px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          background: #fff;
          color: #777;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size:11.2px;
        }
        .tsgn{
          background: #fcf0f0;
          color: #f03d37;
          border: 1px solid #f03d37;
        }
      }
    }
    .tc-spacial-bottom{
      width:100%;
      height:73px;
      display: flex;
      justify-content:space-between;
      background: #fafafa;
      align-items:center;
      .button-cz{
        height: 34px;
        width: 21.3%;
        margin: 13px 11px;
        border: 1px solid #e5e5e5;
        border-radius: 6px;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
      }
      .button-tj{
        height: 34px;
        width: 21.3%;
        margin: 13px 11px;
        border-radius: 6px;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        background: #f03d37;
        border: 1px solid #f03d37;
        color: #fff;
      }
    }
  }
  #pos-qc{
    height:446.64px;
    overflow: auto;
  }
  #pos-pp{
    height:345.12px;
    overflow: auto;
    font-size: 15px;
    color: #333;
    .brand-contentpp{
      width:100%;
      height:45px;
      background:#fff;
      display: flex;
      justify-content:space-between;
      align-items:center;
      border-bottom: 1px solid #e5e5e5;
      .contentpp-1{
        span{
          margin-left:2px;
          margin-right:6px;
          opacity: 0;
        }
      }
      .contentpp-2{
        font-size:12px;
        margin-right:10px;
      }
    }
  }
  .head-Cinema {
    width: 100%;
    height: 50.5px;
    color: #fff;
    background: #e54847;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
  }
  .sea-Cinema {
    display: flex;
    width: 100%;
    height: 44px;
    background: #f5f5f5;
    line-height: 44px;
    .sea-left {
      margin-left: 15px;
      .city-class {
        font-size: 15px;
        color: #666;
      }
    }
    .sea-right {
      width: 280px;
      height: 28px;
      background: #fff;
      margin-left: 18px;
      border: 0.5px solid #e6e6e6;
      border-radius: 5px;
      margin-top: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 14px;
        height: 14px;
      }
      span {
        font-size: 13px;
        color: #b2b2b2;
      }
    }
  }
  .nav-wrap {
    position: relative;
    z-index:100;
    .tab-cin {
      width: 100%;
      height: 40px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      .item {
        width: 33%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: #777;
      }
    }
  }
}
</style>
