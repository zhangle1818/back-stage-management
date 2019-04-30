import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{ path: '/', redirect: '/admin' },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue'),
      meta: '购物商场',
      children: [
        {
          path: 'goods-list',
          component: () => import(/* webpackChunkName: "goodslist" */ './views/GoodsList.vue'),
          meta: '商品管理'
        },
        {
          path: 'goods-add',
          component: () => import(/* webpackChunkName: "goodslist" */ './views/GoodsAdd.vue'),
          meta: '商品添加'
        },
        {
          path: 'category-list',
          component: () => import(/* webpackChunkName: "goodslist" */ './views/CategoryList.vue'),
          meta: '栏目管理'
        },
        {
          path: 'category-add',
          component: () => import(/* webpackChunkName: "goodslist" */ './views/categoryAdd.vue'),
          meta: '栏目管理.添加'
        },
        {
          path: 'account-list',
          component: () => import(/* webpackChunkName: "goodslist" */ './views/AccountList.vue'),
          meta: '会员管理'
        },
        {
          path: 'order-list',
          component: () => import(/* webpackChunkName: "goodslist" */ './views/OrderList.vue'),
          meta: '订单管理'
        }
      ]
    },
    {
      path: '/login',
      mame: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
      meta: '登陆'
    }
  ]
})
