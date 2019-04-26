<template>
  <ul class="main">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :offset="50"
      @load="onLoad"
    >
      <!--购买-->
      <router-link
        class="main-li"
        v-for="item in filmList"
        :key="item.id"
        tag="li"
        :to="{ name: 'details', params: { filmId: item.id } }"
      >
        <div class="avatar">
          <img :src="item.img" alt>
        </div>
        <div class="avatar-right">
          <div class="title">
            <div class="title-top">
              <div class="title-main">{{item.nm}}</div>
            </div>

            <div class="title-bot">
              <div class="score">
                <span class="score-line">观众评</span>
                <span class="grade">{{item.sc}}</span>
              </div>
              <div class="actor">主演: {{item.star}}</div>
              <div class="show-info">{{item.showInfo}}</div>
            </div>
          </div>
          <div class="shop">
            <div class="shop-main shop-red" v-if="item.showst === 3">购票</div>
            <div class="shop-main shop-yellow" v-if="item.showst === 1">想看</div>
            <div class="shop-main" v-if="item.showst === 4">预售</div>
          </div>
        </div>
      </router-link>
    </van-list>
  </ul>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      flag: true
    };
  },
  computed: {
    ...mapState("film", ["filmList"]),
    ...mapGetters("film", ["finished"]),
    loading: {
      get() {
        return this.$store.state.film.loading;
      },
      set(value) {
        return this.$store.commit("film/setLoading", value);
      }
    }
  },
  methods: {
    ...mapActions("film", ["getOneFilmList", "getNextFilmList"]),
    onLoad() {
      if (this.flag === true) {
        this.getOneFilmList();
        this.flag = false;
      } else {
        this.getNextFilmList();
      }
    }
  }
};
</script>
<style lang="less">
.main {
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
  .main-li {
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
          .version {
            width: 43px;
            background-size: contain;
            background-repeat: no-repeat;
            height: 14px;
            width: 17px;
            display: inline-block;
            margin-top: 5px;
            -webkit-box-flex: 0;
            flex: 0 0 auto;
            margin-right: 3px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAcCAYAAAD7lUj9AAAAAXNSR…pZ7dAhhqXuv1bz4Acb/GsYUfmFfmI0dGDh/rBU6SdGfwHhesSi+VnXOAAAAABJRU5ErkJggg);
          }
        }
        .title-bot {
          box-sizing: border-box;
          line-height: 1;
          overflow: hidden;
          text-align: left;
          .score {
            font-size: 13px;
            color: #666;
            .grade {
              font-weight: 700;
              color: #faaf00;
              font-size: 15px;
              white-space: nowrap;
              line-height: 1;
            }
          }
          .actor {
            font-size: 13px;
            color: #666;
            margin-top: 6px;
            line-height: 15px;
            white-space: nowrap;
            overflow: hidden;
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
        .shop-red {
          background-color: #ef4238;
        }
        .shop-yellow {
          background-color: #faaf00;
        }
      }
    }
  }
}
</style>
