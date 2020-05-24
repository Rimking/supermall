<template>
  <div class="siled" >
    <!--   广告图片区域 -->
    <div class="siledshow" v-on:mouseover="stop()" v-on:mouseout="move()">
      <ul>
        <li v-for="(item,index) in banners" v-show="index == mark" :key="index">
          <a :href="item.link"><img :src="item.image"/></a>
        </li>
      </ul>
    </div>
    <!-- 小圆点 -->
    <div class="bar">
      <span
        v-for="(point,num) in banners"
        :class="{'active':num === mark }"
        :key="num"
        @click="putDown(num)"
      ></span>
    </div>
  </div>
</template>

<script>

import { getHomeMultdata } from "network/home"


export default {
  name: "Swiper",
  data() {
    return {
      banners: [],
      mark: 0, //小圆点的位置标识
      time: ""
    };
  },
  methods: {
    autoPlay() {
      //因为绑定mark来实现图片的显示  所以默认让mark自增
      this.mark++;
      if (this.mark == this.banners.length) {
        this.mark = 0;
      }
    },
    // 播放方法
    play() {
      this.time = setInterval(this.autoPlay, 2000);
    },
    putDown(index) {
      this.mark = index;
    },
    stop() {
      clearInterval(this.time);
    },
    move() {
      this.play();
    },
     as(){
       console.log(this.banners);
     }
  },
  created(){
      //1.请求多个数据
          getHomeMultdata().then(res =>{
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
         }) 
    this.play();
    
  }
};
</script>

<style scoped>
    *{
            margin: 0;
            padding: 0;
        }
        .siled{
                width: 100%;
                height: 166px;
                overflow: hidden;
                position: relative;
        }
        .siledshow{
              width: 100%;
             height: 166px;
        }
        li{
            position: absolute;
            list-style: none;
        }

       img{
            width: 100%;
            height: 166px;
        }
        .bar{
            position: absolute;
            width: 100%;
            margin-left: 122px;
            z-index: 10;
            text-align: left;
            bottom: 10px;

            
        }
        .bar span{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid #fff;
            background-color:transparent;
            display: inline-block;
            margin-right: 10px;
        }

        .active{
            text-shadow: 1px 1px 1px rgba(100, 100, 100, .2);
            background-color:#fff !important;
        }


</style>