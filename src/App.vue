<template>
  <div id="app">
    <router-view></router-view>
    <div class="bottom-items" >
      <tab bar-position='bottom' :line-width=0>
        <tab-item @on-item-click="handler('home')" selected>推荐</tab-item>
        <tab-item @on-item-click="handler('books')">书籍</tab-item>
        <tab-item @on-item-click="handler('television')">电视</tab-item>
        <tab-item @on-item-click="handler('music')">音乐</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, XHeader } from 'vux'
export default {
  name: 'App',
  components: {
    Tab,
    TabItem,
    XHeader
  },
  methods: {
    handler(url){
      this.$router.push(url);
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  .bottom-items {
    width: 100%;
    // min-height: 50px;
    position: fixed;
    bottom: 0;
    // .item {
    //   display: table-cell;
    //   width: 1%;
    //   text-align: center;
    // }
  }
</style>
