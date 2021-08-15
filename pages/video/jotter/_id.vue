<template>
  <!--<div class="main_content">
    <div class="main_content_inner">
      <div uk-grid>
        <div class="uk-width-1-4@m uk-flex-last@m">
          <div class="uk-card-default rounded" uk-sticky="top:10; offset: 90; bottom: true; media: @m;">

            <div class="text-center p-3">

              <img src="~static/images/avatars/home-profile.jpg"
                   class="avatar-large circle m-auto my-3" alt="">
              <h4 class="mb-1"> Thomas Bruns </h4>
              <p class="uk-text-small text-muted"> Since 2016</p>

            </div>

            <hr class="my-0">
            <ul class="uk-list uk-list-divider uk-margin-small-top pt-1 pb-2">
              <i>
                <a href="#" class="ml-4">
                  <i class="uil-user mr-1"></i>
                  Subscriptions <span class="pr-4 uk-float-right"> 122</span> </a>
              </i>
              <li>
                <a href="#" class="ml-4">
                  <i class="uil-cloud-upload mr-1"></i>
                  Uploads <span class="pr-4 uk-float-right"> 12</span></a>
              </li>
              <li>
                <a href="#" class="ml-4">
                  <i class="uil-thumbs-up mr-1"></i>
                  Likes <span class="pr-4 uk-float-right"> 43</span></a>
              </li>
              <li>
                <a href="#" class="ml-4">
                  <i class="uil-layers mr-1"></i>
                  Playlists <span class="pr-4 uk-float-right"> 2</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div class="uk-width-3-4@m">
          <div style="text-align: left" shadow="never" v-if="article">
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
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <div>
    <div class="markdown-body">
      <div v-html="article.articleContentHtml"></div>
    </div>
  </div>
</template>

<script>
    import ArticleRight from '../../../components/Article/ArticleRight'

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
  .main_content{
    position: relative;
    z-index: 5;
    display: block;
    /*margin-left: 275px;*/
    padding-top: 65px;
  }
  .collapse-sidebar .main_content {
    margin-left: 0px;
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
<style scoped>
  @import "../../../assets/css/markdown.css";
</style>
