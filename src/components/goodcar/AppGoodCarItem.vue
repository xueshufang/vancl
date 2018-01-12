<template>
	<div class="app-good-car-item">
		<!--商品信息-->

		<div class="shopping-pdc-x">
			<!--全选框-->
			<input type="checkbox" name="all_ck-x" id="all_ck-x" v-model = "info.isSelected"/>
			<!--商品图-->
			<a href="#" class="pdc_img-x">
				<img :src="info.img" />
			</a>
			<!--信息-->
			<div class="shopping_settle-x">
				<a href="#" class="shop_tit-x">
					{{info.title}}
				</a>
				<p class="shop_cont-x">
					<span class="prduce_color-x">颜色： 天蓝色&nbsp;&nbsp;&nbsp;尺码： 34</span>
					<span class="produce_clear-x" @click="removeGood({id:info.id})">
						
					</span>
				</p>
				<p class="shop_cont_two-x">
					<span class="prduce_money-x">￥{{info.price}}.00</span>
					<span class="produce_reduce-x" @click="reduceGood({id:info.id})"></span>
					<span class="produce_num-x" >
						<a type="button" name="num-x" id="num-x">{{info.num}}</a>
					</span>
					<span class="produce_add-x" @click="addGood({id:info.id,img:info.img,title:info.title,price:info.price})"></span>
				</p>
			</div>
		</div>

	</div>
</template>

<script>
    import {mapActions} from 'vuex'
	export default {
		name: "app-good-car-item",
		props:['info'],   //通过props接收父组件car传来的数据
		methods:{
			...mapActions(['addGood','reduceGood','removeGood'])
		}

	}
</script>

<style>
</style>