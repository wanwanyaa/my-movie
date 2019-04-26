<template>
  <div>
    <div class="heads">猫眼电影
      <div class="backhome" @click="backqian()">＜</div>
    </div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="搜电影、搜影院"
        show-action
        background="#f5f5f5"
      />
    </form>
    <!--影片-->
    <div class="MovieLists" v-show="MovieList">
      <h3>电影/电视剧/综艺</h3>
      <li class="main-li-advance" v-for="item in MovieList" :key="item.id">
        <div class="avatar">
          <img :src="item.img" alt="">
        </div>
        <div class="avatar-right">
          <div class="title">
            <div class="title-top">
              <div class="title-main">{{ item.nm }}</div>
              <span class="version"></span>
              <div class="wish" v-show="item.sc == 0">
                <span class="grade">{{ item.wish }}</span>人想看
              </div>
              <div class="wish" v-show="item.sc !== 0">
                <span class="grade">{{ item.sc }}</span>分
              </div>
            </div>
            <div class="title-bot">
              <div class="english">{{ item.enm }}</div>
              <div class="actor">{{ item.cat }}</div>
              <div class="show-info">{{ item.rt }}</div>
            </div>
          </div>
          <div class="shop">
            <div class="shop-main shop-red" v-if="item.showst === 3">
            购票
            </div>
            <div class="shop-main shop-yellow" v-if="item.showst === 1">
            想看
            </div>
            <div class="shop-main" v-if="item.showst === 4">
            预售
            </div>
          </div>
        </div>
      </li>
      <div class="all">查看全部<span>{{ MovieListNum.total }}</span>部影视剧</div>
     </div>
    <!--影院-->
    <div class="Cinemas" v-show="CinemaList">
      <h3>影院</h3>
        <section class="Cinema" v-for="attr in CinemaList" :key="attr.id">
        <div class="Cinema-list">
          <div class="Cinema-title">
            <div class="Cinema-head">
              <span>{{ attr.nm }}</span>
              <span class="Cinema-head2">
                <span class="Cinema-price">{{ attr.sellPrice }}</span>
                <span class="Cinema-q">元起</span>
              </span>
            </div>
            <div class="Cinema-address">
              <span class="adress-item">{{ attr.addr }}</span>
              <span class="Cinema-distance">{{ attr.distance }}</span>
            </div>
            <div class="Cinema-block">
              <div class="green-c com-block" v-show="attr.allowRefund === 1">退</div>
              <div class="green-c com-block" v-show="attr.endorse">改签</div>
              <div class="yellow-c com-block" v-show="attr.snack === 1">小吃</div>
              <div class="yellow-c com-block" v-show="attr.vipDesc === '折扣卡'">折扣卡</div>
              <!-- <div class="green-c com-block">还有啥</div> -->
            </div>
          </div>
        </div>
      </section>
     <div class="all" v-show="CinemaListNum.total > 3">查看全部<span>{{ CinemaListNum.total }}</span>家电影院</div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations,mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('search',[
      'MovieList',
      'CinemaList',
      'inpValue',
      'CinemaListNum',
      'MovieListNum'
    ]),

    value: {
      get () {
        return this.$store.state.search.inpValue
      },
      set (value) {
        return this.$store.commit('search/setValue', value)
      }
    }
  },
  watch: {
    value(newValue, oldValue){
      this.getMovieList()
    }
  },
  methods: {
    ...mapMutations ('search',[
      'setValue'
    ]),
    ...mapActions('search',[
      'getMovieList'
    ]),
    onCancel() { // 点击取消事件

    },
    onSearch() {  // 回车事件

    },
    backqian() {
      this.$router.go(-1)
    }
  },
  created() {
    this.getMovieList()
    this.setValue()
  },
}
</script>

