//数据交互，发送给后端
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const actions={   //接收一个对象
	addGood(commit,params){
//		console.log(params)
		//模拟后端的ajax请求
		setTimeout(()=>{
			let result ='ok'   //返回ok代表成功
			if(result=='ok'){
				commit('addGood',params)
			}
		},300)
	}
}

export default actions
