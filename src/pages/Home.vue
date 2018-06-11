<template>
  <div style="margin-bottom: 45px;">
    <!-- <div>
      <x-header :left-options="{showBack: false}">推荐</x-header>
    </div> -->
    
    <div class="search">
      <search
        @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          auto-scroll-to-top
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"></search>
    </div>
    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <div class="recommended">
      <group-title slot="title">书籍推荐<span style="float: right">更多</span></group-title>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item  v-for="i in 4" :key="i">
          <img slot="icon" src="../assets/images/books.jpg">
          <span slot="label">史记呀啊啊啊</span>
        </grid-item>
      </grid>

      <group-title slot="title">电视推荐<span style="float: right">更多</span></group-title>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item  v-for="i in 4" :key="i">
          <img slot="icon" src="../assets/images/books.jpg">
          <span slot="label">来自星星的你</span>
        </grid-item>
      </grid>

      <group-title slot="title">电影推荐<span style="float: right">更多</span></group-title>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item  v-for="i in 4" :key="i">
          <img slot="icon" src="../assets/images/books.jpg">
          <span slot="label">后来的我们</span>
        </grid-item>
      </grid>

      <group-title slot="title">音乐推荐<span style="float: right">更多</span></group-title>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item  v-for="i in 4" :key="i">
          <img slot="icon" src="../assets/images/books.jpg">
          <span slot="label">异类</span>
        </grid-item>
      </grid>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem, GroupTitle, Search, XHeader, Swiper,
        SwiperItem } from 'vux';
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
export default {
  name: 'Home',
  components: {
    Grid,
    GridItem,
    GroupTitle,
    Search,
    XHeader,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      value: '',
      results: [],
      demo01_list: baseList,
      demo01_index: 0,
    }
  },
  methods: {
    resultClick(){},
    getResult() {

    }
  }
}
</script>
<style lang="less" scoped>
  .search {  
    min-height: 50px;
  }
</style>
