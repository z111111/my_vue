import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as  filters from './filters'
import directives from "./directives"
import './utils/component'
Vue.use(directives);
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

 /* eslint-disable */
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
