import Vue from 'vue'
import App from './App.vue'
import apiClient from "./utils"

Vue.config.productionTip = false
Vue.use(apiClient);


new Vue({
  apiClient,
  render: h => h(App),
}).$mount('#app')
