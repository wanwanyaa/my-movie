<template>
  <section class="Cinema">
    <div class="Cinema-list" v-for="item in detailsList" :key="item.id">
      <div class="Cinema-title">
        <div class="Cinema-head">
          <span>{{ item.nm }}</span>
          <span class="Cinema-head2">
            <span class="Cinema-price">{{ item.sellPrice }}</span>
            <span class="Cinema-q">元起</span>
          </span>
        </div>
        <div class="Cinema-address">
          <span class="adress-item">{{ item.addr }}</span>
          <span class="Cinema-distance">{{ item.distance }}</span>
        </div>
        <div class="Cinema-block">
          <div class="green-c com-block" v-show="item.tag.allowRefund === 1">退</div>
          <div class="green-c com-block" v-show="item.tag.endorse">改签</div>
          <div class="yellow-c com-block" v-show="item.tag.snack === 1">小吃</div>
          <div class="yellow-c com-block" v-show="item.tag.vipTag === '折扣卡'">折扣卡</div>
          <div class="green-c com-block" v-for="(u , i) in item.tag.hallType" :key="i">{{ u }}</div>
        </div>
        <div class="Cinema-card" >
          <div class="card-title" v-show="item.promotion.cardPromotionTag ">
            <img v-show="item.promotion.cardPromotionTag " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
            <div class="card-sale">{{ item.promotion.cardPromotionTag }}</div>
          </div>
        </div>
        <div class=Cinema-time>
          <span>近期场次</span>
          <span>{{item.showTimes}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('cinema', [
      'detailsList'
    ])
  },
  methods: {
    ...mapActions('cinema', [
      'getcinemafilmList'
    ])
  },
  created () {
    this.getcinemafilmList()
  }
}
</script>

<style lang="less">
.green-c {
  color: #589daf;
  border: 1px solid #589daf;
}
.yellow-c {
  color: #f90;
  border: 1px solid #f90;
}
.Cinema {
  .Cinema-list {
    width: 100%;
    box-sizing: border-box;
    padding: 13px 15px 0;
    .Cinema-title {
      border-bottom: 1px solid #e0e0e0;
      box-sizing: border-box;
      padding-bottom:10px;
      .Cinema-head {
        height: 23px;
        line-height: 23px;
        font-size: 16px;
        color: #000;
        margin-bottom: 2px;
        span{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .Cinema-head2 {
          margin-left: 5px;
          padding-top: 9px;
          padding-left: 3px;
          .Cinema-price {
            color: #f03d37;
            font-size: 18px;
          }
          .Cinema-q {
            font-size: 11px;
            color: #f03d37;
            margin-left: 3px;
          }
        }
      }
      .Cinema-address {
        margin-bottom: 2px;
        width:100%;
        overflow: hidden;
        display:flex;
        justify-content: space-between;
        .adress-item {
          font-size: 13px;
          color: #666;
          display: block;
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .Cinema-distance {
          margin-left:10px;
          font-size: 13px;
          color: #666;
          display: block;
        }
      }
      .Cinema-block {
        margin-bottom: 5px;
        .com-block {
          position: relative;
          display: inline-block;
          padding: 0 3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          font-size: 10px;
          margin-right:5px;
        }
      }
      .Cinema-card{
        .card-title{
          display:flex;
          height:14px;
          img{
            height:100%;
          }
          .card-sale{
            margin-left:6px;
            font-size: 11px;
            line-height:14px;
            color: #999;
          }
        }
      }
      .Cinema-time{
        height:25px;
        line-height:25px;
        width:100%;
        span{
          font-size: 12px;
          color: #999;
          padding: 0 15px 0 0;
        }
      }
    }
  }
}
</style>
