<template>
	<div class="app-good-car-item">
		<div class="sp_produce-x">
			<!--在售商品-->
			<div class="sale-x">
				<span>在售商品 :</span>
				<input type="text" name="rm-x" class="rm-x" value="删除" />
				<input type="text" name="no_check-x" class="no_check-x" value="全不选" />
			</div>
			
				
			<!--商品信息-->
			<div class="shoppingcar-x">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"app-good-car-item"
	}
</script>

<style scope lang="scss">
.app-good-car-item{
	width: 100%;
	height: 100%;
	background-color: #fff;
	/*line-height:1.057rem;*/
	margin-bottom: 42.5px;
	.sp_produce-x{
		background: #fff;
		padding: 0em 2em;
		color: #4c4c4c;
		.sale-x{
			margin-top:0.03rem;
			font-size:0.1rem;
			.rm-x,.no_check-x{
				height:14.4px;
				font-size:0.1rem;
				float: right;
				width:0.3rem;
				padding: 0.02rem 0;
				text-align: center;
				background-color: #b81c22;
				color: #fff;
				margin-left:0.1rem;
				cursor: pointer;
				border-radius: 0.02rem;
				border: 0 none;
			}
		}
	}
}
</style>