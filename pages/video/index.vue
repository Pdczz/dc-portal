<template>
  <div>
    <el-container style="width: 100%" class="mycontain">
      <el-row :gutter="40" style="margin: 0 auto;width: 100%;">
        <el-col :xs="24" :sm="12" :md="8">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~static/img/img-1.jpg" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~static/img/img-2.jpg" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~static/img/img-3.jpg" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~static/img/img-1.jpg" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-container>

  </div>

</template>

<script>
  export default {
    name: "index",
    layout: 'blog',
    data(){
      return{
        currentDate: "2021-09-20T08:17:53.297Z"
      }
    }
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

  .mycontain {
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

    img {
      margin: 0 auto;
    }

    .mycontain {
      padding-top: 65px;
    }
  }

  @media screen and (min-width: 600px) {
    .el-container {
      max-width: 1200px;
    }

    .el-row {
      max-width: 1200px;
    }
  }

  .box {
    font-family: 'Ubuntu', sans-serif;
    overflow: hidden;
    position: relative;
  }

  .box img {
    width: 100%;
    height: auto;
    transition: all 0.45s;
  }

  @media screen and (max-width: 650px) {
    .box img {
      margin: 0 auto;
    }
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-card {
    border-radius: 10px
  }
  .el-col{
    padding: 20px 0px
  }
</style>
