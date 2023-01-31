import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import userStore from './stores/userStore.js'
import adminStore from './stores/adminStore'
import VueRouter from 'vue-router'
import router from '../src/routerConfig/routerConfig.js'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  modules: {
    userStore,
    adminStore
  }
}
)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
