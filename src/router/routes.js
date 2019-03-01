import VueRouter from 'vue-router'
import Welcome from '../pages/Welcome'
import MainPage from '../pages/MainPage'
import Settings from '../pages/Settings'


export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: Welcome
    },
    {
      path: '/main', // localhost:8080/main
      component: MainPage
    },
    {
      path: '/settings', // localhost:8080/settings
      component: Settings
    }
  ],
  mode: 'history'
});