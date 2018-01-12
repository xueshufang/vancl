import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutations={
	addGood(state,info){
		//info:代表action传来的数据
		//先查看是否有商品
		let isHas = state.car.some(item=>{
			//判断是否有商品
			if(item.id==id){
				item.num++;  //如果找到就让他的数量增加
				return true
			}else{
				return false
			}
		})
		if(!isHas){   //商品不存在
			state.car.push({id,title,price,num:1})  //新的num为1
		}
	},
	changeTitle(state,title){
    	state.global_title = title
    },
    changeUserInfo(state,user_info){
    	state.user_info = user_info
    	localStorage.user_info = JSON.stringify(user_info)
    }
}

export default mutations
