<template>
<div class="recommed">
    <div v-for="(item,index) in recommends" :key="index" class="recom-item">
      <a :href="item.link">
          <img :src="item.image" >
          <div>{{item.title}}</div>
      </a>

    </div>

</div>
</template>

<script>
export default {
  name: 'recommedview',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
 
};
</script>

<style scoped>
.recommed{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0px 20px;
  border-bottom: 8px solid  #eee;
}
.recommed a{
  text-decoration: none;
  color: black;
}

.recom-item{
  flex: 1;
}
.recom-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}


</style>