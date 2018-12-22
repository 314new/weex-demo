<template>
  <div class="footer-bar">
      <text @click="goto" class="buton">跳转</text>
  </div>
</template>

<script>
  export default {
    name: 'footerbar',
    components: {},
    data () {
      return {}
    },
    methods: {
      goto() {
        this.$router.push('home');
      }
    }
  }
</script>

<style scoped>
  .footer-bar {
      height: 90px;
      width: 750px;
      align-items: center;
      justify-content: center;
      background-color: #512DA8;
  }
  .buton {
    height: 80px;
    width: 150px;
    background-color: red; 
  }
</style>
