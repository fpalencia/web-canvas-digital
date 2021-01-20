import Vue from 'vue'
import App from './App.vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'

Vue.config.productionTip = false
Vue.use(KsVueScrollmagic)
new Vue({
  render: h => h(App),
}).$mount('#app')
