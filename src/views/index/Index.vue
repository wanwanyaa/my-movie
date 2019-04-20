<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon=" iconfont icon-dianying ">标签</van-tabbar-item>
      <van-tabbar-item icon=" iconfont icon-yingyuana ">标签</van-tabbar-item>
      <van-tabbar-item icon=" iconfont icon-tubiaolunkuo-">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 1
    }
  }
}
</script>


