import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
const vmH = new Vue({
  data: {
    name: 'lisa'
  }
})
console.log(vmH.name)
vmH.name = 'lili'
console.log(vmH._data.name)
