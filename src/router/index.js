import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Time from '@/components/Time'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/time',
      component: Time
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
