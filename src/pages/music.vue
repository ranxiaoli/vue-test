<template>
    <div>{{msg}}
      <div><span @click="shield()">打开</span><span @click="cancelShield">关闭</span></div>
      <div class="test" ref="test">

      </div>
      <div class="log-window" ref="log_window">

      </div>
    </div>
</template>

<script>
export default {
  name: 'Music',
  data () {
    return {
      msg: 'this is music page'
    }
  },
  methods: {
    shield () {
      let test = this.$refs.test;
      let log_window = this.$refs.log_window;
      test.style.display = 'block';
      log_window.style.display = 'block';
    },
    cancelShield () {
      let test = this.$refs.test;
      let log_window = this.$refs.log_window;
      test.style.display = 'none';
      log_window.style.display = 'none';
    }
  }
}
</script>

<style lang="less" scoped>
  .test {
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0.3;
    display: none;
  }
  .log-window {
    width: 200px;
    height: 200px;
    background: red;
    margin: auto;
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
  }
</style>
