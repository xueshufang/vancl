<template>
	<div class="app-main">

		<div class="topTitle">
			<span class="topBack" @click='prevclick'>
				<i class="yo-ico">&#xe603;</i>
			</span>
			<span class="TitleName">个人中心</span>
		</div>

		<!-- 内容部分 -->
		<div class="others-content">
			<div class="uc-wrap">
				<div class="uc-profile">
					<div class="clear">
						<a class="uc-edit" href="/User/UserInfoUpdate"></a>
					</div>
					<div class="clear"> <img class="uc-avatar" src="http://i10.m.vancl.com/Content/H5/img/H5-V0.jpg" alt="" />
						<p class="">XFF__</p>
						<a class="uc-level" href="#" title=""></a>
						<div class="uc-setPsdBind"> </div>
					</div>
					<div class="uc-prof-li">
						<ul>
							<li>积分:0</li>
							<li>余额:0.00</li>
							<li>成长值:0</li>
						</ul>
					</div>
				</div>
				<div class="uc-order">
					<ul class="clear">
						<p>
							 <a  class="uc-order-title" href="#">
								全部订单
								<b style="color: #a5a5a5;font-size: 15px;" @click="showCar">></b>

							</a>
						</p>
						<li class="uc-order-li">
							<a class="uc-order-ing-a" href="#"><i class="fa fa-chevron-circle-right"></i><span>进行中</span></a>
						</li>
						<li class="uc-order-li">
							<a class="uc-order-done-a" href="#"><i class="fa fa-chevron-circle-down"></i><span>已完成</span></a>
						</li>
						<li class="uc-order-li">
							<a class="uc-order-uncomment-a" href="#"><i class="fa fa-pencil-square-o"></i><span>待评价</span></a>
						</li>
						<li class="uc-order-li">
							<a class="uc-order-invali-a" href="#"><i class="fa fa-close"></i><span>无效</span></a>
						</li>
					</ul>
				</div>
				
				
				<div class="uc-section">
					<ul class="clear">
						<li class="uc-section-li">
							<a class="uc-section-charge" href="#">
								<span></span>
								<span>充值返现</span>
								<span class="chargeNotice">充100返100</span>
							</a>
						</li>
						
						<li class="uc-section-li">
							<a class="uc-section-pTailor" href="#">
								<!--<i></i>-->
								<span></span>
								<span>我的私人定制</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-logistics" href="#">
								<!--<i></i>-->
								<span></span>
								<span>物流查询</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-rRecords " href="#">
								<!--<i></i>-->
								<span></span>
								<span>退换货记录</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-addr" href="#">
								<!--<i></i>-->
								<span></span>
								<span>地址管理</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-coupon" href="#">
								<!--<i></i>-->
								<span></span>
								<span>我的礼品卡</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-gCard" href="#">
								<!--<i></i>-->
								<span></span>
								<span>我的优惠券</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-points" href="#">
								<!--<i></i>-->
								<span></span>
								<span>我的积分</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-comment" href="#">
								<!--<i></i>-->
								<span></span>
								<span>我的评论</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-ask" href="/User/MyAsk">
								<!--<i></i>-->
								<span></span>
								<span>我的提问</span>
							</a>
						</li>
						<li class="uc-section-li">
							<a class="uc-section-advise" href="#">
								<!--<i></i>-->
								<span></span>
								<span>投诉建议</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<!--底部-->
		<AppNav/>
	</div>
</template>

<script>
	import AppNav from "../index/AppNav"
	export default {
		name: 'app-main',
		components:{
			AppNav
		},
		methods:{
			 prevclick(){
                this.$router.go(-1)
			},
			showCar(){
				this.$router.push('/goodcar')
			}
		}
	}
</script>

<style>

</style>