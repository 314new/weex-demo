<template>
  <div class="wrapper">
      <header-bar />
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar/HeaderBar';
  export default {
    components: {
      HeaderBar
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;
  }
</style>
