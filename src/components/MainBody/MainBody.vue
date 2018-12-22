<template>
  <div class="main-body">
    <div v-for="(item, index) in items" :key="index" class="item">
        <text class="item-text">{{ item }}</text>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainbody',
    data () {
      return {
        items: ["要闻","财经","娱乐","体育","房产","科技","汽车","数码","时尚","星座","游戏","文化","社会","教育"]
      }
    },
    methods: {
      
    }
  }
</script>

<style>
  .main-body {
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    width: 750px;
    height: 200px;
  }
  .item {
      width: 187.5px;
      padding: 10px;
  }
  .item-text {
      font-size: 26px;
      line-height: 150px;
      text-align: center;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.8);
      color: rgba(255, 255, 255, 0.8);
  }
</style>
