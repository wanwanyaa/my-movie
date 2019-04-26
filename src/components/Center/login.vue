<template>
  <div>
    <van-cell-group>
      <!--账号-->
      <van-field
        v-model="usernames"
        clearable
        border
        placeholder="账户名/手机号/Email"
      />
      <!--密码-->
      <van-field
        v-model="passwords"
        type="password"
        placeholder="请输入你的密码"/>
    </van-cell-group>
      <!--登录按钮-->
      <div class="Btn">
        <button class="login" @click="fn">登录</button>
      </div>
      <ul class="subline">
        <li><a href="">立即注册</a></li>
        <li class="subline-li"><a href="">找回密码</a></li>
      </ul>
      <div class="tel">
        © 猫眼电影 客服电话：
        <span>400-670-5335</span>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  computed: {
  ...mapState('center',[
    'username',
    'password'
  ])},
  data() {
    return {
      active: 0,
      usernames: '123456',
      passwords: '123456',
      show: false
    };
  },
  methods: {
    fn () {
      if (this.username == this.usernames && this.password == this.passwords) {
        this.$router.push('/login')
        localStorage.value = 'success'
      }
    }
  },
};
</script>

<style lang="less">
.Btn{
    margin:  0 10px;
    height: 47px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 1;
    color: #333;
    margin-top: 6px;
    .login{
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      width: 100%;
      background-color: #df2d2d;
      border: 0;
      cursor: pointer;
      color: white;
      border-radius: 2px;

    }
}
body{
  background-color: #f8f8f8;;
}
.subline{
  height: 28px;
  padding: 0 10px;
  margin-top: 6px;
  li{
    width:112px;
    height: 28px;
    display: inline-block;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1;
    color: #333;
    box-sizing: border-box;
    a{
    color: #df2d2d;
    text-decoration: none;
    outline: 0;
    }
  }
  .subline-li{
    text-align: right;
    float: right!important;
    padding-top: 6px;
  }
}
.tel{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1;
    color: #333;
    text-align: center;
    margin-top: 8px;
    span{
      color: #df2d2d;
    }
}
</style>