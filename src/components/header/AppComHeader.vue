<template>
	<div class="app-com-header">
		<div class="topTitle">
			<span class="topBack"  @click='prevclick'>
				<i class="yo-ico">&#xe603;</i>
			</span>
			<span class="TitleName">登录</span>
		</div>
	</div>
</template>

<script>
	import AppComHeader from './AppComHeader'
	export default{
        name:"app-com-header",
        methods:{
             prevclick(){
                this.$router.go(-1)
            }
        },
		components:{
			AppComHeader
		}
	}
</script>

<style lang="scss" scoped="">
	.topTitle {
       position: relative;
       top: 0;
       width: 100%;
       height: 0.45rem;
       background: #b81c22;
       text-align: center;
       line-height: 0.45rem;
       color: #fff;
   }
   .topBack {
       position: absolute;
       left: 0.11rem;
       top: -0.02rem;
       font-size: 0.29rem;
   }
   .TitleName {
       font-size: 0.17rem;
   }
</style>