import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins'
import './components'

Vue.config.productionTip = false

/* new Vue({
  router,
  render: h => h(App),
}).$mount('#app') */


 new Vue({
   el: '#app',
   router,
   ...App
 })