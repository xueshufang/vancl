<template>
    <header>
			<div class="header_inner">
				<form class="search-form">
					<input type="text" class="search-btn" />
					<input type="text" placeholder="熊本熊" class="search-input"/>
				</form>
				 <a href="" class="message">
				 	<span class="hasNewMsg"></span>
				 </a>
			</div>
		</header>
</template>

<script>

    export default {
		  name:'app-header',
		  components:{
			  
		  }
    }
</script>

<style lang="scss" scoped>
.header_inner{width:100%;height:4rem;position: relative;background:#b81c22;z-index: 999;}
.search-form{position:absolute;height:2.2rem;line-height: 2.2rem;background:#fff;width:85%;top:0.9rem;left:0.9rem;border-radius: 0.3rem;}
.search-btn{display: inline-block;position:absolute;width:1.5rem;height:1.5rem;border:0;background:url('http://i10.m.vancl.com/Content/H5/img/search2.png') no-repeat;left:0;top:0.4rem;background-size: contain;margin-left:0.8rem;}
.search-input{display:inline-block;width:22.58rem;height:1.87rem;position:absolute;border:none;width:80%;left:3.3rem;outline: none;}
.message{position:absolute;display: inline-block;right:0.9rem;height:1.3rem;background:url('http://i10.m.vancl.com/Content/H5/img/msg3.png') no-repeat;width:1.8rem;background-size: contain;top:1.3rem;}
.hasNewMsg{position: absolute;top:-0.2rem;right:-0.5rem;border-radius:0.2rem ;border:0.2rem solid #fff;}
</style>