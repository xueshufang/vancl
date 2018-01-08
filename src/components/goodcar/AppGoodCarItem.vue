<template>
	<div class="app-good-car-item">
		<!--商品信息-->

		<div class="shopping-pdc-x">
			<!--全选框-->
			<input type="checkbox" name="all_ck-x" id="all_ck-x" />
			<!--商品图-->
			<a href="#" class="pdc_img-x">
				<img src="../../assets/images/shoppingimg.jpg" alt="goodcar" />
			</a>
			<!--信息-->
			<div class="shopping_settle-x">
				<a href="#" class="shop_tit-x">
					凡客休闲鞋 一脚蹬 女款
				</a>
				<p class="shop_cont-x">
					<span class="prduce_color-x">颜色： 天蓝色&nbsp;&nbsp;&nbsp;尺码： 34</span>
					<span class="produce_clear-x">
						
					</span>
				</p>

				<p class="shop_cont_two-x">
					<span class="prduce_money-x">￥{{info.price}}.00</span>
					<span class="produce_reduce-x"></span>
					<span class="produce_num-x">
						<input type="text" name="num-x" id="num-x" value="1" />
					</span>
					<span class="produce_add-x"></span>
				</p>
			</div>
		</div>

	</div>
</template>

<script>

	export default {
		name: "app-good-car-item",
		props:['info'],   //通过props接收父组件car传来的数据

	}
</script>

<style>
</style>