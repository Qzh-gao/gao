import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/',
    name: 'login',
    component:()=> import ('../views/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component:()=> import ('../views/main.vue'),

    children:[
      {
        path: '/main/1',
        name: 'id1',
        component:()=> import ('../components/userlist.vue'),
      },
      {
        path: '/main/2',
        name: 'id2',
        component:()=> import ('../components/answer.vue'),
      },
      {
        path: '/main/3',
        name: 'id3',
        component:()=> import ('../components/finish.vue'),
      },
      {
        path: '/main/4',
        name: 'id4',
        component:()=> import ('../components/zhan.vue'),
      },
      {
        path: '/main/5',
        name: 'id5',
        component:()=> import ('../components/about.vue'),
      },
      {
        path: '/main/',
        name: 'moren',
        component:()=> import ('../components/lbt.vue'),
      },
    ]
      
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
