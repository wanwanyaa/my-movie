<template>
  <div class="my-detail">
    <van-nav-bar
      :title="detailMovieList.nm"
      left-arrow
      @click-left="onClickLeft1"
    />
    <div class="detail-box">
      <div class="movie-d">
        <div class="movie-filter"></div>
        <div class="poster-bg"></div>
        <div class="detail-m">
          <div class="de-left">
            <img :src="imgurl" alt="">
          </div>
          <div class="de-right">
            <div class="title-m">{{detailMovieList.nm}}</div>
            <div class="title-en-m">{{detailMovieList.enm}}</div>
            <div class="wish-m">
              <span>{{detailMovieList.watched}}人想看</span>
            </div>
            <div class="film-type">
              <span>{{detailMovieList.cat}} </span>
              <div class="type-g" v-show="detailMovieList.version =='v3d imax'">
                <img style="width: 42px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=" alt="">
              </div>
            </div>
            <div class="address-m">{{detailMovieList.src}}/{{detailMovieList.episodeDur}}分钟</div>
            <div class="data-m">{{detailMovieList.pubDesc}}</div>
          </div>
        </div>
      </div>
      <van-tabs :ellipsis="false" :line-width="100" :line-height="2" @click="onClick">
        <van-tab v-for="(val,key,i) in showdateList.dates" :key="i" :title="val.date">
          <introduce />
          <div class="file-list">
            <Adresscinema2 />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import introduce from '@/components/introduce.vue'
import Adresscinema2 from '@/components/Adresscinema2.vue'
import { mapMutations, mapState, mapActions } from 'vuex'
import { setTimeout } from 'timers';
export default {
  computed: {
    ...mapState('cinema', [
      'detailsList',
      'showdateList',
      'detailMovieList',
      'imgurl'
    ])
  },
  components: {
    introduce,
    Adresscinema2
  },
  methods: {
    ...mapMutations ('cinema', [
      'setday',
      'setfilmId'
    ]),
    ...mapActions ('cinema', [
      'getcinemafilmList',
      'getcinemafilmList2'
    ]),
    onClick (index, title) {
      this.setday(title)
      this.getcinemafilmList()
    },
    onClickLeft1 () {
      this.$router.push({ path: '/films/hotPlaying' })
    }
  },
  created () {
    this.setfilmId(this.$route.params.filmId - 0)
    this.getcinemafilmList()
    this.getcinemafilmList2()
  },
  mounted () {
    setTimeout(x=>{
      this.onClick(0,this.showdateList.dates[0].date)
    },800)
  }
}
</script>

<style lang="less">
  .my-detail{
    .file-list{
      height:345px;
      width: 100%;
      overflow: auto;
    }
    .van-nav-bar{
      height:50px;
      background: #e54847;
      .van-icon-arrow-left{
        color: white;
        font-size: 24px;
      }
      .van-nav-bar__title{
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .detail-box{
      .movie-d{
        height: 188px;
        position: relative;
        cursor: pointer;
        .movie-filter{
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          background-color: #333;
        }
        .poster-bg{
          background-image: url(//p0.meituan.net/71.100/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg);
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          position: absolute;
          -webkit-filter: blur(1.2rem);
          filter: blur(1.2rem);
          background-size: cover;
          background-repeat: no-repeat;
          opacity: .55;
        }
        .detail-m{
          height: 150px;
          padding: 19px 30px 19px 15px;
          display: flex;
          .de-left{
            img{
              display: block;
              width: 110px;
              height: 150px;
              box-sizing: border-box;
            }
          }
          .de-right{
            flex: 1;
            overflow-x: hidden;
            margin-left: 12.5px;
            line-height: 1;
            color: #fff;
            // background:white;
            .title-m{
              font-size: 20px;
              margin-top: 2px;
              font-weight: 700;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            .title-en-m{
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: .8;
            }
            .wish-m{
              font-size: 14px;
              font-weight: 700;
              color: #fc0;
              margin-top: 11px;
            }
            .film-type{
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: .8;
              .type-g{
                display: inline-block;
                width: 42px;
                opacity: .85;
                img{
                  display: block;
                  width: 42px;
                }
              }
            }
            .address-m{
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: .8;
            }
            .data-m{
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: .8;
            }
          }
        }
      }
      .van-tabs__nav{
        .van-tab--complete{
          width: 115px;
          line-height: 43px;
          margin-left: 4.5px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>
