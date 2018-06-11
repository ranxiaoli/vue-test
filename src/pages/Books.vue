<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">小说</tab-item>
      <tab-item @on-item-click="onItemClick">历史</tab-item>
      <tab-item @on-item-click="onItemClick">文学</tab-item>
      <tab-item @on-item-click="onItemClick">动漫</tab-item>
      <tab-item @on-item-click="onItemClick">传记</tab-item>
      <tab-item @on-item-click="onItemClick">励志</tab-item>
      <tab-item @on-item-click="onItemClick">艺术</tab-item>
    </tab>
    <div>
      <panel :list="list" @on-img-error="onImgError">

      </panel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data () {
    return {
      msg: 'this books page',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    },
    onItemClick(){

    }
  },
}
</script>

<style lang="less">

</style>
