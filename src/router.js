import Vue from 'vue'
import Router from 'vue-router'
import MainBody from './components/MainBody/MainBody.vue'

Vue.use(Router);

export default new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/home',
      name: "mainbody",
      component: MainBody,
    }
  ]
});

