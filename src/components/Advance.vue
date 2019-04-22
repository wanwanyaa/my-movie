<template>
  <div class="my-adv">
    <ul class="bottom-box">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="swiper">
          <p>近期最受期待</p>
          <ul class="swiper-ul">
            <li class="swiper-li" v-for="item in advTopList" :key="item.id">
              <div class="big-img">
                <img :src="item.img" alt>
                <span class="toggle">
                  <span></span>
                </span>
                <span class="wish">
                  <span class="wish-num">{{item.wish}}</span>人想看
                </span>
              </div>
              <h5 class="title">{{item.nm}}</h5>
              <p class="data">{{item.comingTitle}}</p>
            </li>
          </ul>
        </div>
        <li class="main-li-advance" v-for="item in advBlist" :key="item.id">
          <div class="avatar">
            <img :src="item.img" alt>
          </div>
          <div class="avatar-right">
            <div class="title">
              <div class="title-top">
                <div class="title-main">{{item.nm}}</div>
                <span class="version"></span>
              </div>
              <div class="title-bot">
                <div class="score">
                  <span class="grade">{{item.wish}}</span>
                  <span class="score-line">人想看</span>
                </div>
                <div class="actor">主演: {{item.star}}</div>
                <div class="show-info">{{item.showInfo}}</div>
              </div>
            </div>
            <div class="shop">
              <div class="shop-main">预售</div>
            </div>
          </div>
        </li>
      </van-list>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("film", ["advTopList", "advBlist"]),
    ...mapGetters('film', [
      'finished'
    ]),
    loading: {
        get () {
          return this.$store.state.film.loading
        },
        set (value) {
          return this.$store.commit('film/setLoading', value)
        }
      }
  },
  methods: {
    ...mapActions("film", [
      "getFilmAdvToplist",
      "getFilmAdvBlist"
    ]),
    onLoad () {
      this.getFilmAdvBlist()
    }
  },
  mounted () {
    console.log("huoqu");
    this.getFilmAdvToplist();
    this.getFilmAdvBlist();
  },
  beforeDestroy() {
    console.log('xiaoshuila')
  },
  beforeRouteEnter (to, from, next) {
    console.log(11111)
    next()
  }
};
</script>

<style lang="less">
.my-adv {
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
  .bottom-box{
    height:523px;
    .swiper {
      padding: 12px 0 12px 15px;
      background-color: #fff;
      margin-bottom: 10px solid #ccc;
      p {
        margin: 0 0 12px;
        font-size: 14px;
        color: #333;
      }
      .swiper-ul {
        overflow: scroll;
        white-space: nowrap;
        .swiper-li {
          display: inline-block;
          width: 85px;
          overflow: hidden;
          margin-right: 10px;
          .big-img {
            width: 85px;
            height: 115px;
            position: relative;
            margin-bottom: 6px;
            white-space: nowrap;
            .toggle {
              width: 28px;
              line-height: 28px;
              background: rgba(61, 63, 71, 0.6);
              text-align: center;
              border-bottom-right-radius: 10px;
              position: absolute;
              top: 0;
              left: 0;
              span {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);
                display: inline-block;
                width: 10px;
                height: 10px;
                background-size: 100%;
                background-repeat: no-repeat;
              }
            }
            .wish {
              position: absolute;
              left: 4px;
              bottom: 2px;
              color: #faaf00;
              font-size: 11px;
              font-weight: 600;
              white-space: nowrap;
              .wish-num {
                color: #faaf00;
                font-size: 11px;
                font-weight: 600;
              }
            }
            img {
              width: 85px;
              height: 115px;
            }
          }
          .title {
            width: 82px;
            margin: 0 0 3px;
            font-size: 13px;
            color: #222;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: block;
          }
          .data {
            margin: 0;
            font-size: 12px;
            color: #999;
          }
        }
      }
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
          margin-right: 48px;
          overflow: hidden;
          .title-top {
            max-height: 24px;
            margin-bottom: 7px;
            line-height: 24px;
            overflow: hidden;
            display: flex;
            .title-main {
              font-size: 17px;
              color: #333;
              font-weight: 700;
              padding-right: 5px;
              flex-shrink: 1;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
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
          top: 0;
          bottom: 0;
          height: 27px;
          margin: auto;

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
        }
      }
    }
  }

}
</style>
