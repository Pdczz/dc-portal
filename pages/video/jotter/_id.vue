<template>
  <div class="articles-area">
    <div style="margin-bottom: 20px"></div>
    <el-row style="width: 1200px;margin: 0 auto; ">
      <el-col style="width: 900px">
        <div class="articles-area">
          <el-card style="text-align: left" shadow="never" v-if="article">
            <div style="text-align: left">
              &nbsp&nbsp<span style="font-size: 20px"><strong>{{article.articleTitle}}</strong></span><br>
              &nbsp&nbsp<i class="el-icon-date" style="padding-top: 15px;">{{article.articleDate}}</i><br>
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
      <el-col style="width: 280px">
        <ArticleRight></ArticleRight>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import ArticleRight from '../../../components/Article/ArticleRight'

    export default {
        name: "_id",
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
<style scoped>
  @import "../../../assets/css/markdown.css";
</style>
