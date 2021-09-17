<template>
  <div>
    <el-container style="width: 100%" class="mycontain">
      <el-row  :gutter="40" style="margin: 0 auto;width: 100%">
        <el-col :xs="24" :sm="12" :md="8" >
          <div class="box">
            <img src="~static/img/img-1.jpg" alt="">
          </div>
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" >
          <div class="box">
            <img src="~static/img/img-2.jpg" alt="">
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" >
          <div class="box">
            <img src="~static/img/img-3.jpg" alt="">
          </div>
        </el-col>
      </el-row>
    </el-container>

  </div>

</template>

<script>
    export default {
        name: "index",
        layout:'blog'
    }
</script>

<style scoped>
  html, body, #app, .el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
  .mycontain{
    margin: 0 auto;
    padding-top: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  @media screen and (max-width: 767px) {
    .rigcss {
      display: none;
    }
    img{
      margin: 0 auto;
    }
    .mycontain {
      padding-top: 65px;
    }
  }
  @media screen and (min-width: 600px) {
    .el-container{
      max-width: 1200px;
    }
    .el-row{
      max-width: 1200px;
    }
  }
  .box{
    font-family: 'Ubuntu', sans-serif;
    overflow: hidden;
    position: relative;
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.45s;
  }
  @media screen and (max-width:650px){
    .box img{ margin: 0 auto; }
  }
</style>
