import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//css
import 'assets/css/reset.css'
import 'assets/css/iconfont.css'

//js(解决移动端300ms延迟问题) 
import fastClick from 'fastclick'
fastClick.attach(document.body);

//swiper组件
import {
  Swiper as SwiperClass,
  Pagination,   //使用那个组件就在这里面添加
  Mousewheel,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import 'swiper/swiper-bundle.css'
//这里面对应上面进行添加  
SwiperClass.use([Pagination, Mousewheel, Autoplay,Navigation,EffectFade]);
Vue.use(getAwesomeSwiper(SwiperClass));


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
