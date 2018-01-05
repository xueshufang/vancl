<template>
	<div class="app-good-car">
		
			
		<!--头部-->
		<div class="topTitle">
			<span class="topBack">
				<i class="yo-ico">&#xe603;</i>
			</span>
			<span class="TitleName">购物车</span>
		</div>
		
			
			
		<!--购物车列表-->
		<div class="goodcar_list-x">
			
		<AppGoodCarItem/>
		<AppGoodCarItem/>
		<AppGoodCarItem/>
			
			
		</div>
		
			
			
		<!--底部-->
		<div class="footer-x">
			<form action="" class="settle-x,clear">
				<div class="pay-money-x">
					<!--需要支付-->
					<p class="l_price-x">
						需支付
						<span id="lt_price">
							￥158.00
						</span>
					</p>
					
					<p></p>
					<!--总金额及优惠-->
					<p class="l_settle-x">
						<span>总金额</span>
						<span id="allprice-x">￥158.00</span>
						<span>已优惠</span>
						<span id="on_sale-x">0.00</span>
					</p>
				</div>
				
				<!--结算-->
				<div class="all_settle-x">
					<input type="submit" name="set-btn-x" id="set-btn-x" value="结算（1）" />
				</div>
			</form>
		</div>
		
		
	</div>
</template>

<script>
	import AppGoodCarItem from "./AppGoodCarItem"
	export default{
		name:"app-good-car",
		components:{
			AppGoodCarItem
		}
	}
</script>

<style>
</style>