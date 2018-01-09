<template>
    <div class="app-detail">
           <div class="topTitle-p">
             <span class="topBack-p"></span>
             <span class="curTitle-p">商品详情</span>
         </div>
        <div class="other-content-p">
            <mt-swipe :auto="0" class="slider-p">
                <mt-swipe-item>
                      <a href="#">
                        <img src="http://i.vanclimg.com/640/q80/product/6/3/7/6375449/big/6375449-1j201710130915289125.jpg" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img src="http://i.vanclimg.com/640/q80/product/6/3/7/6375449/big/6375449-1j201710130915289125.jpg" alt="">
                   </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img src="http://i.vanclimg.com/640/q80/product/6/3/7/6375449/big/6375449-1j201710130915289125.jpg" alt="">
                   </a>
                </mt-swipe-item>
            </mt-swipe>
              <div class="prd-tit-p">
                    <span class="name-p">凡客羊毛大衣 青果零件型大衣 女款藏蓝色</span>
                    <span class="price-p">1298元</span>
                    <span class="pricep-p">758元</span>
                    <a href="#" class="reprice-p">
                        <span>充100反100，点击充值</span>
                    </a>
                    <span class="discount-p">充值后购买相当于379元</span>
              </div>
        </div>
    </div>
</template>
 
<script>


   export default {
        name:'app-deatil'
       
  }
</script>

<style lang="scss" scoped>

</style>