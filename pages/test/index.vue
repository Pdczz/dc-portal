<template>
    <div>

      <HeadNew></HeadNew>

        <el-row class="rowWidth" style="margin: 0 auto" ><!--:style="getWidth()"-->
          <el-col :xs="24" :sm="24" :md="24" :lg="18"></el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="18">
            <div class="articles-area">
              <div v-for="article in articles" :key="article.id">
                <el-card shadow="always" style="border-radius: 10px">
                  <el-row>
                    <el-col :span="8">
                      <p class="pic">
                        <img class="img" src="~static/img/tp.png" alt="" style="border-radius: 10px">
                      </p>
                    </el-col>
                    <el-col :span="1">
                      <div style="margin: 10px"></div>
                    </el-col>
                    <el-col :span="15">
                      <div style="float:left;width:100%;height: 200px;margin-top: 11px">
                        <router-link class="article-link" :to="{name:'jotter-id',params:{id: article.id}}">
                    <span class="post-title">
                      {{article.articleTitle}}
                    </span>
                        </router-link>
                        <i class="el-icon-date post-meta"> {{article.articleDate}}</i><br>
                        <router-link class="article-link " :to="{name:'jotter-id',params:{id: article.id}}">
                      <span class="post-content">
                        {{article.articleAbstract}}
                      </span>
                        </router-link>
                        <router-link class="article-link " :to="{name:'jotter-id',params:{id: article.id}}">
                          <el-button type="primary" size="mini" round style="float: right"><span>阅读全文>></span></el-button>
                        </router-link>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
            </div>
            <div class="pagination" >
              <div class="page-list">
                <nuxt-link :class="{page: true,current: pageNo == 1}" v-for="pageNo in totalPage" :key="pageNo" :to="`test?page=${pageNo}`">
                  {{ pageNo }}
                </nuxt-link>
              </div>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="6" v-show="rightShow"><!-- style="width: 280px"-->
            <article-right></article-right>
          </el-col>
        </el-row>





    </div>
</template>

<script>
  import HeadNew from "../../components/HeadNew/HeadNew";
  import ArticleRight from '../../components/Article/ArticleRight'
  import * as api from "../../api/api";
  export default {
    name: "index",
    components:{
      HeadNew,ArticleRight
    },
    watchQuery: true,
    async asyncData({$axios, redirect,route}) {
      //服务端渲染
      let pid = route.query.page==undefined ? '1':route.query.page;
      let params={pid:pid};
      return api.getArticleList({params}).then(res=>{
          return {
            articles:res.items,
            total:res.total
          }
      }).catch(err=>{
        return {
          articles:[],
          total:0
        }
      });
    },
    data() {
      return {
        pageSize: 7,
        keywords: '',
        currentPage: 1,
        rightShow: true,
        cardChange: false,
        screenWidth: 0,
      }
    },
    created() {
      // this.currentPage = window.sessionStorage.getItem('page') == null ? 1 : JSON.parse(window.sessionStorage.getItem('page' || '[]'))
    },
    mounted() {
      this.currentPage = window.sessionStorage.getItem('page') == null ? 1 : JSON.parse(window.sessionStorage.getItem('page' || '[]'))
      //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      console.log("执行mounted");
      console.log("宽度"+w);
      if (w < 1050) {
        //侧边栏不显示
        this.rightShow = false;
      }
      if (w < 800) {
        this.barShow = true;
      }
      //根据屏幕改变el-row大小
      if (w > 1200) {
        this.screenWidth = 1200;
      } else {
        this.screenWidth = w;
      }
      console.log(this.screenWidth);
    },
    methods: {

      handleCurrentChange(page) {
        // this.$router.push({path:'/',params:{pageNo:e}})
        /*var _this = this
        //document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        window.sessionStorage.setItem('page', page)
        _this.$axios.get('/article/' + this.pageSize + '/' + page).then(resp => {
          if (resp && resp.status === 200) {
            _this.articles = resp.data.items
            _this.total = resp.data.total
          }
        })*/
        this.$router.push({path:'/jotter',query:{page:page}})
      },
      getContent(articleContentMd) {
        return articleContentMd.replace(/<\/?.+?>/g, '').replace(/ /g, '')
      },
      asyncData() {

      }
    },
    computed:{

      totalPage () {
        return Math.ceil(this.total / 9)
      },
    }
  }
