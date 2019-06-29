import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginPage from '@/components/LoginPage'
import SignUp from '@/components/SignUp'
import List from '@/components/List'
import Information from '@/components/MyInfo/Information'
import Basket from '@/components/MyInfo/Basket'
import Show from '@/components/Show'
import store from '../vuex/store'
Vue.use(Router)
const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    alert('이미 로그인을 하였습니다.')
    next('/')
  } else {
    next()
  }
}
/*
const only = (to, from, next) => {
  if (store.state.isLogin === false) {
    alert('로그인을 하세요.')
    next('/login')
  } else {
    next()
  }
}
*/
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: rejectAuthUser,
    component: LoginPage
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/mypage',
    name: 'Information',
    // beforeEnter: only,
    component: Information
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/list/show/:id',
    name: 'show',
    component: Show
  }
  ]
})
