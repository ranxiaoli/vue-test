<template>
  <div>
    <!-- <div>
      <x-header :left-options="{showBack: false}">推荐</x-header>
    </div> -->
    <div class="search">
      <search
        @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          position='relative'
          auto-scroll-to-top
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"></search>
    </div>
    <div class="recommended">
      <group-title>书籍推荐</group-title>
    <grid :show-lr-borders="false">
      <grid-item  v-for="i in 4" :key="i">
        <img slot="icon" src="../assets/images/books.jpg">
      </grid-item>
    </grid>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem, Search, XHeader  } from 'vux'
export default {
  name: 'Home',
  components: {
    Grid,
    GridItem,
    Search,
    XHeader
  },
  data () {
    return {
      value: '',
      results: [],
    }
  }
}
</script>
<style lang="less" scoped>
  .search {  
    min-height: 50px;
  }
</style>
