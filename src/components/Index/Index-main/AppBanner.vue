<template>
     <div class="app-banner banner">
				<!-- <div class="swiper-wrapper"> -->
					 <!-- <div class="swiper-slide" v-for="billboard in billboards" :key="billboards.id">
                         <img alt="" width="100%" :src="billboard.imageUrl">
                    </div> -->
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="billboard in billboards" :key="billboard.id"class="banner-img">
                             <img :src="billboard.imageUrl" alt="">
                        </mt-swipe-item>
                   
                    </mt-swipe>

				</div>
         <!-- <div class="swiper-pagination"></div> -->
          
    </div>
</template>
<script>
    import Vue from "vue"
    import axios from 'axios'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    import { Swipe, SwipeItem } from 'mint-ui';
    // import Swiper from 'swiper'
    export default{
       name:'app-banner',
       data(){
         return {
               billboards:[]
         }
       },
        methods:{
          getBanner(){
              axios.get('http://localhost:8080/mz/v4/api/billboard/home?',{
                  params:{__t:Date.now()}
              }).then((res)=>{
                  console.log(res)
                 this.billboards=res.data.data.billboards
              })
          }
        },
        created(){
            this.getBanner()
        }
        
    }
</script>

<style lang="scss" >
    .banner{position:relative;width:100%;height:2.35rem;background:#f2f2f2;overflow:hidden;
        .banner-img{
             display:inline-block;width:100%;height:19.6rem;
            
        }
    }
    

</style>