</script>
<style>

</style>
<style scoped>

  /*@import "../../assets/css/blog.css";*/
</style>
<style scoped>
  @import "../../assets/css/head.css";
  @media screen and (min-width:1200px){
    .rowWidth{
      width: 1200px;
    }
  }

  .articles-area {
    /*width: auto;
    height: auto;*/
    margin-left: auto;
    margin-right: auto;
  }

  .article-link {
    text-decoration: none;
    color: #606266;
  }

  .article-link:hover {
    color: #409EFF;
  }

  .post-meta {
    font-family: "Lora", "Times New Roman", serif;
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #a3a3a3;
  }

  .post-content {
    clear: left;
    font-size: 15px;
    line-height: 1.77;
    text-align: justify;
    text-justify: distribute;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    color: #a3a3a3;
  }

  .post-title {
    clear: left;
    font-size: 18px;
    line-height: 1.77;
    text-align: justify;
    text-justify: distribute;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .post-content:hover {
    color: #409EFF;
  }

  .el-card {
    text-align: left;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 255)
  }

  /*.el-pagination.is-background ::v-deep .el-pager li:not(.disabled).active {
    background-color: #bfbfbf;
    !*进行修改背景和字体 *!
    color: #fff;
  }*/

  * {
    box-sizing: border-box; /*让.pic的width样式由padding-top撑开*/
  }

  .pic {
    position: relative;
    width: 100%; /*相当于100px*/
    padding-top: 50%; /*相当于100px.这是比较关键的一步，margin和padding是相对于其父元素的宽度的100%*/
  }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /*相当父元素的100%是100px*/
    height: 110%; /*相当父元素的100%是100px*/
  }

  #plugin-list-header {
    margin: 30px 0;
  }

  #plugin-list-title {
    font-family: math;
    font-size: 36px;
    font-weight: 300;
    line-height: 1;
    float: left;
    margin-left: 15px;
  }

  #plugin-search-input {
    font-size: 16px;
    font-family: inherit;
    -webkit-appearance: none;
    border: 1px solid #e3e3e3;
    padding: 10px 10px;
    width: 40%;
    margin-top: 25px;
  }

  button, input, select {
    margin: 0;
    padding: 0;
    border: 0;
  }

  #item {
    margin-left: 350px;
    color: #999;
  }


  body {
    /* background-color: var(--color-bg); */
    font: 14px/1 PingFangSC, 'Microsoft Yahei', Microsoft Sans Serif, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  @media screen and (max-width: 767px) {
    .el-card {
      height: 180px;
    }

    .pic {

      height: 100px;
    }

    .post-title {
      font-size: 1px;
      line-height: 1.3;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }

    .post-meta {
      font-size: 1px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .post-content {
      font-size: 1px;
      line-height: 1.6;
    }

    .el-button {
      display: none;
    }
  }

  .title {
    vertical-align: middle;
    LINE-HEIGHT: 150%;
    font-size: 18px;
    letter-spacing: -1px;
    margin: 0;
    padding: 6px 0;
  }

  .pagination{
    text-align: center
  }

  .page-list{
    display: inline-block;
    text-align: left
  }
  .page{
    display: inline-block;
    width: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #fff;
    margin: 8px;
    color: #333;
    border-radius: 4px;
    font-weight: bold;
  }
  .page:hover{
    background: #ddd;
  }
  .page:current{
    background: #fff;
    color: rgb(64,158,255);
  }

</style>
