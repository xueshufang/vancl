import Vue from 'vue'	
import Router from 'vue-router'
Vue.use(Router)

import AppLogin from '../components/login/AppLogin'
import AppRegister from '../components/register/AppRegister'
import AppMain  from '../components/Index/AppMain'
import AppGoodCar from "../components/goodcar/AppGoodCar"
import AppGoodList from '../components/good/AppGoodList'
import AppDetail from '../components/good/AppDetail'
import AppMine from '../components/mine/AppMine'
const routes=[
	{path:'',redirect:'/main'},
	{path:'/main',name:'main',component:AppMain},
	{path:'/login',name:'login',component:AppLogin},
	{path:'/register',name:'register',component:AppRegister},
	{path:'/goodcar',name:'goodcar',component:AppGoodCar},
	{path:'/goodlist',name:'goodlist',component:AppGoodList},
	{path:'/gooddetail',name:'gooddetail',component:AppDetail},
	{path:'/mine',name:'mine',component:AppMine},
	{path:'**',redirect:'/main'}
]
const router = new Router({
	routes,
})

export default router