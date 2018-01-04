<template>
  <div id="app">
      <AppHeader></AppHeader>
      <AppMain></AppMain>
      <AppNav></AppNav>
  </div>
</template>

<script>
  import AppMain from './components/Index/AppMain.vue'
  import AppHeader from './components/Index/AppHeader.vue'
  import AppNav from './components/Index/AppNav.vue'
  export default {
  name: 'app',
  components:{
     AppMain,AppHeader,AppNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
