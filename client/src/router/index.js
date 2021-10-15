import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Server from '../pages/Server.vue'
import Channel from '../components/Channel.vue'
import AuthProfile from '../components/AuthProfile.vue'
import authGuard from '../auth/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: AuthProfile,
    beforeEnter: authGuard
  },
  {
    path: '/:serverId',
    name: 'server',
    component: Server,
    children: [
      {
        path: ':channelId',
        name: 'channel',
        component: Channel,
        props: true
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
