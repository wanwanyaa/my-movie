<template>
  <div class="my-films">
    <div class="my-title">
      <p>猫眼电影</p>
    </div>
    <van-nav-bar >
      <span class="address" slot="left" >深圳 <i class="iconfont icon-sanjiaoxia"></i></span>
      <van-tabs v-model="active" slot="title" title-active-color="#ef4238" @click="changeType">
        <van-tab title="正在热映">内容 1</van-tab>
        <van-tab title="即将上映">内容 2</van-tab>
      </van-tabs>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    let active = this.$route.params.filmType === 'hotPlaying' ? 0 : 1
    return {
      active: active
    }
  },
  methods: {
    ...mapActions('film', [
      'getOneFilmList',
      'getNextFilmList'
    ]),
    changeType(index, active){
      let filmType = index === 0 ? 'hotPlaying' : 'shownSoon'
      this.$router.replace({
        name: 'films',
        params: {
          filmType
        }
      })
      console.log(index)
    }
  },
  created () {
    this.getNextFilmList()
    console.log(this.$route)
  }
}
</script>
<style lang="less">
.my-films{
  .my-title{
    height:50px;
    font-size: 18px;
    background: #e54847;
    color: white;
    text-align: center;
    line-height: 50px;
  }
  .address{
    font-size: 15px;
    color:#666;
    .iconfont{
      font-size: 12px!important;
    }
  }
  .van-tabs__nav,.van-tab--active{
    font-size: 15px;
    font-weight: 700;
  }
  .van-icon-search{
    font-size: 25px;
    color: #e54847
  }
}
</style>

