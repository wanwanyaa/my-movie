<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="搜电影、搜影院"
        show-action
        @cancel="onCancel"
        @search="onSearch"
        background="#f5f5f5"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onCancel() { // 点击取消事件

    },
    onSearch() {  // 回车事件

    }
  },
};

</script>

<style scoped lang="less">
.van-search{
  height: 47px;
}
.van-cell,.van-search__content{
  background: white;
  font-size: 13px;
  color: #777777;
  height: 30px;

}
.van-search__content{
  border: 1px solid #e6e6e6;
  border-radius: 5px;
}
.van-search__action{
  color:#f03d37;
}
</style>
