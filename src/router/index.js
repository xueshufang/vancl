import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import AppLogin from '../components/login/AppLogin'
import AppRegister from '../components/register/AppRegister'
const routes=[
	{path:'',redirect:'/main'},
	{path:'/login',name:'login',component:AppLogin},
	{path:'/register',name:'register',component:AppRegister},
//	{path:'**',redirect:'/main'}
]
const router = new Router({
	routes,
})

export default router