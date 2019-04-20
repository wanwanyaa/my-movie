<template>
<div class="Main">
    <ul class="main">
      <!--购买-->
      <li class="main-li">
        <div class="avatar">
          <img src="https://p1.meituan.net/128.180/movie/c63849c7a9de360a7b192bc322792a111705236.jpg" alt="">
        </div>
        <div class="avatar-right">
          <div class="title">
            <div class="title-top">
              <div class="title-main">反贪风暴4</div>
            </div>

            <div class="title-bot">
              <div class="score">
                <span class="score-line">观众评 </span>
                <span class="grade">9.9</span>
              </div>
              <div class="actor">主演:王威,俞文涛,黄先元</div>
              <div class="show-info">今天1888家影院放映18888场</div>
            </div>
          </div>
          <div class="shop">
            <div class="shop-main">
             购买
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>


</script>
<style lang="less">
*{
  margin: 0;padding:0;
}
.Main{
  .main{
    .main-li{
      padding-left: 15px;
      background: #fff;
      .avatar{
            width: 64px;
            height: 90px;
            position: relative;
            margin-top: 12px;
            float: left;
        img{
          width: 100%;
          height: 90px;
        }
      }
      .avatar-right{
          padding: 12px 14px 12px 0;
          margin-left: 74px;
          height: 90px;
          max-height: 90px;
          position: relative;
          border-bottom:1px solid #ccc;
          .title{
              padding-right: 5px;
              margin-right: 48px;
              overflow: hidden;
              .title-top{
                max-height: 24px;
                margin-bottom: 7px;
                line-height: 24px;
                overflow: hidden;
                display: flex;
                .title-main{
                  font-size: 17px;
                  color: #333;
                  font-weight: 700;
                  padding-right: 5px;
                  flex-shrink: 1;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
                .version{
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
              .title-bot{
                box-sizing: border-box;
                line-height: 1;
                overflow: hidden;
                .score{
                    font-size: 13px;
                    color: #666;
                    .grade{
                      font-weight: 700;
                      color: #faaf00;
                      font-size: 15px;
                      white-space: nowrap;
                      line-height: 1;
                    }
                }
                .actor{
                  font-size: 13px;
                  color: #666;
                  margin-top: 6px;
                  line-height: 15px;
                  white-space: nowrap;
                }
                .show-info{
                  font-size: 13px;
                  color: #666;
                  margin-top: 6px;
                  line-height: 15px;
                }
              }
          }
          .shop{
            font-size: 12px;
            position: absolute;
            right: 14px;
            top: 0;
            bottom: 0;
            height: 27px;
            margin: auto;

            .shop-main{
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #f03d37;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
          }
        }
      }
    }
  }
}


</style>
