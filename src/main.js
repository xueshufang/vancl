// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//import  from ""                                                                                                                                                                                                                                                                                                                                                                                          
import "@/style/usage/app.scss"
import  './modules/directives'
import router from './router'
// 懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
Vue.config.productionTip = false

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
                                 