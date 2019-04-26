<template>
  <div class="my-home">
    <router-view></router-view>
    <van-tabbar  v-model="active" active-color="#f03d37">
      <van-tabbar-item :to="{ name: 'films', params: { filmType: 'hotPlaying' } }" icon=" iconfont icon-dianying ">电影</van-tabbar-item>
      <van-tabbar-item :to="{ name: 'cinemas' }" icon=" iconfont icon-yingyuana ">影院</van-tabbar-item>
      <van-tabbar-item @click="login" icon=" iconfont icon-tubiaolunkuo-">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    let tabNum = this.$route.meta.tabNum
    return {
      active: tabNum
    }
  },
  methods: {
    login(){
      if(localStorage.value == 'success'){
          this.$router.push('/login')
      }else {
          this.$router.push('/centers')
      }
    }
  },
}
</script>

<style lang="less">
@import '~@/style/reset.css';
.my-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .van-hairline--top-bottom{
    .iconfont{
      font-size: 25px!important;
    }
  }
}
</style>

