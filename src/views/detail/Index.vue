<template>
  <div class="my-detail">
    <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="detail-box">
      <div class="movie-d">
        <div class="movie-filter"></div>
        <div class="poster-bg"></div>
        <div class="detail-m">
          <div class="de-left">
            <img src="//p0.meituan.net/148.208/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg" alt="">
          </div>
          <div class="de-right">
            <div class="title-m">复仇者联盟4</div>
            <div class="title-en-m">Avengers: Endgame</div>
            <div class="wish-m">
              <span>182456人想看</span>
            </div>
            <div class="film-type">
              <span>动作,冒险,奇幻 </span>
              <div class="type-g">
                <img style="width: 42px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=" alt="">
              </div>
            </div>
            <div class="address-m">美国/181分钟</div>
            <div class="data-m">2019-04-24大陆上映</div>
          </div>
        </div>
      </div>
      <van-tabs :ellipsis="false" :line-width="100" :line-height="2">
        <van-tab title="今天4月23日">内容 1</van-tab>
        <van-tab title="明天4月25日">内容 2</van-tab>
        <van-tab title="后天4月26日">内容 3</van-tab>
        <van-tab title="周五4月26日">内容 4</van-tab>
        <van-tab title="周五4月26日">内容 4</van-tab>
        <van-tab title="周五4月26日">内容 4</van-tab>
        <van-tab title="周五4月26日">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push({ path:'/films/hotPlaying' })
    }
  }
}
</script>

<style lang="less">
  .my-detail{
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
