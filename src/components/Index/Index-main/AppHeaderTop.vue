<template>
   <div class="app-header-top">
           <div class="openVanclAppDiv" v-show="isShow" >
			  <a href="##" id="closeVanclApp" @click="emitCloseIt()"></a>
			  <img src="http://m.vancl.com/Content/H5/img/vanclLogoNew.png" alt="">
			  <span>打开凡客App购物</span>
			  <a href="" id="openVanclApp">立即打开</a>
		</div>
   </div>
</template>
   
<script>
     export default {
         name:"app-header-top",
         data(){
             return {
               isShow:true
             }
         },
          methods:{
              emitCloseIt(){
                  this.isShow=false
              }
          }
     }
</script>

<style lang="scss" scoped>


</style>