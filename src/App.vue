<template>
	<div id="app">
		<router-view/>

	</div>
</template>

<script>
	import AppComHeader from './components/header/AppComHeader'
	import AppLogin from './components/login/AppLogin'
	import AppRegister from './components/register/AppRegister'
	import bus from './modules/bus.js'
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
			AppComHeader
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