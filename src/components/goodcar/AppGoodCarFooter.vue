<template>
	<div class="app-good-car-footer">

		<!--底部-->
		<div class="footer-x">
			<form action="" class="settle-x,clear">
				<div class="pay-money-x">
					<!--需要支付-->
					<p class="l_price-x">
						需支付
						<span id="lt_price">
							￥{{money}}.00
						</span>
					</p>
					
					<p></p>
					<!--总金额及优惠-->
					<p class="l_settle-x">
						<span>总金额:</span>
						<span id="allprice-x">￥{{money}}.00</span>
						<span>已优惠:</span>
						<span id="on_sale-x">0.00</span>
					</p>
				</div>
				
				<!--结算-->
				<div class="all_settle-x">
					<button type="submit" name="set-btn-x" id="set-btn-x"v-model="isAllSelected" >结算({{num}})</button>
				</div>
			</form>
		</div>
		
		
	</div>
</template>

<script>
	import {mapGetters,mapActions} from "vuex"
	import AppGoodCarFooter from "./AppGoodCarFooter"
	export default{
		name:"app-good-car-footer",
		data(){
            return {
				num:this.$store.state.car.num
			}
		},
		components:{
			AppGoodCarFooter
		},
		computed:{
			...mapGetters(['money']),
            isAllSelected:{
               get(){
                   return this.$store.state.car.every(item=>{
					   if(item.isSelected){
						   return true
					   }else{
						   return false
					   }
				   })
			   },
			   set(newVal){
				   this.seleteGood(newVal)
			   }
			}

		},
		methods:{
			...mapActions(['seleteGood'])
		}
	}
</script>

<style scoped="" lang="scss">
	
</style>