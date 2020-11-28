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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
