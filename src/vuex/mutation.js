import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutations={
	addGood(state,{id,price,title,img,num}){
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
			state.car.push({id,title,price,num:1,img,isSelected:true})  //新的num为1
			console.log(state.car)
		}
      	localStorage.car = JSON.stringify(state.car)
	},
    changeUserInfo(state,user_info){
    	state.user_info = user_info
    	localStorage.user_info = JSON.stringify(user_info)
		
	},
	clickDetail(state,id){
       state.goods.some(item=>{
			if(item.id == id){
				localStorage.good = JSON.stringify(item)
				return true
			}else{
				return false;
			}
		}) 
		state.good=JSON.parse(localStorage.good)
	},
	initCar(state,car){
       state.car = car
	},
	reduceGood(state,{id}){
	  let len = state.car.length;
	  for(let i = 0;i <len;i++){
		  if(state.car[i].id == id){
			 
			  state.car[i].num--;
				if(state.car[i].num==0){
					state.car.splice(i,1)
				}
		  }
	  }
	},
	removeGood(state,{id}){
	   let len = state.car.length
		 
	   for(let i = 0;i <len;i++){
		   if(state.car[i].id == id){
			  
			   state.car.splice(i,1)
				  break;
		   }
	   }
		localStorage.car = JSON.stringify(state.car)
	},
	selecteGood(state,val){
           state.car.forEach(function(item){
			    item.isSelected = val
		   });
	}

  

}

export default mutations