<style lang="less" scoped>
.heads{
  color: #fff;
  width:100%;
  height:50px;
  font-size: 18px;
  font-weight: 400;
  background: #e54847;
  text-align: center;
  line-height: 50px;
  position: relative;
  .backhome{
    position: absolute;
    top:0;
    left: 10px;
    font-size:35px;
  }
}
.van-search{
  height: 47px;
}
.van-cell,.van-search__content{
  background: white;
  font-size: 13px;
  color: #777777;
  height: 30px;

  }
  .van-search__content{
    border: 1px solid #e6e6e6;
    border-radius: 5px;
  }
  .van-search__action{
    color:#f03d37;
  }

  .van-nav-bar{
    background: #e54847;
    height: 50.5px;
    color: #fff;
  }
  .van-ellipsis{
    color: white;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
  }
  .van-icon-arrow-left{
    color: white!important;
    font-size: 36px!important;
    vertical-align: middle;
    padding-right: 10px;
  }
  .MovieLists{
    max-height: 383px;
    overflow: hidden;
  }
  h3{
      font-size: 15px;
      color: #999;
      padding: 9px 15px;
      font-size: 400
  }
  .main-li-advance {
        padding-left: 15px;
        background: #fff;
        .avatar {
          width: 64px;
          height: 90px;
          position: relative;
          margin-top: 12px;
          float: left;
          img {
            width: 100%;
            height: 90px;
          }
        }
        .avatar-right {
          padding: 12px 14px 12px 0;
          margin-left: 74px;
          height: 90px;
          max-height: 90px;
          position: relative;
          border-bottom: 1px solid #ccc;
          .title {
            padding-right: 5px;
            overflow: hidden;
            .title-top {
              width: 290px;
              max-height: 24px;
              margin-bottom: 7px;
              line-height: 24px;
              overflow: hidden;
              display: flex;
              .title-main {
                width: 120px;
                // max-width: 124px;
                font-size: 17px;
                color: #333;
                font-weight: 700;
                padding-right: 0px;
                flex-shrink: 1;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .version {
                width: 43px;
                height: 14px;
                background:url(data:image/png;base64,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);
                background-size: contain;
                background-repeat: no-repeat;
                height: 14px;
                display: inline-block;
                margin-top: 6px;
            }
            .wish{
              width: 110px;
                  color: #fa0;
                  font-size: 10px;
                  flex-shrink: 0;
                  float: right;
                  text-align: right;
                  .grade{
                    font-size: 16px;
                    text-align: right;
                  }
            }
            }
            .title-bot {
              box-sizing: border-box;
              line-height: 1;
              overflow: hidden;
              .score {
                font-size: 13px;
                color: #666;
                .grade {
                  font-weight: 700;
                  color: #faaf00;
                  font-size: 15px;
                  white-space: nowrap;
                }
              }
              .english{
                width: 212px;
                font-size: 13px;
                color: #666;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .actor {
                font-size: 13px;
                color: #666;
                margin-top: 6px;
                line-height: 15px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .show-info {
                font-size: 13px;
                color: #666;
                margin-top: 6px;
                line-height: 15px;
              }
            }
          }
          .shop {
            font-size: 12px;
            position: absolute;
            right: 14px;
            top: 48px;
            bottom: 0;
            height: 27px;
            .shop-main {
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #3c9fe6;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
            }
            .shop-red {
              background-color: #ef4238;
            }
            .shop-yellow {
              background-color: #faaf00;
            }
          }
        }
      }

  .all{
        text-align: center;
        line-height: 44px;
        height: 44px;
        font-size: 15px;
        color: #ef4238;
        border-bottom: 10px solid #f5f5f5;
      }


  .green-c {
    color: #589daf;
    border: 1px solid #589daf;
  }
  .yellow-c {
    color: #f90;
    border: 1px solid #f90;
  }
  .Cinemas {
    max-height: 330px;
    overflow: hidden;
  .Cinema {
    .Cinema-list {
      width: 100%;
      box-sizing: border-box;
      padding: 13px 15px 0;
      border-top: 1px solid #e6e6e6;
      .Cinema-title {
        border-bottom: 1px solid #e0e0e0;
        box-sizing: border-box;
        padding-bottom:10px;
        .Cinema-head {
          height: 25px;
          line-height: 25px;
          font-size: 16px;
          color: #000;
          margin-bottom: 2px;
          span{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .Cinema-head2 {
            margin-left: 5px;
            padding-top: 9px;
            padding-left: 3px;
            .Cinema-price {
              color: #f03d37;
              font-size: 18px;
            }
            .Cinema-q {
              font-size: 11px;
              color: #f03d37;
              margin-left: 3px;
            }
          }
        }
        .Cinema-address {
          margin-bottom: 2px;
          width:100%;
          overflow: hidden;
          display:flex;
          justify-content: space-between;
          .adress-item {
            font-size: 13px;
            color: #666;
            display: block;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .Cinema-distance {
            margin-left:10px;
            font-size: 13px;
            color: #666;
            display: block;
          }
        }
        .Cinema-block {
          margin-bottom: 5px;
          .com-block {
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 15px;
            line-height: 15px;
            border-radius: 2px;
            font-size: 10px;
            margin-right:5px;
          }
        }
        .Cinema-card{
          .card-title{
            display:flex;
            height:14px;
            img{
              height:100%;
            }
            .card-sale{
              margin-left:6px;
              font-size: 11px;
              line-height:14px;
              color: #999;
            }
          }
        }
      }
    }
  }
  }
</style>
