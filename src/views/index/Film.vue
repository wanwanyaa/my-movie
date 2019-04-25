<template>
  <div class="my-films">
    <div class="my-title">
      <p>猫眼电影</p>
    </div>
    <van-tabs v-model="active" @click="changeType">
      <van-tab disabled>
        <span class="address" slot="title" @click="checkcity()">{{curCity}} <i class="iconfont icon-sanjiaoxia"></i></span>
      </van-tab>
      <van-tab title="正在热映">
        <HotShowing/>
      </van-tab>
      <van-tab title="即将上映">
        <Advance/>
      </van-tab>
      <van-tab disabled><van-icon name="search" slot="title" @click="gosearch()" /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HotShowing from '@/components/HotShowing.vue'
import Advance from '@/components/Advance.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    let active = this.$route.params.filmType === 'hotPlaying' ? 1 : 2
    return {
      active: active
    }
  },
  computed: {
    ...mapState('city', [
      'curCity'
    ])
  },
  components: {
    HotShowing,
    Advance
  },
  methods: {
    ...mapActions('cinema', [
      'getcinnavList'
    ]),
    gosearch() {
      setTimeout(() => {
        this.$router.push({ path: '/search' })
      }, 200);
    },
    changeType (index, active) {
      let filmType = index === 1 ? 'hotPlaying' : 'shownSoon'
      this.$router.replace({
        name: 'films',
        params: {
          filmType
        }
      })
    },
    checkcity () {
      setTimeout(() => {
        this.$router.push({ path: '/city' })
      }, 200);
    }
  },
  created () {
    this.getcinnavList();
  }
}
</script>
<style lang="less">
.my-films{
  flex: 1;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  .my-title{
    flex-shrink: 0;
    width:375px;
    height:50px;
    font-size: 18px;
    background: #e54847;
    color: white;
    text-align: center;
    line-height: 50px;
  }
  .address{
    font-size: 15px;
    font-weight: 500;
    color:#666;
    .iconfont{
      font-size: 12px!important;
    }
  }
  .van-icon-search{
    font-size: 20px;
    color: #e54847;
    font-weight:700;
    line-height:44px;
  }
  .van-tabs__nav,.van-tab--active{
    font-size: 15px;
    font-weight: 700;
  }
  .van-tabs__content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .van-tab__pane {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  // .van-tabs__content{
  //   width:375px;
  //   position: absolute;
  //   top:94px;
  //   overflow-y: scroll;
  // }
  // .my-title {
  //   position: fixed;
  //   top:0;
  //   z-index: 999;
  // }
  // .van-hairline--top-bottom{
  //   position: fixed;
  //   top: 50px;
  //   width:375px;
  // }
  .van-tabs {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>
