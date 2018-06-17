import Vue from 'vue'
import Router from 'vue-router'
import DList from '@/components/DList'
import DWrite from '@/components/DWrite'
import DLogin from '@/components/DLogin'
import Diary from '@/components/Diary'
import UserDiary from '@/components/UserDiary'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Diary,
      redirect: '/list',
      children : [
        {
          path: '/list',
          component: DList
        },
        {
          path: '/list/:id',
          component: DList
        },
        {
          path: '/diary',
          component: UserDiary
        },        
        {
          path: '/diary/:id',
          component: UserDiary
        },
        {
          path: '/write',
          component: DWrite
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: DLogin
    }
  ]
})
