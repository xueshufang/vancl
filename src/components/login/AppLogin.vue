<template>
	<div class="app-login">
		<div class="topTitle">
			<span class="topBack"  @click='prevclick'>
				<i class="yo-ico">&#xe603;</i>
			</span>
			<span class="TitleName">登录</span>
		</div>
			
			
		<!--内容部分-->
		<div class="content">
			<div class="login_title">
				<span class="login_one_tit" @click="type='login'">
					普通登录
					<i class="i1" :class="{active:type == 'login'}"></i>
				</span>
				<span class="login_two_tit" @click="type='Qlogin'">
					快速登录
					<i class="i1" :class="{active:type == 'Qlogin'}"></i>
				</span>
			</div>
			
				
				
			<!--普通登录-->
			<form action="user"   v-if="type=='login'">
				<div class="input_content">
					<div class="input_1">
						<input type="text" name="UserName" id="usesname" placeholder="点击输入手机号/Email" v-model="phone"/>	
					</div>	
					<div class="input_2">
						<input type="password" name="PassWord" id="password" placeholder="请输入密码" v-model="password" />	
					</div>	
					<a href="javascript:;" @click="login1({phone:phone,password:password})">登&nbsp;录</a>
				</div>
			</form>
		
		
			<!--快速登录-->
			<form action="user" v-else>
				<div class="input_content2" >
					
					<!--图片验证码-->
					<div class="input_2">
						<input type="text" placeholder="请输入图片验证码"  class="yanzheng"/>
						<img src="../../assets/images/验证码.jpg"/>	
					</div>
					
					<!--手机号-->
					<div class="mphone">
						<input type="text" name="phone" id="phone" placeholder="请输入您的手机号" />
						<a href="#" class="authcode">
							获取动态密码
						</a>
						
					</div>
					
					<!--密码-->
					<div class="pass">
						<input type="password" name="password" class="password" placeholder="请输入手机登录密码" />
						
					</div>
					<a href="javascript:;">登&nbsp;录</a>
				</div>
			</form>
			
			<div class="server">
				<router-link :to="{name:'register'}">免费注册 
					<span>></span>
				</router-link>
				<a href="#">手机账号取回密码 
					<span>></span>
				</a>
			</div>
		</div>
		
			
			
		<!--底部导航-->
		<div class="footer">
			<p class="footer_name">
				使用其他账号登录
			</p>
			<ul class="footer_ul">
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
			</ul>
		</div>
		
		
	</div>

</template>

<script>
import bus from "../../modules/bus.js"
import {Toast} from 'mint-ui'
export default {
	name: "app-login",
	data() {
		return {
			type: 'login',
				phone:'',password:''
		}
	},
	watch: {
		type() {
			bus.$emit('change-type', this.type)
		}
	},
	methods:{
		toRegister(name){
			this.$router.push({name})
		},
	  	prevclick(){
            this.$router.go(-1)
        },
		login1(params){
			let that =this
			setTimeout(()=>{
				if(that.phone!='123'||that.password!='456') {
       				Toast('登陆失败')
       				return false;
       			}
			
				Toast('登陆成功')
				let data={
					user_id:123456,username:that.username
				}
				that.$store.commit('changeUserInfo',data) 
				that.$router.replace({name:'mine'})
			},500)
				
			}
		 }

	}
</script>

<style lang="scss" scoped="">
	

</style>