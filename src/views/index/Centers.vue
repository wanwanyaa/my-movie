<template>
      <div>
      <div class="myself">
        <div class="center-top">我的</div>
        <div class="center-top2">
          <img src="https://img.meituan.net/maoyanuser/80cdf9a184d40eb9ecc0e5d170f3e45d11928.png" class="head-icon">
        </div>
        <div class="center-top3"></div>
        <div class="center-top4">
          <div class="title">我的订单</div>
          <div class="list">
            <div class="list-item">
              <div class="zero">
                <img src="http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png" alt="">
              </div>
              <div>电影</div>
            </div>
            <div class="list-item">
              <div class="zero">
                <img src="http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png" alt="">
              </div>
              <div>商城</div>
            </div>
          </div>
        </div>
        <div class="center-top3"></div>
      </div>

      <div class="look">
        <div class="look-div">
          <a href="">
            <span>在线观影</span>
            <div class="da">></div>
          </a>
        </div>
        <div class="look-div lookss">
          <a href="">
            <span>优惠券</span>
            <div class="da">></div>
          </a>
        </div>
        <div class="look-div looks">
          <a href="">
            <span>折扣卡</span>
            <div class="da">></div>
          </a>
        </div>
      </div>
    </div>
</template>
<style lang="less">
.myself{
  .center-top{
    line-height:50.5px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    height:50.5px;
    width:100%;
    color: #fff;
    background: #e54847;
  }
  .center-top2{
    width:100%;
    background-color: #f03d37;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 150px;
    height: 150px;
    overflow: hidden;
    text-align: center;
    img{
      display: inline-block;
      margin-top: 30px;
      width: 60px;
      height: 60px;
      border-radius: 60px;
      border: 3px solid #fff;
    }
  }
  .center-top3{
    height:15px;
    width:100%;
    background-color: #f3f3f3;
  }
  .center-top4{
    height:150px;
    width:100%;
    background-color: #fff;
    padding-top: 6px;
    .title{
      font-size: 15px;
      line-height: 21px;
      height: 21px;
      color: #333;
      text-align:center;
    }
    .list{
      height:115px;
      width:100%;
      display:flex;
      padding-left:37.5px;
      box-sizing: border-box;
      text-align:center;
      .list-item{
        margin-top:10px;
        width:150px;
        height:90px;
        .zero{
          margin-left:54px;
          width:50px;
          height:50px;
          margin-bottom: 8px;
          img{
            width: 42px;
            height: 42px;
          }
        }

      }
    }
  }
}


.look {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  width: 375px;
  height: 132px;
  background: white;
  .look-div {
    width: 360px;
    height: 44px;
    position: relative;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    margin-left: 15px;
    border-bottom: 1px solid #ccc;
    a {
      display: block;
      color: #333;
      padding-right: 16px;
      .da {
      float: right;
      color: #ccc;
      }
    }
  }
  .looks{
    border-bottom: none;
  }
}
</style>
