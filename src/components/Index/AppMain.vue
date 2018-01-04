<template>
      <section class="app-main">
			<div class="main_inner ">
				<AppBanner></AppBanner>
				<!--活动-->
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
							<a href="" class="see-all">
								<img src="http://i10.m.vancl.com/content/html5v3/images/see-all.jpg" alt="">
							</a>
							<a href="" class="ret-top">
								<img src="http://i10.m.vancl.com/content/html5v3/images/ret-top.jpg" alt="">
							</a>
						</div>
						<!--登录注册  -->
						<div class="login">
							<div class="login-btn">
								 <a href="">登录</a>
								 <a href="">注册</a>
							</div>
						</div>
						<!--main-footer  -->
						<div class="main-footer">
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
		</section>
</template>

<script>

	import AppBanner from './Index-main/AppBanner.vue'
    export default {
		 name:'app-main',
		  data(){
             return {
				 list:[]
			 }
		  },
		 components:{
			 AppBanner
		 },
         methods:{
			
		 },
		  mounted(){
			  
			  fetch('http://localhost:8080/api/list')
				  .then((response)=>response.json())
				  .then((res)=>{
					  console.log(res)
					  this.list = res
					 console.log(this.list)
				  })
					  
				  
			  
		  }
    }
</script>

<style>
.app-main{display: flex;flex: 1;}
 .main_inner{position:relative;}
.t1003{margin-top:4px;display: flex;justify-content: space-between;align-items: center;}
.t1001{width:50%;overflow: hidden;margin:0 1px 0 1px;display: inline-block;overflow: hidden;line-height:0;}
.t1001 a{display: inline-block;width:100%;display: inline-block;height:2.45rem;}
.t1001 a img{display: inline-block;width:100%;}
/*秒杀*/
.detail-text{margin:0.16rem 0;position:relative;background: #fff url('http://i10.m.vancl.com/Content/H5/img/sec-kill-bkgImg.png') top center;};background-size:cover;width:100%;
.detail-text>a{display: block;color:#000;}
.seckill-text,.seckill-countdown{padding:0.4rem 0;text-align: center;}
.seckill-text .clock-icon{display: inline-block;width:1.2rem;height:1.2rem;vertical-align: text-bottom;background:url('http://i10.m.vancl.com/Content/H5/img/clock.png') no-repeat top center;background-size: 1.2rem;;}
.font-wbold{font-size:1.2rem;font-weight: 600;color: #b81c22;}
.enter-sekill{position:absolute;bottom: 0.5rem;right:0.5rem;display: table;}

.right-arIcon{display: table-cell;width:1.2rem;height:1.2rem;background: url('http://i10.m.vancl.com/Content/H5/img/right-arrow.png') no-repeat center top;background-size:1.2rem;}
/*mainlist  */
.mainlist{width:100%;overflow: hidden;position:absolute;}
.t10 a{width: 100%;display: block;height:3.5rem;}
.t10 a img{display: block;width:100%;height:100%;}
.t1002{width:50%;height:23.42rem;}
.t1000{width:100%;overflow: hidden;margin-top:2px;display: flex;justify-content: space-between;flex-wrap:wrap; }
.t1002>a{display: block;}
.t1002>a>img{display: inline-block;width:100%;height:100%;}

.allAndtop{
	display: flex;justify-content: space-between;align-items: center;margin-bottom:3.2rem;
	
}
.allAndtop>a{display: inline-block;width:50%;height:3.67rem;}
.allAndtop>a>img{display: inline-block;width:100%;height:100%;}
.login{text-align: center;padding:3.5rem 0;}
.login-btn{display: inline-block;}
.login-btn a{background:#fff;padding:.5rem 2.5rem;}
.login-btn a:first-child{margin-right: 6px;}
.main-footer{margin-bottom:5rem;text-align: center;display: flex;flex-direction: column;align-items: center;}
.main-footer ul{display: flex;justify-content: space-around;align-items: center;
    border-bottom: 1px solid #4c4d4d;
    border-top: 1px solid #4d4d4d;
    padding: 1.2em 0;flex-direction: row;width:22.4rem;}
.main-footer ul li a{display: inline-block;width:3.5rem;height:5.1rem;}
.main-footer ul li a img{width:100%;height:100%;display: inline-block;}
.copyright {
	display: block;
    font-size: .9em;
    line-height: 2rem;
    color: #4c4c4c;}

</style>