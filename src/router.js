import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Rentals from './components/Rentals.vue'
import RentalFlow from './views/rentals/RentalFlow.vue'
import ReturnFlow from './views/returns/ReturnFlow.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/rentals',
          name: 'rentals',
          component: Rentals
        },
        {
          path: '/rent',
          name: 'rent',
          component: RentalFlow
        },
        {
          path: '/return',
          name: 'return',
          component: ReturnFlow
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ]
    }
  ]
})
