import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/products/products'
import Users from '@/components/clients/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },    
  ]
})
