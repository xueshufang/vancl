<template>
    <div class="app-detail">
           <div class="topTitle-p">
             <span class="topBack-p" @click='prevclick'></span>
             
             <span class="curTitle-p">商品详情{{goodDe.id}}</span>
         </div>
        <div class="other-content-p">
            <mt-swipe :auto="0" class="slider-p">
                <mt-swipe-item>
                      <a href="#">
                        <img :src="goodDe.img" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img :src="goodDe.img" alt="">
                   </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img :src="goodDe.img" alt="">
                   </a>
                </mt-swipe-item>
            </mt-swipe>
              <div class="prd-tit-p">
                    <span class="name-p">凡客羊毛大衣 {{goodDe.title}} 女款藏蓝色</span>
                    <span class="price-p">1298元</span>
                    <span class="pricep-p">{{goodDe.price}}元</span>
                    <a href="#" class="reprice-p">
                        <span>充100反100，点击充值</span>
                    </a>
                    <span class="discount-p">充值后购买相当于379元</span>
              </div>
                <div class="bb mhr"></div>
                <div class="size-box-p" >
                    <span class="chkbox-p"></span>
                    <h3 class="size-info">选择颜色/尺码</h3>
                  <span class="sword-r" @click="changeState"></span>
                </div>
                <div class="size-color-p" v-show ='colorShow'>
                    <h3 class="tit">选择颜色</h3>
                    <p class="color clearfix">
                        <span class="color-size-p">蓝色</span>
                        <span class="color-size-p">蓝色</span>
                        <span class="color-size-p">蓝色</span>
                        <span class="color-size-p">蓝色</span>
                    </p>
                    <h3 class="tit">尺码选择</h3>
                    <p class="size clearfix">
                        <span color-size-p>S</span>
                        <span color-size-p>M</span>
                        <span color-size-p>L</span>
                        <span color-size-p>XL</span>
                        <span color-size-p>XXL</span>
                    </p>
                    <h3 class="tit">购买数量</h3>
                    <p class="changecount clearfix">
                        <span class="minus"></span>
                        <span id="num" class="num">1</span>
                        <span class="plus"></span>
                    </p>
            
                </div>
                <div class="bb mhr"></div>
                <div class="prd-des">
                    <ul class="prd-ul">
                        <li class="black active">
                            <a href="#">商品详情</a>
                        </li>
                        <li class="black">
                            <a href="#">评论</a>
                        </li>
                        <li class="black">
                            <a href="#">咨询</a>
                        </li>
                    </ul>
                </div>
                <div class="bb666"></div>
                <div class="prd-des-cont">
                    <div id="auto-p">
                         <div class="tagmao0">
                             <img src="http://i3.m.vancl.com/oms/2016_9_9_15_50_14_3185_640x89.jpg" alt="">
                             <img src="http://i4.m.vancl.com/oms/2017_3_15_9_7_59_4169_640x270.jpg" alt="">
                             <img src="http://i3.m.vancl.com/oms/2016_9_9_15_50_17_3838_640x181.jpg" alt="">
                             <img src="http://i6.m.vancl.com/oms/2016_9_9_15_50_17_6903_640x524.jpg" alt="">    
                             <img src="http://mimages.vancl.com/oms/2016_9_9_15_50_18_283_640x525.jpg" alt="">
                              <img src="http://i1.m.vancl.com/oms/2016_9_9_15_50_18_1712_640x400.jpg" alt="">
                              <img src="http://i4.m.vancl.com/oms/2016_9_9_15_50_18_4777_640x520.jpg" alt="">
                              <img src="http://i2.m.vancl.com/oms/2016_9_9_15_50_18_2617_640x111.jpg" alt="">
                               <img src="http://i3.m.vancl.com/oms/2017_11_10_15_17_36_3004_640x804.jpg" alt="">
                               <img src="http://i8.m.vancl.com/oms/2017_11_10_15_17_39_8795_640x804.jpg" alt="">
                               <img src="http://i8.m.vancl.com/oms/2016_9_9_15_50_24_8701_640x103.jpg" alt="">
                               <img src="http://i1.m.vancl.com/oms/2016_9_9_15_50_24_1766_640x392.jpg" alt="">
                               <img src="http://i3.m.vancl.com/oms/2016_9_9_15_50_24_3194_640x511.jpg" alt="">
                               <img src="data-original" alt="">
                               <img src="" alt="">
                            </div>
                    </div>
                </div>
                
        </div>
        <div class="nav">
            <a href="#">
                <span class="nav-shopcart"></span>
                <i class="goods-num">0</i>
            </a>
            <a href="#">
                <span class="addToCart" @click="addGG({id:goodDe.id,price:goodDe.price,title:good.title,img:goodDe.img})" >加入购物车</span>
            </a>
        </div>
    </div>
</template>
 
<script>

   import {mapState,mapActions} from 'vuex'
   export default {
        name:'app-deatil',
        data(){
           return{
               colorShow:false,
               isShow:true,
               goodDe: this.good?this.good:{},
              
           }
        },
        created () {
            console.log('sdgsdg', this.goodDe)
            console.log('456',this.good)
            this.goodDe = this.good
            console.log('123', this.goodDe)
        },
        methods:{
            prevclick(){

                this.$router.go(-1)
            },
            changeState(){
                alert(1)
              
                this.colorShow = !this.colorShow
                
            },
            ...mapActions(['addGood']),
            addGG (obj) {
                this.addGood(obj)
                this.$router.push('/goodcar')
            }
           
        },
        computed:{
           ...mapState(['good'])
        }
       
  }
</script>

<style lang="scss" scoped>

</style>