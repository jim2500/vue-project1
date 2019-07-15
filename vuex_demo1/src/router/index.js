import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Register from '@/components/Register'
import About from '@/components/about/About'

//二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OderingGuide from '@/components/about/OderingGuide'

//三级路由
import Adress from '@/components/about/contact/Adress'
import Contacter from '@/components/about/contact/Contacter'
import Phone from '@/components/about/contact/Phone'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'homeLink', component: Home},
    {path: '/admin', name: 'adminLink', component: Admin},
    {path: '/login', name: 'loginLink', component: Login},
    {path: '/menu', name: 'menuLink', component: Menu},
    {path: '/register', name: 'registerLink', component: Register},
    {path: '/about', name: 'aboutLink',redirect:'/history', component: About,children:[
      {path:'/about/contact',name:"contactLink",redirect:'/contacter',component:Contact,children:[
        {path:'/adress',name:"adressLink",component:Adress},
        {path:'/contacter',name:"contacterLink",component:Contacter},
        {path:'/phone',name:"phoneLink",component:Phone},
      ]},
      {path:'/delivery',name:"deliveryLink",component:Delivery},
      {path:'/history',name:"historyLink",component:History},
      {path:'/oderingGuide',name:"oderingGuideLink",component:OderingGuide}
    ]},
    {path: '*', redirect:'/'}
  ],
  mode:"history"//消除‘#/’
})