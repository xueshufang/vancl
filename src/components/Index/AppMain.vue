<template >
	
      <div class="app-main">
		   <router-view></router-view>
		      <AppHeader></AppHeader>  
			<div class="main_inner ">
				<AppBanner></AppBanner>
				<!--活动-->
				<div class="main-p">
					<div class="t1003 clearfix">
					<div class="t1001">
						<a href="">
							<img src="http://i8.m.vancl.com/wap/2017_11_21_12_36_52_8847_320x50.jpg" alt="" />
						</a>
					</div>
					<div class="t1001">
						<a href="">
							<img src="http://i6.m.vancl.com/wap/2017_11_21_12_37_3_6711_320x50.jpg" alt="" />
						</a>
					</div>
				</div>
			    <!--秒杀-->
			     <div class="detail-text">	
			        <a href="">
			        	<div class="seckill-text">
			        		<i class="clock-icon"></i>
			             	<span class="font-wbold">每日秒杀</span>
			        	</div>
			        	<div class="seckill-countdown">
			        		<span class="time-session clearfixgont-wbold">22点到场</span>
			        		<span class="countdowm " id="countdown">即将开始</span>
			        	</div>
			        	<div class="enter-sekill">
			        		<span class="font-wbold">进入会场</span>
			        		<i class="right-arIcon"></i>
			        	</div>
			        </a>
                </div> 
                <!--  商品mainlist-->
                <div class="mainlist">
                        <div class="list-main">
                             <div class="t10">
                                 <a href="">
                                     <img src="http://i3.m.vancl.com/wap/2017_12_28_15_33_32_3036_640x71.jpg" alt="">
                                 </a>
                             </div>
							 <!-- <div class="t101"></div> -->
							 <div class="t1000">
								  <div class="t1002">
									  <a href="">
										  <img src="http://i5.m.vancl.com/wap/2018_1_2_9_53_53_5972_320x479.jpg" alt="">
									  </a>  
								  </div>
								<div class="t1002">
									  <a href="">
										  <img src="http://i8.m.vancl.com/wap/2018_1_2_16_39_14_8954_320x479.jpg" alt="">
									  </a>  
								  </div>
							 </div>
							 <div class="t1000">
								  <div class="t1002">
									  <a href="">
										  <img src="http://i2.m.vancl.com/wap/2018_1_2_9_55_25_2680_320x479.jpg" alt="">
									  </a>
								  </div>
								<div class="t1002">
									  <a href="">
										  <img src="http://i2.m.vancl.com/wap/2018_1_2_16_30_24_2265_320x479.jpg" alt="">
									  </a>
								  </div>
							 </div>
							<div class="t1000">
								  <div class="t1002">
									  <a href="">
										  <img src="http://i3.m.vancl.com/wap/2018_1_2_16_31_13_3861_320x479.jpg" alt="">
									  </a>
								  </div>
								<div class="t1002">
									  <a href="">
										  <img src="http://i6.m.vancl.com/wap/2018_1_2_16_40_22_6851_320x479.jpg" alt="">
									  </a>
								</div>
						    </div>
						
						
							<!-- 懒加载-->  
							<div v-for="value in list">
								<div class="t10">
									<a href="">
										<img :src="value.title1" alt="">
									</a>
								</div>
								 <div class="t1000">
										<div class="t1002">
											<a href="">
												<img :src="value.imgs.f1" alt="">
											</a>
										</div>
										<div class="t1002">
											<a href="">
												<img :src="value.imgs.f2" alt="">
											</a>
										</div>
										<div class="t1002">
											<a href="">
												<img :src="value.imgs.f3" alt="">
											</a>
										</div>
										<div class="t1002">
											<a href="">
												<img :src="value.imgs.f4" alt="">
											</a>
										</div>
										<div class="t1002">
											<a href="">
												<img :src="value.imgs.f5" alt="">
											</a>
										</div>
										<div class="t1002">
											<a href="">
												<img :src="value.imgs.f6" alt="">
											</a>
										</div>
									</div>
							</div>
						</div>
						<!--  查看更多，返回顶部-->
						<div class="allAndtop">
							<a href="javascript:;" class="see-all" >
								<img src="http://i10.m.vancl.com/content/html5v3/images/see-all.jpg" alt="">
							</a>
							<a href="javascript:;" class="ret-top see-all" v-back-top>
								<img src="http://i10.m.vancl.com/content/html5v3/images/ret-top.jpg" alt="">
							</a>
						</div>
						<!--登录注册  -->
						<div class="login">
							<div class="login-btn">
								<router-link :to="{name:'login'}">登录</router-link>
								<router-link :to="{name:'register'}">注册</router-link>
							</div>
						</div>
						<!--main-footer  -->
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
                       
				</div>
				</div>
			</div>
			 <AppNav></AppNav> 
			 
		</div>
			
</template>

<script>

	 import AppHeader from './AppHeader'
	import AppBanner from './Index-main/AppBanner.vue'
	 import AppNav from './AppNav'
    export default {
		 name:'app-main',
		  data(){
             return {
				 list:[]
			 }
		  },
		 components:{
			 AppBanner,AppHeader,AppNav
		 },
         methods:{
			
		 },
		  mounted(){
			 
			  fetch('http://localhost:8080/api/list')
				  .then((response)=>response.json())
				  .then((res)=>{
					  this.list = res
					
				  })
			
			  
		  }
    }
</script>

<style lang="scss" scoped>

 
</style>