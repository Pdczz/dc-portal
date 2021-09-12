<template>
  <div>
    <el-container style="width: 100%" class="mycontain"><!--:style="getWidth()"-->
      <el-row  style="margin: 0 auto;width: 100%"><!--:style="getWidth()"-->
        <el-col :xs="24" :sm="24" :md="24" :lg="18">
          <div class="articles-area">
            <el-card style="text-align: left" shadow="never" v-if="article">
              <div style="text-align: left">
                <span style="font-size: 20px"><strong>{{article.articleTitle}}</strong></span><br>
                <i class="el-icon-date" style="padding-top: 15px;">{{article.articleDate}}</i><br>
                <div class="markdown-body">
                  <div v-html="article.articleContentHtml"></div>
                </div>
              </div>
              <div class="post-copyright">
                <p>
                  <span>本文标题：</span>{{article.articleTitle}}
                </p>
                <p>
                  <span>文章作者：</span>塞万提斯2020
                </p>
                <p>
                  <span>发布时间：</span>{{article.articleDate}}
                </p>
                <p>
                  <span>最后更新：</span>{{article.articleDate}}
                </p>
                <p>
                  <span>版权声明：</span>本博客所有文章除特别声明外，均采用 CC BY-NC-SA 3.0 CN 许可协议。转载请注明出处！
                </p>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="6" ><!-- style="width: 280px"-->
          <article-right class="rigcss"></article-right>
        </el-col>
      </el-row>
    </el-container>
  </div>

</template>

<script>
    import ArticleRight from '../../components/Article/ArticleRight'

    export default {
        name: "jotterId",
        layout: 'blog',
        components: {ArticleRight},
        async asyncData({$axios, route}) {
            //服务端渲染
            let articles = await $axios('/article?id=' + route.params.id);
            return {
                article: articles.data
            }
        },
        data() {
            return {
                rightShow: true,
                /*article: []*/
            }
        },
        mounted() {
            this.loadArticle()
        },
        methods: {
            loadArticle() {
                var _this = this
                _this.$axios.get('/article?id=' + this.$route.params.id).then(resp => {
                    if (resp && resp.status === 200) {
                        _this.article = resp.data
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .mycontain{
    margin: 0 auto;
    padding-top: 20px;
  }

  @media screen and (min-width: 600px) {
    .el-container{
      max-width: 1200px;
    }
    .el-row{
      max-width: 1200px;
    }
  }


  @media screen and (max-width: 767px) {
    .markdown-body .highlight pre, .markdown-body pre {
      width: 450px;

    }

    .rigcss {
      display: none;
    }

    .mycontain {
      padding-top: 65px;
    }
  }
  .el-card {
    text-align: left;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, .8)
  }

  .post-copyright {
    margin: 2em 0 0;
    padding: 0.5em 1.0em;
    border-left: 3px solid #FF1700;
    background-color: #F9F9F9;
    font-size: 0.93rem;
    line-height: 1.6em;
    word-break: break-all;
  }

  .post-copyright p {
    margin: 0;
  }

  .post-copyright span {
    display: inline-block;
    width: 5.2em;
    color: #b5b5b5;
    font-weight: bold;
  }
</style>
<style>
  /*@import "static/css/markdown.css";*/
  @import "../../static/css/markdown.css";
</style>
