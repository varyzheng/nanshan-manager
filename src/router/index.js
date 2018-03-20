import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import admin from '@/components/admin'
import addUser from '@/components/addUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/admin/user/add',
      name: 'addUser',
      component: addUser
    }
  ]
})
