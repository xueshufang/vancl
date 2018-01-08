<template>
	<div class="app-header">
		<div  class= "header_inner" :class="searchBarFixed==true?'':'isFixed'">
			<form class="search-form">
				<input type="text" class="search-btn" />
				<input type="text" placeholder="熊本熊" class="search-input"/>
			</form>
				<a href="" class="message">
				    <span class="hasNewMsg"></span>
				</a>
		</div>
   </div>
</template>

<script>
     import AppHeaderTop from '../Index/Index-main/AppHeaderTop.vue'
    export default {
		  name:'app-header',
		  data(){
			  return {
				  searchBarFixed:true,
				  isShow :true
			  }
            
		  },
		 components:{
             AppHeaderTop
		 },
	     methods:{
			scrollfunc(){
               var scroll = document.documentElement.scrollTop || document.body.scrollTop;  
		       if(scroll>46.8){
				  
                   this.searchBarFixed = false
			   }else{
				   this.searchBarFixed =true
			   }
			}
		
		 },
		mounted(){
			window.addEventListener('scroll',this.scrollfunc,true)
			}
		
    }
</script>

<style lang="scss" scoped>

</style>