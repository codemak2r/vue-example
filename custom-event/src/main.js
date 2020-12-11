import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma'
import 'bulma/css/bulma.css'
 

Vue.config.productionTip = false
Vue.use(bulma)


new Vue({
  render: h => h(App),
}).$mount('#app')
