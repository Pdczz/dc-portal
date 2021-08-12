<template>
    <div class="main_content">
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


            <div class="section-header mb-5 border-bottom uk-flex-middle">
              <div class="section-header-left">
                <h3> Your Liked Videos</h3>
              </div>
              <div class="section-header-right">
                <div class="display-as">
                  <a href="#" uk-tooltip="title: Veiw as list; pos: top-right">
                    <i class="icon-feather-grid"></i>
                  </a>
                  <a href="your-watch-later.html" class="active"
                     uk-tooltip="title: Veiw as Grid; pos: top-right">
                    <i class="icon-feather-list"></i>
                  </a>
                </div>
              </div>
            </div>

            <div v-for="article in articles" :key="article.id">
              <a href="single-video.html" class="video-post video-post-list">
                <!-- Blog Post Thumbnail -->
                <div class="video-post-thumbnail">
                  <span class="play-btn-trigger"></span>
                  <span class="video-post-time">23:00</span>
                  <img src="~static/images/video-thumbal/2.png" alt="">
                </div>
                <!-- Blog Post Content -->
                <div class="video-post-content">
                  <h3>{{article.articleTitle}}
                  </h3>
                  <span class="video-post-user">Jonathan Madano</span>
                  <span class="video-post-views">531k views</span>
                  <span class="video-post-date"> {{article.articleDate}} </span>
                  <p> {{article.articleAbstract}}</p>
                  <!-- option menu -->
                  <span class="btn-option">
                                    <i class="icon-feather-more-vertical"></i>
                                </span>
                  <div class="dropdown-option-nav" uk-dropdown="pos: bottom-right ;mode : hover">
                    <ul>
                      <li>
                        <span> <i class="uil-history"></i> Watch Later</span>
                      </li>
                      <li>
                        <span> <i class="uil-bookmark"></i> Add Bookmark</span>
                      </li>
                      <li>
                        <span> <i class="uil-share-alt"></i> Share Your Friends</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </a>
            </div>
            <ul class="uk-pagination my-5 uk-flex-center" uk-margin>
              <nuxt-link :class="{page: true,current: pageNo == 1}" v-for="pageNo in totalPage" :key="pageNo" :to="`jotter?page=${pageNo}`">
                {{ pageNo }}
              </nuxt-link>
             <!-- <li class="uk-active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="uk-disabled"><span>...</span></li>
              <li><a href="#"><span uk-pagination-next></span></a></li>-->
            </ul>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    import * as api from "../../../api/api";
    export default {
        name: "index2",
        layout: 'blog',
        watchQuery: true,
        async asyncData({$axios, redirect,route}) {
            //服务端渲染
            let pid = route.query.page==undefined ? '1':route.query.page;
            let params={pid:pid}
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

            }
        },
        created() {
            // this.currentPage = window.sessionStorage.getItem('page') == null ? 1 : JSON.parse(window.sessionStorage.getItem('page' || '[]'))
        },
        mounted() {
            this.currentPage = window.sessionStorage.getItem('page') == null ? 1 : JSON.parse(window.sessionStorage.getItem('page' || '[]'))
            //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示

        },
        methods: {
            getWidth() {
                return {width: this.screenWidth + 'px'}
            },
            handleCurrentChange(page) {
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
 @media screen and (min-width: 1100px) {
   p{
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
     overflow: hidden;
   }
 }


</style>
