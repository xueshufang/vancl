
import Vue from 'vue'

// Vue.directive('scroll-show',{
//     bind(el,binding){
//          console.log(binding)
//         window.addEventListener("scroll",function(e){
         
//             if(this.scrollY >46.8){
              
//             }else{
//                 binding.value.value = false
//             }
//         })
//     }
// })

Vue.directive('back-top',{
    inserted(el,binding){
       
        el.onclick=function(){
           
           document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
    }
})