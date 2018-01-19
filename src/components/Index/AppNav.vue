<template>
   <footer class="app-nav ">
          <div class="main-footer">
              <a href="javascript:;">
                  <i class="yo-ico" @click = "clickFn">&#xe9bb;</i>
                  <span>凡客</span>
              </a>
                <a href="javascript:;">
                  <i class="yo-ico" @click = "clickList">&#xe63e;</i>
                  <span>分类</span>
            </a>
            <a href="javascript:;">
                  <i class="yo-ico" @click = "listDetial">&#xe605;</i>
                  <span>定制</span>
              </a>
            <a href="javascript:;">
                  <i class="yo-ico" @click = "clickCar">&#xe502;</i>
                  <span>购物车</span>
                  <em class="goods-num">{{getNum}}</em>
              </a>
            <a href="javascript:;">
                  <i class="yo-ico" @click = "clickLogin">&#xe60d;</i>
                  <span>我的</span>
              </a>
          </div>
   </footer>
</template>

<script>
 import {mapGetters} from 'vuex'
export default{
    name:'app-nav',
    data(){
       return{
       	
       }	
    },
    methods:{
        clickFn(){
            this.$router.push({path:'/main'})
        },
        clickCar(){
            console.log(this.$router)
            this.$router.push({path:'/goodcar'})
        },
        clickLogin(){
            var users=JSON.parse(localStorage.user_info?localStorage.user_info:"[]")
           
             users.user_id?this.$router.push('/mine'):this.$router.push('/login')
        },
        clickList(){
             this.$router.push({path:'/goodlist'})
        },
        listDetial(){
             this.$router.push({path:'/gooddetail'})
        },
        	

    },
    computed:{
         ...mapGetters(['getNum'])
    }
}
</script>

<style>


</style>