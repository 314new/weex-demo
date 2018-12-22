<template>
  <div class="wrapper" id="app">
      <header-bar />
      <div class="main">
        <text @click="goto" class="buton">跳转</text>
        <router-view id='page_root' class="main"></router-view>
      </div>
      <footer-bar />
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar/HeaderBar.vue'
  import FooterBar from './components/FooterBar/FooterBar.vue'
  import router from './router';
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  export default {
    name: 'index',
    router: router,
    components: {
      HeaderBar,
      FooterBar
    },
    data () {
      return {
        
      }
    },
    methods: {
      goto() {
        this.$router.push('home');
      }
    }
  }
</script>

<style>
  .wrapper {
    flex: 1;
    width: 750px;
  }
  .main {
      flex: 1;
      flex-direction: row;
      align-items: flex-start;
      width: 750px;
  }
  .buton {
    width: 200px;
    height: 200px;
    background-color: red;
    color: #fff;
  }
</style>
