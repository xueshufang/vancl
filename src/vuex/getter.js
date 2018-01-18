import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const getters ={
	money(state){
		let money = 0
		state.car.forEach(item=>{
			if(item.isSelected){
					money+=item.price*item.num
			}
		
		})
		return money
	},
	getNum(state){
		let num = 0
		state.car.forEach(item=>{
			if(item.isSelected){
					num+=item.num
					
			}
		
		})
		return num
	}
}

export default getters