import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={

	car: localStorage.car? JSON.parse(localStorage.car) : [],   //数组，存放商品
	global_title:"登录",
	user_info:{},
	goods:[], //用来存放列表点击的商品
	good:{}

}




export default state
