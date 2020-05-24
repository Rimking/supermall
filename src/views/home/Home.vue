<template>
 <div id='home'>
    <nav-bar class="home-nav">
      <div slot="center"> 购物街</div></nav-bar>
    <swiper></swiper>
    <recommed-view :recommends="recommends"></recommed-view>

 </div>
</template>

<script>

  import  NavBar from 'components/common/navbar/NavBar'
  import { Swiper } from 'components/common/swiper'
  import { getHomeMultdata } from "network/home"
  import RecommedView from './childrencomps/recommedview'

      export default {
          name: 'Home',
          components:{
            NavBar,
            Swiper,
            RecommedView
          },
           data(){
            return{
            recommends:[],
            }
          },
          created(){
            //1.请求多个数据
          getHomeMultdata().then(res =>{
              this.recommends = res.data.recommend.list;
         }) 
          }

      };
</script>

<style scoped>
.home-nav{
  width: 100%;
  height: 44px;
 background-color: #EE1169;
 color: #fff;

}




</style>