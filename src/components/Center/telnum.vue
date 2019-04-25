<template>
  <div>
    <van-cell-group>
      <!--号码-->
      <van-field
        v-model="sms"
        center
        clearable
        placeholder="请输入手机号"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>

      <!--验证码-->
      <van-field
        v-model="add"
        type="text"
        placeholder="请输入短信验证码"/>
    </van-cell-group>
      <!--登录按钮-->
      <div class="Btn">
        <button class="login">登录</button>
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


export default {
  data() {
    return {
      active: 0,
      username:'',
      password:'',
      add:'',
      sms:''
    };
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
.van-field__button{
  van-button{
    box-sizing: border-box;
    border: .01rem solid #df2d2d;
    padding: 0.01rem .15rem;
    color: #df2d2d;
    cursor: pointer;
    font-weight: 400;
  }
}
.van-inp{
  background-color: rgb(235, 235, 228);
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
