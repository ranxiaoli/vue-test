/**
 * Created by asusps on 2018/5/6.
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from './pages/Home'
import Books from './pages/Books'
import Music from './pages/Music'
import Television from './pages/Television'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/television',
      name: 'Television',
      component: Television
    }
  ]
})
