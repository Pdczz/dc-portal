<template>
  <div>
    <el-card shadow="always" style="margin-left: 10px;border-radius: 10px;font-size: 15px">
      <div class="titleforColor">&nbsp文章推荐</div>

      <router-link class="article-link" :to="{name:'jotter-id',params:{id: 26}}">
        <div class="recommend">1.SpringBoot原理解析</div>
      </router-link>

      <router-link class="article-link" :to="{name:'jotter-id',params:{id: 23}}">
        <div class="recommend">2.Java核心技术-并发(1)</div>
      </router-link>
      <router-link class="article-link" :to="{name:'jotter-id',params:{id: 25}}">
        <div class="recommend">3.Java核心技术-并发(2)</div>
      </router-link>
      <router-link class="article-link" :to="{name:'jotter-id',params:{id: 14}}">
        <div class="recommend">4.SpringMVC原理</div>
      </router-link>

    </el-card>
    <el-card shadow="always" style="margin-left: 10px;border-radius: 10px" >

      <div class="buttonColor">
        <div class="titleforColor">&nbsp特色标签</div>
        <br>
        <el-button size="mini" round><span>Java后端开发</span></el-button>
        <el-button size="mini" round><span>SpringBoot</span></el-button>
        <el-button size="mini" round><span>MYSQL</span></el-button>
        <el-button size="mini" round><span>JVM</span></el-button>
        <el-button size="mini" round><span>JavaEE</span></el-button>
        <el-button size="mini" round><span>Spring</span></el-button>
        <el-button size="mini" round><span>Spring MVC</span></el-button>
        <el-button size="mini" round><span>Mybatis</span></el-button>
        <el-button size="mini" round><span>Nginx</span></el-button>
        <el-button size="mini" round><span>Linux</span></el-button>
        <el-button size="mini" round><span>JavaScript</span></el-button>
        <el-button size="mini" round><span>Veu</span></el-button>
        <el-button size="mini" round><span>Vuex</span></el-button>
        <el-button size="mini" round><span>前端</span></el-button>
        <el-button size="mini" round><span>腾讯云</span></el-button>
        <el-button size="mini" round><span>Centos7</span></el-button>
      </div>
    </el-card>
    <el-card shadow="always" style="margin-left: 10px;border-radius: 10px">
      <div class="titleforColor">&nbsp好站分享</div>
      <br>
      <a href="https://lai.yuweining.cn" style="color:#808080">&nbsp&nbsp不死鸟</a>
    </el-card>
    <el-card shadow="always" style="margin-left: 10px;border-radius: 10px">
      <div class="titleforColor">&nbsp联系我</div>
      <br>
      <a style="color:#808080">&nbsp&nbsp1634450780@qq.com</a>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'ArticleRight'

  }
</script>

<style scoped>
  .buttonColor span{
    color: #bfbfbf;
  }
  .buttonColor .el-button{
    margin-bottom: 5px;
    margin-left: 0px;
  }
  .imgstyle a img{
    height: 30px;
    width: 30px;
    margin-left: 10px;
  }
  hr {
    margin-top: 30px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  a{
    text-decoration: none;
  }
  a .recommend{
    color: #808080;
    margin-top: 10px;
  }
  a .recommend:hover{
    color: #0cf;
  }
  .titleforColor{
    border-left: 3px solid #0cf;
    color:#808080
  }
  /*.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #bfbfbf;   // 进行修改背景和字体
  color: #fff;
  }*/
  .el-card{
    text-align: left;
    margin-bottom: 20px;
    background-color: white;
  }
</style>
