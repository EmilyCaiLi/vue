// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios/axios'
import Cookie from 'vue-cookies'
import Moment from 'vue-moment'
import 'mint-ui/lib/style.min.css'
import Mintui from 'mint-ui'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Cookie)
Vue.use(Moment)
Vue.use(Mintui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
