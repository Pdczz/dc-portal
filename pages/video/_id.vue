<template>

  <div>
    <el-container style="width: 100%" class="mycontain"><!--:style="getWidth()"-->
      <el-row  style="margin: 0 auto;width: 100%"><!--:style="getWidth()"-->
        <el-col :xs="24" :sm="24" :md="24" :lg="18">
          <div class="articles-area">
            <el-card style="text-align: left" shadow="never" >
              <div style="text-align: left">
                <div class="videoitem">
                  <video
                    :id="'myvideo'"
                    class="video-js vjs-default-skin vjs-big-play-centered vjs-fluid"
                    controls
                    muted
                    preload="auto"
                    >
                    <source :src="videoUrl" type="application/x-mpegURL"/>
                  </video>

                </div>
                <div style="padding: 20px 0">
                  <h3>
                    外交部數美帝國主義102條罪！歌唱帝國主義逃跑了！鄒幸彤反對解散支聯會！香港一過雙十即屬分裂國家！恆基李家傑不知大難臨頭？大陸疫情將在黑龍江逗
                  </h3>
                </div>
              </div>
              <div class="post-copyright">
                <p>
                  <span>本文标题：</span>
                </p>
                <p>
                  <span>文章作者：</span>塞万提斯2020
                </p>
                <p>
                  <span>发布时间：</span>
                </p>
                <p>
                  <span>最后更新：</span>
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
    import videojs from "video.js";
    import "videojs-contrib-hls";
    import ArticleRight from '../../components/Article/ArticleRight'
    export default {
        name: "videoId",
        components: {ArticleRight},
        layout: 'blog',
        data() {
            return {
                videoUrl:"http://pdczz.com/video/hls/lucene.m3u8",
                videoList: [
                    {name: "1", url: "http://pdczz.com/video/hls/lucene.m3u8"}
                    ],   //视频播放地址
                player: [{one: ''}]  //存储初始化视频，用于退出页面时销毁video.js对象
            }
        },
        mounted() {
            this.$nextTick(() => {
                setTimeout(() => {
                    this.getVideo();
                }, 300);
            })
        },
        methods: {
            getVideo() {
                this.player[0].one = videojs("myvideo", {
                        bigPlayButton: true,
                        textTrackDisplay: false,
                        posterImage: true,
                        errorDisplay: false,
                        controlBar: true
                    },
                );
                /*for (let i = 0; i < this.videoList.length; i++) {
                    this.player[i].one = videojs("myvideo" + i, {
                            bigPlayButton: true,
                            textTrackDisplay: false,
                            posterImage: true,
                            errorDisplay: false,
                            controlBar: true
                        },
                    );
                }*/
            },
        },
        destroyed() {
            this.player[0].one.dispose()
            //页面销毁，同时也销毁video.js对象
            /*for (let i = 0; i < this.videoList.length; i++) {
                this.player[i].one.dispose()
            }*/
        }
    };
</script>
<style scoped>
  .video-player-box {
    width: 100%;
    margin: 0 auto;
    min-height: 4.18rem;
  }
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

