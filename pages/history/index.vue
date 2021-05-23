<template>
  <div >
    <el-row style="width: 864px;margin: 0 auto;">
      <div ></div>
      <el-card v-for="(item,i) in items" :key="i">
        <img :src="item.src">
        <div>
          <h2 class="post-card-title">{{item.title}}</h2>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'Music',
    layout:'blog',
    data(){
      return{
        items:[
          {src:require('../../static/img/4.jpg'),title:'免费壁纸网站大全0'},
          {src:require('../../static/img/1.jpg'),title:'免费壁纸网站大全1'},
          {src:require('../../static/img/2.jpg'),title:'免费壁纸网站大全2'},
          {src:require('../../static/img/3.jpg'),title:'免费壁纸网站大全3'}
        ]
      }
      }
  }
</script>
<style>

</style>
<style scoped>
  .post-card-title{
    font-size: 1.5625rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: .75rem;
    position: relative;
    bottom: 180px;
    text-align: center;
  }
  .el-card /deep/ .el-card__body {
    padding: 0px;
  }
  .el-card{
    height: 250px;
    background-color: rgba(255,255,255,0.9);
    transition: all 0.5s;
    border: none;
    margin-bottom: 50px;
  }
  .el-card:hover{
    transform: scale(1.05);
  }
  .el-card img{
    width: 864px;
    height: 250px;
  }
</style>


