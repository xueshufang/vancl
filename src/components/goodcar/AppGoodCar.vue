<template>
	<div class="app-good-car">
		
		<div class="topTitle">
			<span class="topBack" @click='prevclick'>
				<i class="yo-ico">&#xe603;</i>
			</span>
			<span class="TitleName">购物车</span>
		</div>
		
		
		<!--购物车列表-->
		
		<div class="goodcar_list-x" v-if="!car.length">
			<!--购物车没有商品-->
			<div class="shoppingCar_null-x">
				<div class="shoppingCar_null_pic-x">
					<p class="car-img-x">
						<img src="../../assets/images/null-car.png" alt="car-img" />
					</p>
				</div>
				<p class="car_btn-x">
					<span class="sc_btn-x shadow">
						<a href="#">我的收藏</a>
					</span>
					<span class="gm_btn-x shadow">
						<router-link :to="{name:'main'}">去逛逛</router-link>
					</span>
				</p>
			</div>
			<div class="login-x">
				<div class="user_info-x">
					<a href="#" style="vertical-align: middle;">
						<span>AAA*****</span>
					</a>
					<i>|</i>
					<a href="#">退出</a>
				</div>
			</div>
			
			
			<div class="main-footerp">
							<ul>
                               <li>
								   <a href="">
									   <img src="http://i10.m.vancl.com/Content/H5/img/help1.png" alt="">
								   </a>
							   </li>
								<li>
								  <a href="">
									   <img src="http://i10.m.vancl.com/Content/H5/img/download1.png" alt="">
								  </a>
							   </li>
								 <li>
								  <a href="">
									   <img src="http://i10.m.vancl.com/Content/H5/img/weixin1.png" alt="">
								  </a>
							   </li>
							   <li>
								 <a href="">
									   <img src="http://i10.m.vancl.com/Content/H5/img/pcsite1.png" alt="">
								 </a>
							   </li>
							</ul>
						     <div class="copyright">
							     <h3>  京ICP证100557号</h3>
					        </div>
						</div>
		
		<AppNav/>
			
		</div>
		
			
			
		<div class="sale-x" v-else>
				<span>在售商品 :</span>
				<input type="text" name="rm-x" class="rm-x" value="删除" />
				<input type="text" name="no_check-x" class="no_check-x" value="全不选" />
		
			
		<AppGoodCarItem v-for="item in car" :key="item.id" :info='item'/>	
		
		<AppGoodCarFooter/>
		</div>
	</div>
</template>

<script>
	//使用购物车数据
	import {mapState,mapActions} from 'vuex'
	import AppComHeader from "../header/AppComHeader"
	import AppGoodCarFooter from "./AppGoodCarFooter"
	import AppGoodCarItem from "./AppGoodCarItem"
	import AppNav from "../index/AppNav"
	
	export default{
		name:"app-good-car",
		components:{
			AppGoodCarItem,
			AppGoodCarFooter,
			AppNav	
		},
		computed:{
			...mapState([
				'car'
			])
		},
		methods:{
			...mapActions(['initCar']),
			prevclick(){
	            this.$router.go(-1)
	        }
		},
		mounted(){
			this.initCar()
			
		}
	}
</script>

<style scoped="" lang="scss">
	
</style>