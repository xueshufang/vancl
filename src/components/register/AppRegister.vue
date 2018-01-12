<template>
	<div class="app-register">
		<!--头部-->
		<div class="topTitle">
			<span class="topBack">
				<i class="yo-ico">&#xe603;</i>
			</span>
			<span class="TitleName">注册</span>
		</div>
		<!--内容部分-->
		<div class="content">
			<div class="input_content2">

				<!--图片验证码-->
				<div class="input_2">
					<input type="text" placeholder="请输入图片验证码" class="yanzheng" v-model="useList.yanzheng" />
					<img src="../../assets/images/验证码.jpg" />
				</div>

				<!--手机号-->
				<div class="mphone">
					<input type="text" name="phone" id="phone" placeholder="请输入您的手机号" v-model="useList.phone"/>

					<a href="#" class="authcode">
						获取验证码
					</a>
				</div>
	
				<!--密码-->
				<div class="pass">
					<input type="text" class="passph" placeholder="请输入手机验证码" v-model="useList.userpass" />

				</div>
				<div class="passwd">
					<input type="password" name="password" class="password" placeholder="密码6-16位字母,数字,特殊字符" v-model="useList.password" />

					<b></b>
					<mt-switch class="btn" :value.sync="value"></mt-switch>
				</div>
				<p class="rule">
					<span class="tit_one">注册账号表示同意遵守</span>
					<a class="tit_two">《VANCL凡客服务条款》</a>
				</p>
				<a href="javascript:;" @click="register({
						yanzheng:useList.yanzheng,phone:useList.phone,userpass:useList.userpass,password:useList.password})">点击注册</a>
			</div>
		</div>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	import Vue from 'vue'
	import { Switch } from 'mint-ui'
	Vue.component(Switch.name, Switch);
	export default {
		name: "app-register",
		data() {
			return {
				useList: {
					yanzheng:'',phone:'',userpass:'',password:''
				}
			}
		},
		methods: {
			value(){
				name="abc"
			},
			register(params){
			if(this.useList.yanzheng != '' && this.useList.phone !='' &&this.useList.userpass != '' &&this.useList.password != ''){
					this.$store.commit('changeUserInfo',params)    
					Toast("注册成功")
					this.$router.replace({name:'login'})
				}
				else{					
                   Toast("注册失败")
				}
				
				
			}
		}
	}
</script>
<style lang="scss">

</style>