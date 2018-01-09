<template>
    <div class="app-good-list">
         <div class="topTitle-p">
             <span class="topBack-p"></span>
             <span class="curTitle-p">开年大促</span>
         </div>
         <div class="good-banner-p">
              <a href="#" class="banner-p">
                  <img src="http://i8.m.vancl.com/q80/wap/2018_1_3_9_56_41_1898.jpg" alt="">
              </a>
             <a href="" class="closes-p">
                  <img src="http://i2.m.vancl.com/q80/wap/2017_12_6_17_7_33_5224.jpg" alt="">
             </a>
         </div>
         <div class="topic-good-p clearfix">
             <div class="topic-p" v-for="goodlisttop in goodlisttops" :key="goodlisttop.id">
                  <a >
                      <img :src="goodlisttop.img" alt="">
                  </a>
             </div>
        </div> 
         <div class="goodlistmain-p clearfix">
               <dl v-for="datap in dataps" :key="datap.id">
                    <dt>
                         <a href="#">
                             <img  v-lazy="datap.img"  alt="">
                         </a>
                         <div class="rob">
                             <span>抢!</span>
                         </div>
                    </dt>
                    <dd>
                         <a href="#">
                             <p>{{datap.title}}</p>
                             <span>特惠价{{datap.price}}充值购买￥149.0</span>
                         </a>
                    </dd>
               </dl>
         </div>
         <AppNav></AppNav>
    </div>
</template>

<script>
    import AppNav from '../Index/AppNav.vue'
    
    export default {
		 name:'app-good-list',
		  data(){
             return {
                 goodlisttops:[],
                 dataps:[]        
			 }
		  },
		 components:{
			AppNav
		 },
         methods:{
			getGoodsp(){
                let that= this
                let url = '/api/goodlistmain/'
                // __t:'+Date.now()+'&page='+that.page+'&count='+that.count
                fetch(url)
                .then((response)=>response.json())
                .then((res)=>{
                   this.dataps = res
                   
                })
            }
		 },
		  mounted(){
              var that = this;
			 fetch('/api/goodlisttop')
             .then((response)=>response.json())
             .then((res)=>{
                 this.goodlisttops = res;
                
             })
			this.getGoodsp()  
			  
		  }
    }
</script>

<style lang="scss" scoped>
       

</style>