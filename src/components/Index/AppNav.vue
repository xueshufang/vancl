<template>
   <footer class="app-nav">
          <div class="main-footer">
              <a href="">
                  <i class="yo-ico">&#xe9bb;</i>
                  <span>凡客</span>
              </a>
                <a href="">
                  <i class="yo-ico">&#xe63e;</i>
                  <span>分类</span>
            </a>
            <a href="">
                  <i class="yo-ico">&#xe605;</i>
                  <span>定制</span>
              </a>
            <a href="">
                  <i class="yo-ico">&#xe502;</i>
                  <span>购物车</span>
              </a>
            <a href="">
                  <i class="yo-ico">&#xe60d;</i>
                  <span>我的</span>
              </a>
          </div>
   </footer>
</template>

<script>

export default{
    name:'app-nav'
}
</script>

<style lang="scss" scoped>

 footer{
     position:fixed;left: 0;bottom:0;height:4.25rem;width:100%;overflow:hidden; background:#fff;z-index:999;  border-top: 1px solid #999;
     .main-footer{
         display: flex;
         justify-content:center;
         align-items:center;
         flex-direction:row;
   
         a{
              position: relative;
                width: 20%;
                height: 100%;
                float: left;
                color: #999;
                text-align: center;
                display: flex;
                align-items: center;
                flex-direction: column;
                height:4.25rem;

               .yo-ico{
                    font-size:23px;
                }
                span{font-size: 14px;}
         }
     }
 }
</style>