// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/public.css';
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from "./axios";
import store from "./store";

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(Axios.plugin);

//# 全局守卫
router.beforeEach((to, from, next) => {
  // ...
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
