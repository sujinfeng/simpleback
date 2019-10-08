import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

if (sessionStorage.getItem('token')) {
  store.commit('set_token', sessionStorage.getItem('token'))
}

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
       requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      redirect: '/a',
      component: Home,
      children: [{
        path: '/a',
        name: 'a',
        component: () => import('./views/a.vue'),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: '首页',
          requireAuth: true
        }
      }, {
        path: '/b',
        name: 'b',
        component: () => import('./views/b.vue'),
        meta: {
          keepAlive: false, // 不需要被缓存
          title: 'b模块',
          requireAuth: true
        }
      }]
    },
    {
      path: '/about',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})

export default router
