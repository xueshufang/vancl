<template>
   <footer class="app-nav ">
          <div class="main-footer">
              <a href="javascript:;">
                  <i class="yo-ico" @click = "clickFn">&#xe9bb;</i>
                  <span>凡客</span>
              </a>
                <a href="javascript:;">
                  <i class="yo-ico">&#xe63e;</i>
                  <span>分类</span>
            </a>
            <a href="javascript:;">
                  <i class="yo-ico">&#xe605;</i>
                  <span>定制</span>
              </a>
            <a href="javascript:;">
                  <i class="yo-ico" @click = "clickCar">&#xe502;</i>
                  <span>购物车</span>
              </a>
            <a href="javascript:;">
                  <i class="yo-ico">&#xe60d;</i>
                  <span>我的</span>
              </a>
          </div>
   </footer>
</template>

<script>

export default{
    name:'app-nav',
    methods:{
        clickFn(){
            this.$router.go('/main')
        },
        clickCar(){
            console.log(this.$router)
            this.$router.push({path:'/goodcar'})
        }

    }
}
</script>

<style lang="scss" scoped>


</style>