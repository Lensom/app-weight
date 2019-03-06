import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/routes'
import store from './store'

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



// Tasks

// 1. Cookies login n password
// 2. Methods to Vuex
// 3. Modal windows
// 4. Close button for drawer
// 5. Adaptive drawer
// 6. Design
// 7. Graph


// methods - mutations
// async methods (axios, Запрос на сервер) - actions
// data - state
// computed - getters


