import Vue from 'vue'	
import Router from 'vue-router'
Vue.use(Router)

import AppLogin from '../components/login/AppLogin'
import AppRegister from '../components/register/AppRegister'
import AppMain  from '../components/Index/AppMain'
import AppGoodCar from "../components/goodcar/AppGoodCar"
const routes=[
	{path:'',redirect:'/main'},
	{path:'/main',name:'main',component:AppMain},
	{path:'/login',name:'login',component:AppLogin},
	{path:'/register',name:'register',component:AppRegister},
	{path:'/goodcar',name:'goodcar',component:AppGoodCar},
	{path:'**',redirect:'/main'}
]
const router = new Router({
	routes,
})

export default router