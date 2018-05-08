<template>
  <div id="app">
    <div class="footer">
      <div class="footer-item"><a href="#">推荐</a></div>
      <div class="footer-item"><a href="#">书籍</a></div>
      <div class="footer-item"><a href="#">电视</a></div>
      <div class="footer-item"><a href="#">音乐</a></div>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    min-height: 50px;
    // position: fixed;
    top: 10px;
    .footer-item {
      display: table-cell;
      width: 1%;
      text-align: center;
    }
  }
</style>
