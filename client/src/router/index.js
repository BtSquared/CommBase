import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Server from '../pages/Server.vue'
import Channel from '../components/Channel.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
