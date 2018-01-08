<template>
	<div id="app">
		 <AppHeaderTop/> 
		<router-view/>

	</div>
</template>

<script>
	import AppComHeader from './components/header/AppComHeader'
	import AppLogin from './components/login/AppLogin'
	import AppRegister from './components/register/AppRegister'
	import bus from './modules/bus.js'
	  import AppHeaderTop from './components/Index/Index-main/AppHeaderTop.vue'
	export default {
		name: 'app',
		data:function(){
			return {
				type: 'login'
			}
		},
		components: {
			AppLogin,
			AppRegister,
<<<<<<< HEAD
			AppHeaderTop
=======
			AppComHeader
>>>>>>> master
		},
		mounted() {
			let that = this
			bus.$on("change-type", (type) => {
				that.type = type
			})
		}
	}
</script>

<style>

</style>