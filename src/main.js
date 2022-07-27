import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router';

Vue.config.productionTip = false
import { Tabbar, TabbarItem, Search, Swipe, SwipeItem ,Image,Grid, GridItem ,Icon} from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);

new Vue({
  // 注册路由
  router,
  render: h => h(App),
}).$mount('#app')
