<template>
  <div>
    <van-tabs
      v-model="active"
      title-active-color="#df2d2d"
      :line-width= 175
      :line-height= 4
      :title-inactive-boder="0"
    >
      <van-tab title="美团账号登录"><Login /></van-tab>
      <van-tab title="手机验证登录"><telnum /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Login from '@/components/Center/login.vue'
import Telnum from '@/components/Center/telnum.vue'
export default {
  data() {
    return {
      active: 0
    };
  },
  components:{
    Login,
    Telnum
  }
};
</script>

<style lang="less">
.van-tabs__line {
  background: #df2d2d;
  border-radius: 0;
  height: 4px;
}
</style>