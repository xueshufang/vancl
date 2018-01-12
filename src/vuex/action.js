//数据交互，发送给后端
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const actions={   //接收一个对象
	addGood({commit},params){
		console.log(params,9090)
		//模拟后端的ajax请求
		commit('addGood',params)
	},
	clickDetail({commit},id){
		setTimeout(()=>{
			commit('clickDetail',id)
		},300)
	},
	initCar({commit}){
		setTimeout(()=>{
			let results = JSON.parse(localStorage.car || '[]')
			commit('initCar',results)
		})
	},
	reduceGood({commit},id){
		setTimeout(()=>{
			commit('reduceGood',id)
		})
	},
	removeGood({commit},id){
      setTimeout(()=>{
			commit('removeGood',id)
		})
	},
	selecteGood({commit},val){
		setTimeout(()=>{
			commit('selecteGood',val)
		})
	}

	
}

export default actions
